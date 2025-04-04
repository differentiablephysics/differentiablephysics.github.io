# Differentiable Physics Book Website

This repository contains the source code for the Differentiable Physics book website hosted at [differentiablephysics.github.io](https://differentiablephysics.github.io/).

## Adding New Chapters

The website content is managed through LaTeX files that are automatically converted to MDX format. Here's how to add a new chapter:

### Prerequisites

- Python 3.x with the following packages:
  ```bash
  pip install pypandoc
  ```
- Node.js and npm

### Directory Structure

```
.
├── chapters/           # Source LaTeX files
├── contents/
│   └── docs/          # Generated MDX files (chapters content)
│       └── introduction/  # Example chapter
├── scripts/
│   ├── convert_tex_to_md.py   # LaTeX to MDX converter
│   └── process-chapter.ts     # Chapter processing script
└── lib/
    └── routes-config.ts       # Navigation configuration
```

### Adding a New Chapter

1. **Save LaTeX Files**
   - Save it in the `chapters/` directory (e.g., `chapters/my-chapter.tex`)

2. **Process the Chapter**
   Run the following command to convert the LaTeX file to MDX and update the website navigation:
   ```bash
   npx ts-node scripts/process-chapter.ts chapters/my-chapter.tex "Chapter Title"
   ```
   This will:
   - Convert the LaTeX file to MDX format
   - Create a directory in `contents/docs/` with the chapter name
   - Place the converted `index.mdx` file in that directory
   - Update the navigation routes
   - Attempt to rebuild the website

3. **Verify the Results**
   - Check the generated MDX file in `contents/docs/my-chapter/index.mdx`
   - Ensure the chapter appears in the navigation
   - Test the website locally:
   ```bash
   npm run dev
   ```

### Troubleshooting

If you encounter issues:

1. **Conversion Errors**
   - Check the LaTeX syntax in your source file
   - Ensure all required packages are installed
   - Look for unsupported LaTeX commands

2. **Navigation Issues**
   - Check `lib/routes-config.ts` for correct route configuration
   - Ensure chapter titles and paths match

3. **Build Errors**
   - Run `npm run build` to see detailed error messages
   - Check TypeScript errors in the console
   - Verify MDX syntax in the generated files

## Development

To run the website locally:

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`
## Deployment

The website is automatically deployed via GitHub Pages when changes are pushed to the main branch.
