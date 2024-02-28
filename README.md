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
