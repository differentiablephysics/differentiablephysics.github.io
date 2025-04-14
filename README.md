# Differentiable Physics Book Website

This repository contains the source code for the Differentiable Physics book website hosted at [differentiablephysics.github.io](https://differentiablephysics.github.io/).

## Adding New Chapters

The website content is managed through LaTeX files that are automatically converted to MDX format. You have two options for adding chapters:

### Option 1: Automated GitHub Actions Workflow (Recommended)

The repository is configured with a GitHub Actions workflow that automatically processes all LaTeX chapters and deploys the website:

1. **Save LaTeX Files**
   - Add your `.tex` files to the `chapters/` directory (e.g., `chapters/my-chapter.tex`)
   - File naming convention: use lowercase with underscores (e.g., `kernel_methods.tex`)
   - The chapter title will be automatically generated from the filename (e.g., "Kernel Methods")

2. **Push to Main Branch**
   - Commit and push your changes to the main branch
   - The GitHub Actions workflow will automatically:
     - Process all chapters in the `chapters/` directory
     - Convert LaTeX to MDX
     - Update navigation routes
     - Build and deploy the website

3. **Check Deployment**
   - Once the workflow completes, your changes will be live on the website
   - Check the "Actions" tab in your GitHub repository to see workflow status

### Option 2: Manual Processing

If you need to process chapters locally before pushing:

1. **Set Up Environment**
   - Install Node.js and npm
   - Install Python 3.x with required packages: `pip install -r requirements.txt`
   - Install project dependencies: `npm install`

2. **Process All Chapters at Once**
   ```bash
   npx ts-node scripts/process-chapter.ts
   ```
   This will process all `.tex` files in the `chapters/` directory.

3. **Process a Specific Chapter**
   ```bash
   npx ts-node scripts/process-chapter.ts chapters/my-chapter.tex "Chapter Title"
   ```

## Directory Structure

```
.
├── chapters/           # Source LaTeX files
├── contents/
│   └── docs/           # Generated MDX files (chapters content)
│       └── chapters/   # Chapter-specific directories
├── scripts/
│   ├── convert_tex_to_md.py   # LaTeX to MDX converter
│   └── process-chapter.ts     # Chapter processing script
├── lib/
│   └── routes-config.ts       # Navigation configuration
└── .github/
    └── workflows/
        └── deploy.yml        # GitHub Actions workflow configuration
```

## GitHub Actions Workflow

The automated workflow consists of three main jobs:

1. **Pre-build Job**
   - Checks out the repository
   - Sets up Node.js and Python
   - Installs dependencies
   - Processes all chapters in the `chapters/` directory
   - Commits and pushes changes to routes and generated MDX files

2. **Build Job**
   - Checks out the repository with the latest changes
   - Builds the Next.js website

3. **Deploy Job**
   - Deploys the built website to GitHub Pages

## Development

To run the website locally:

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`

## Troubleshooting

If you encounter issues:

1. **GitHub Actions Workflow Failures**
   - Check the workflow logs in the GitHub Actions tab
   - Common issues include permission errors or incompatible LaTeX syntax

2. **Conversion Errors**
   - Check the LaTeX syntax in your source file
   - Ensure all required packages are installed
   - Look for unsupported LaTeX commands

3. **Navigation Issues**
   - Check `lib/routes-config.ts` for correct route configuration
   - Make sure chapter filenames follow the correct format

4. **Build Errors**
   - Run `npm run build` locally to see detailed error messages
   - Check TypeScript errors in the console
   - Verify MDX syntax in the generated files

5. **Deployment Not Updating**
   - Ensure the workflow completed successfully
   - Check the GitHub repository settings to confirm Pages is properly configured
   - Clear browser cache or try a private/incognito window