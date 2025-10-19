Learning Management System (LMS) monorepo for [Be The Source](https://bethesourceco.org/), a Colorado based non-profit helping foster families.

# Getting Started

> [!IMPORTANT]
> First time? See the [Prerequisites](#prerequisites) section below first.

## 1. Install dependencies

```bash
bun install
```

## 2. Run the development server

```bash
bun dev
```

The frontend will run on [http://localhost:3000](http://localhost:3000).

# Prerequisites

## 1. Install `bun`

> [!NOTE]
> This repository uses `bun` as a package manager. All commands will use `bun` instead of `npm` or other equivalents.
>
> If you have used `npm` before, `bun` is pretty easy to understand. The two have a pretty straightforward equivalency of commands, explained [here](https://bun.com/guides/install/from-npm-install-to-bun-install#run-package-json-scripts-faster).
>
> Why `bun`? It's faster and causes less clutter in the terminal.

Install for MacOS / Linux:

```zsh
curl -fsSL https://bun.sh/install | bash
```

Install for Windows:

```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```

## 2. Clone the repository

In a terminal, go to a folder where you would like to store this repository (it can be whatever you like e.g. `/clubs` or `/changeplusplus`, just make sure you know where you put it so you can easily find it again). Then clone the repository with git:

```bash
# using SSH
git clone git@github.com:ChangePlusPlusVandy/bethesource.git

# OR using personal access token
git clone https://github.com/ChangePlusPlusVandy/bethesource.git

# DO NOT DOWNLOAD AS A ZIP FOLDER (reach out to rachel if you need help)
```

> [!NOTE]
> Unfamiliar with Git commands? Here are some resources you might find helpful:
>
> [Git Cheat Sheet](https://wizardzines.com/git-cheat-sheet.pdf) from WizardZines
>
> [Oh My Git!](https://ohmygit.org/) - open source game about learning Git
>
> Reach out to Rachel if you need help! :)

### 2.1 Cloning for the first time, permissions

If you haven't worked with Git before, you will most likely have to set up EITHER a SSH key OR a personal access token (PAT) in order to clone the repository into your machine.

You only need one, Rachel uses SSH because she couldn't get the PAT to work the first time she tried and she has stuck with it ever since.

GitHub's documentation for both (choose one):

- [SSH keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [PATs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

## 3. Navigate into the cloned folder

In your terminal, go back to the folder where you cloned this repository if you are not already there. Then, navigate into the `bethesource` directory:

```bash
cd bethesource
```

Stuck? Some helpful commands:

- `pwd` prints your current location in your machine
- `ls` lists the files/folders at your current location
- [installation required] `z` jumps you to your recent locations (e.g. `z bethesource` will bring you to wherever you cloned the folder)
  - [installation option 1](https://github.com/rupa/z): supports bash + zsh
  - [installation option 2](https://github.com/agkozak/zsh-z): zsh only but faster

## 4. Done! Now go to the [Getting Started](#getting-started) section above
