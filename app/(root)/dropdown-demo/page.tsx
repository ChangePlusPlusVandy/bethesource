"use client";

// app/(root)/dropdown-demo/page.tsx
import { useMemo, useState } from "react";
import Dropdown from "../../components/Dropdown";

const OPTIONS = ["First action", "Second action", "Sign out"] as const;

export default function DropdownDemoPage() {
  // Showcase the new `selected` capability of the Dropdown
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // Build menu items with selection + click handlers
  const menuItems = useMemo(
    () =>
      OPTIONS.map((label, index) => ({
        label,
        selected: index === selectedIndex,
        onClick: () => setSelectedIndex(index),
      })),
    [selectedIndex],
  );

  return (
    <main className="p-8">
      <h1 className="mb-4 text-xl font-bold">Dropdown demo</h1>
      <div className="mb-4 text-sm text-gray-700">
        Selected: <strong>{OPTIONS[selectedIndex]}</strong>
      </div>
      <Dropdown
        buttonLabel={OPTIONS[selectedIndex] ?? "Choose option"}
        menuItems={menuItems}
      />
    </main>
  );
}
