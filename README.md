# Restaurant Page

This project is a simple restaurant website created to practice frontend development with JavaScript modules, Webpack, and npm. It serves as a learning exercise and a showcase of modern web development techniques.

## Features

- **Modular JavaScript**: Uses ES6 modules for better code organization.
- **Webpack Bundling**: Bundles JavaScript, CSS, and assets for efficient loading.
- **npm for Package Management**: Manages dependencies and scripts.
- **Live Development Server**: Enables live reloading during development.
- **Asset Handling**: Processes CSS and images using Webpack loaders.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (includes npm)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Udbhav227/restaurant-page.git
   cd restaurant-page
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Development

To start the development server:
```bash
npm run dev
```
This will launch the project at `http://localhost:8080/` with live reloading.

### Building for Production

To generate optimized production files:
```bash
npm run build
```
This will create the necessary files in the `dist` directory.

## Project Structure
```
restaurant-page/
├── dist/                   # Compiled output
├── node_modules/           # npm dependencies
├── src/                    # Source files
│   ├── index.js            # Main JavaScript entry
│   ├── template.html       # HTML template
│   └── styles/             # CSS styles
├── .gitignore              # Git ignore file
├── package.json            # npm configuration
├── webpack.config.js       # Webpack configuration
└── README.md               # Project documentation
```

## License

This project is open-source and available under the [MIT License](LICENSE).

