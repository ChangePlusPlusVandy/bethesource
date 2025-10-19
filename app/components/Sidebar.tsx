"use client";

import {
  BookOpen,
  Calendar,
  House,
  KeyRound,
  LayoutDashboard,
  LogIn,
  LogOut,
  MessageCircleQuestion,
  Phone,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";

// User information
export const userInfo = {
  name: "First L.",
  role: localStorage.user ? JSON.parse(localStorage.user).role.name : "No role",
  isLoggedIn: false,
  isAdmin: localStorage.user
    ? JSON.parse(localStorage.user).role.name === "Staff"
      ? true
      : false
    : false,
};

// All sidebar entries
export const items = [
  {
    icon: <House />,
    description: "Home",
    href: "/",
  },
  {
    icon: <LayoutDashboard />,
    description: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: <BookOpen />,
    description: "Catalog",
    href: "/catalog",
  },
  {
    icon: <Calendar />,
    description: "Calendar",
    href: "/calendar",
  },
  {
    icon: <MessageCircleQuestion />,
    description: "FAQs",
    href: "/faqs",
  },
  { icon: <ShoppingCart />, description: "Cart", href: "/cart" },
  {
    icon: <Phone />,
    description: "Contact",
    href: "mailto:info@bethesource.org",
  },
];

// Admin information for conditional rendering
export const admin = {
  icon: <KeyRound />,
  description: "Admin Tools",
  href: "/admin/products",
};

// Logout information for conditional rendering
export const logout = {
  icon: <LogOut />,
  description: "Logout",
  href: "#",
};

// State of collapsibility, abstracted
interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  cartItemCount: number;
}

export default function Sidebar({
  isCollapsed,
  setIsCollapsed,
  isLoggedIn,
  setIsLoggedIn,
  cartItemCount,
}: SidebarProps) {
  // User Info
  const name = isLoggedIn ? JSON.parse(localStorage.user).name : "Log In";
  const role = isLoggedIn ? JSON.parse(localStorage.user).role.name : "Log In";
  // Automatically collapse sidebar for narrow screens
  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsCollapsed]);

  return (
    <SidebarContainer>
      <Profile
        isCollapsed={isCollapsed}
        isLoggedIn={isLoggedIn}
        name={name}
        role={role}
      />
      <SidebarItems
        isCollapsed={isCollapsed}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        cartItemCount={cartItemCount}
      />
    </SidebarContainer>
  );
}

interface ProfileProps {
  isCollapsed: boolean;
  isLoggedIn: boolean;
  name?: string;
  role?: string;
}

// Display either profile information or log in button
export function Profile({ isCollapsed, isLoggedIn, name, role }: ProfileProps) {
  return (
    <div className="profile flex flex-row items-center w-full">
      {!isLoggedIn && (
        <div className="w-full flex justify-center">
          <Link href={"/login"} className="w-full">
            <button className="login text-white rounded p-3 flex gap-3 justify-center text-center w-full">
              <LogIn /> {!isCollapsed && "Login"}
            </button>
          </Link>
        </div>
      )}
      {isLoggedIn && (
        <img src="/images/pfp.jpg" alt="Profile" className="profile-pic" />
      )}
      {isLoggedIn && !isCollapsed && (
        <div className="pl-3 align-middle">
          <p className="text-xl font-medium text-wrap">{name}</p>
          <p className="text-xs text-gray-600 mt-1">{role}</p>
        </div>
      )}
    </div>
  );
}

interface SidebarItemsProps {
  isLoggedIn: boolean;
  isCollapsed: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  cartItemCount: number;
}

// Display and handle sidebar entries
export function SidebarItems({
  isCollapsed,
  isLoggedIn,
  setIsLoggedIn,
  cartItemCount,
}: SidebarItemsProps) {
  const [isAdmin, setIsAdmin] = useState(
    localStorage.user && JSON.parse(localStorage.user).role.name === "Staff",
  );

  const handleLogOut = async () => {
    // TODO: implement firebase auth
    // try {
    //   await authService.logout();
    // } catch (err: any) {
    //   console.error("Login error:", err);
    // } finally {
    //   setIsLoggedIn(authService.isAuthenticated());
    //   window.location.href = "/login";
    // }
  };

  const [activeItem, setActiveItem] = useState<string>(
    window.location.pathname,
  );

  const sidebarItems = items.map(({ icon, description, href }) => {
    const active = activeItem === href ? "active" : "";
    const iconDescMargin = !isCollapsed ? "mr-4" : "";

    return (
      <li
        key={href + description}
        className={`${active}`}
        onClick={() => setActiveItem(window.location.pathname)}
      >
        <Link href={href}>
          <div className={`${iconDescMargin}`}>{icon}</div>
          {!isCollapsed && description}{" "}
          {description === "Cart" && cartItemCount !== 0
            ? `(${cartItemCount})`
            : ""}
        </Link>
      </li>
    );
  });

  const adminActive = activeItem === admin.href ? "active" : "";
  const logoutActive = activeItem === logout.href ? "active" : "";
  const iconDescMargin = !isCollapsed ? "mr-4" : "";

  return (
    <ul className="menu mb-4">
      {isAdmin && (
        <li
          className={`${adminActive}`}
          onClick={() => {
            setActiveItem(window.location.pathname);
            window.location.href = admin.href;
          }}
        >
          <div className={`${iconDescMargin}`}>{admin.icon}</div>
          <Link href={admin.href}>{!isCollapsed && admin.description}</Link>
        </li>
      )}
      {sidebarItems}
      {isLoggedIn && (
        <div className="logout">
          <li className={`${logoutActive}`} onClick={() => handleLogOut()}>
            <Link href={logout.href}>
              <div className={`${iconDescMargin}`}>{logout.icon}</div>
              {!isCollapsed && logout.description}
            </Link>
          </li>
        </div>
      )}
    </ul>
  );
}

const SidebarContainer = styled.div`
  width: 20%;
  min-width: 240px;
  max-width: 300px;
  max-height: min-content;
  background-color: #ffffff;
  margin-right: 0.75rem;
  margin-left: 0.75rem;
  height: 80vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 0.7rem;
  overflow: auto;
  transition: all 0.2s;
`;

// TODO: convert to styled components
// .profile {
// 	vertical-align: middle;
// 	font: medium;
// 	max-width: 75%;
// 	margin-top: 1.8rem;
// 	margin-left: 1.8rem;
// 	margin-right: 1.8rem;
// 	margin-bottom: 20px;
// 	align-items: center;
// }

// .profile-pic {
// 	vertical-align: middle;
// 	width: 70px;
// 	height: 70px;
// 	border-radius: 50%;
// }

// .login {
// 	background-color: #f79518;
// 	text-align: center;
// 	border-radius: 0.5rem;
// }

// .menu {
// 	font-weight: 500;
// 	list-style-type: none;
// }

// .menu li {
// 	vertical-align: middle;
// 	display: flex;
// 	flex-direction: row;
// 	align-items: center;
// 	padding-top: 0.7rem;
// 	padding-bottom: 0.7rem;
// 	padding-left: 1.8rem;
// 	padding-right: 1.8rem;
// 	position: relative;
// }

// .menu a {
// 	text-decoration: none;
// 	display: flex;
// 	align-items: center;
// }

// .menu li:hover a {
// 	color: #f79518;
// }

// .menu li:hover svg {
// 	color: #f79618;
// }

// .menu li.active {
// 	background-color: #f7951833;
// 	color: #e28815;
// }

// .menu li.active a {
// 	color: #e28815;
// }

// .menu li.active::after {
// 	content: "";
// 	position: absolute;
// 	right: 0;
// 	top: 50%;
// 	transform: translateY(-50%);
// 	width: 3px;
// 	height: 65%;
// 	background-color: #f79518;
// 	border-top-left-radius: 5px;
// 	border-bottom-left-radius: 5px;
// }

// .menu .logout li:hover a {
// 	color: #be0000 !important;
// }

// .menu .logout li:hover svg {
// 	color: #be0000 !important;
// }

// .menu .logout li.active {
// 	background-color: #f7181833 !important;
// 	color: #be0000 !important;
// }

// .menu .logout li.active a {
// 	color: #be0000 !important;
// }

// .menu .logout li.active::after {
// 	background-color: #be0000 !important;
// }

// body {
// 	font-family: "Poppins", sans-serif;
// 	font-size: large;
// }

// @media (max-width: 768px) {
// 	.profile-pic {
// 		width: 40px;
// 		height: 40px;
// 	}

// 	.sidebar {
// 		min-width: 70px;
// 		width: 70px;
// 		padding-left: 0;
// 	}

// 	.menu li {
// 		padding-left: 1.5rem;
// 	}

// 	.profile {
// 		padding-left: 0px;
// 		padding-right: 0px;
// 		margin-left: 0.95rem;
// 		margin-right: 0px;
// 		max-width: 60%;
// 	}
// 	.login {
// 		padding-left: 0;
// 		padding-right: 0;
// 	}
// }
