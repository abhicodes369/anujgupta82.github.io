# Personal Portfolio Website

This is a React-based personal portfolio website built with Vite. The project uses GitHub Pages for deployment.

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/anujgupta82/anujgupta82.github.io.git
cd anujgupta82.github.io
```

2. Install dependencies:
```bash
npm install
npm install gh-pages --save-dev
```

## Development Workflow

### Local Development
- Run the development server:
```bash
npm run dev
```
This will start the local development server at `http://localhost:5173`

### Testing Production Build Locally
To test how the site will look when deployed:
```bash
npm run build
npm run preview
```
This will create a production build and serve it locally at `http://localhost:4173`

### Deployment
The project uses GitHub Pages for deployment. To deploy changes:

1. Make your changes in the `src` directory
2. Commit your changes:
```bash
git add .
git commit -m "your commit message"
git push origin main
```
3. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will:
- Build your project
- Deploy the built files to the `gh-pages` branch
- GitHub Pages will automatically serve the content

## Project Structure

- All main components and assets are in the `src` directory
- The deployment is handled by `gh-pages` package
- GitHub Actions workflow (`.github/workflows/jekyll-gh-pages.yml`) manages the deployment process

Note: The default Vite template files (like `my-app` or other template names) are not relevant to this project and can be ignored.

## Technologies Used

- React
- Vite
- Tailwind CSS
- GitHub Pages
- gh-pages (for deployment)
