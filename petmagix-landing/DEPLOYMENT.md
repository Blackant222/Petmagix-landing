# Deployment Instructions for Petmagix Landing Page

This project is built using Vite and React, generating a static site in the `dist` folder. Here's how to deploy it to GitHub Pages or Netlify.

## Prerequisites

1.  **Build Your Site**:
    Ensure you have the latest changes built. Run the following command in the project root:
    ```bash
    npm run build
    ```
    This will generate or update the `dist` directory containing your static assets.

2.  **Git Repository**:
    Your project should be a Git repository, and you should have pushed your latest changes to GitHub.

## Option 1: Deploying to GitHub Pages

GitHub Pages is a great way to host static sites directly from your GitHub repository.

### Steps:

1.  **Install `gh-pages`**:
    This is a helper package to make deploying to GitHub Pages easier.
    ```bash
    npm install --save-dev gh-pages
    ```

2.  **Update `vite.config.js`**:
    You need to set the `base` option in your `vite.config.js` to your repository name if you're deploying to a repository-specific GitHub Pages URL (e.g., `https://<USERNAME>.github.io/<REPO_NAME>/`).

    Modify `vite.config.js`:
    ```javascript
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      base: '/<YOUR_REPO_NAME>/', // Replace <YOUR_REPO_NAME> with your actual repository name
    });
    ```
    *If you are deploying to a custom domain or `<USERNAME>.github.io`, you can often omit the `base` property or set it to `'/'`.*

3.  **Add Deploy Script to `package.json`**:
    Add a `deploy` script to your `package.json` file:
    ```json
    "scripts": {
      // ... other scripts (dev, build, lint)
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```
    The `predeploy` script ensures your site is built before deploying.

4.  **Deploy**:
    Run the deploy script:
    ```bash
    npm run deploy
    ```
    This will build your project and push the contents of the `dist` folder to a new `gh-pages` branch on your repository.

5.  **Configure GitHub Repository**:
    *   Go to your repository settings on GitHub.
    *   Navigate to the "Pages" section.
    *   Under "Source," select the `gh-pages` branch and the `/(root)` folder.
    *   Save the changes. Your site should be live at `https://<USERNAME>.github.io/<REPO_NAME>/` within a few minutes.

## Option 2: Deploying to Netlify

Netlify offers a simple drag-and-drop interface or Git-based deploys.

### Steps (Git-based):

1.  **Sign up/Log in to Netlify**:
    Go to [Netlify](https://www.netlify.com/) and create an account or log in.

2.  **Add a New Site**:
    *   From your Netlify dashboard, click "Add new site" -> "Import an existing project."
    *   Connect to your Git provider (e.g., GitHub).
    *   Select your repository.

3.  **Configure Build Settings**:
    Netlify usually auto-detects Vite settings, but ensure they are correct:
    *   **Build command**: `npm run build` or `vite build`
    *   **Publish directory**: `dist`
    *   If you set a `base` path in `vite.config.js` for GitHub Pages, you might need to remove it or set it to `'/'` for Netlify if you're using a custom domain or Netlify subdomain directly. If Netlify hosts your site in a subdirectory, you'd configure the `base` path accordingly. For most Netlify deploys, `base: '/'` is appropriate.

4.  **Deploy Site**:
    Click "Deploy site." Netlify will build and deploy your project.

5.  **Custom Domain (Optional)**:
    You can configure a custom domain in the site settings on Netlify.

---

**Important Note on JavaScript Rendering Issue**:
During development, automated checks indicated that while the project builds successfully, the React components might not be rendering their content into the final HTML due to a JavaScript runtime issue in the testing environment. **It is crucial to manually test the deployed site in a web browser to ensure it functions as expected.** If issues persist, further debugging using browser developer tools will be necessary.
