# 40.4-react-events-and-state-eightball
https://curric.springboard.com/software-engineering-career-track/default/lectures/react-events-state/index.html, https://curric.rithmschool.com/springboard/exercises/react-state-eightball-colors/
# Install Node.js and npm for fedora linux
Certainly! Here are the step-by-step instructions to install Node.js and npm on Fedora, a Linux distribution:

### Using Package Manager (dnf):

1. **Open a Terminal:**
   - Open your terminal application. You can usually find it in the applications menu or use the keyboard shortcut `Ctrl` + `Alt` + `T`.

2. **Update Package List:**
   - Before installing new software, it's a good practice to update the package list:
     ```bash
     sudo dnf update
     ```

3. **Install Node.js and npm:**
   - Use the following command to install Node.js and npm:
     ```bash
     sudo dnf install nodejs
     ```

4. **Verify Installation:**
   - After the installation is complete, check if Node.js and npm were installed successfully by checking their versions:
     ```bash
     node -v
     npm -v
     ```

   - The above commands should print the installed versions of Node.js and npm, respectively.

### Using Node Version Manager (nvm):

Alternatively, you can use Node Version Manager (nvm) to manage Node.js installations. This allows you to easily switch between different versions of Node.js.

1. **Install nvm:**
   - Open a terminal and run the following command to install nvm:
     ```bash
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
     ```

   - Follow any instructions displayed in the terminal after the script finishes.

2. **Restart the Terminal:**
   - Close and reopen the terminal or run the following command to apply changes:
     ```bash
     source ~/.bashrc
     ```

   - If you are using Zsh, replace `~/.bashrc` with `~/.zshrc`.

3. **Install Node.js and npm using nvm:**
   - Now you can use nvm to install Node.js and npm. Install the latest LTS version with the following command:
     ```bash
     nvm install --lts
     ```

4. **Use the Installed Version:**
   - Set the installed version as the default:
     ```bash
     nvm use --lts
     ```

5. **Verify Installation:**
   - Check the versions to confirm the installation:
     ```bash
     node -v
     npm -v
     ```

   - The above commands should print the installed versions of Node.js and npm, respectively.

By following these steps, you should have successfully installed Node.js and npm on your Fedora Linux system.
# Create new React app
npx create-react-app magic-eight-ball
# Create .gitignore
Certainly! The `.gitignore` file is used to specify intentionally untracked files and directories that Git should ignore. Here are the steps to create a `.gitignore` file specifically for ignoring the `node_modules` directory in a Node.js project:

### Create a `.gitignore` File:

1. **Navigate to Your Project Directory:**
   - Open a terminal and change to the root directory of your Node.js project.

2. **Create the `.gitignore` File:**
   - Use a text editor to create a new file named `.gitignore`. You can use a command-line editor like `nano` or create it using your preferred code editor. For example, using `nano`:
     ```bash
     nano .gitignore
     ```

3. **Edit the `.gitignore` File:**
   - Add the following line to the file to instruct Git to ignore the `node_modules` directory:
     ```plaintext
     /node_modules
     ```

4. **Save and Exit:**
   - Save the changes in `nano` by pressing `Ctrl` + `X`, then press `Y` to confirm, and finally press `Enter`.

   - If you are using a different text editor, save the file and close the editor.

### Verify .gitignore:

5. **Check the Status:**
   - Run the following command to check the status of your Git repository and see the changes made to the `.gitignore` file:
     ```bash
     git status
     ```

   - You should see that the `.gitignore` file is modified.

6. **Add and Commit the Changes:**
   - Add the `.gitignore` file to the staging area and commit it to the repository:
     ```bash
     git add .gitignore
     git commit -m "Add .gitignore to ignore node_modules"
     ```

   - Replace the commit message with your own if desired.

Now, your project is configured to ignore the `node_modules` directory, which is a good practice in Git repositories to avoid versioning large dependency directories.
