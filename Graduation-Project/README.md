# Atlas

This project is a simple website for exploring the countries of the world, built with React and Vite. You can browse every country, search by name or capital, and open a details page for any country.

## Features
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Huge API**: Browse through a pile of different countries with image previews
- **Country Details**: View detailed information about each country
- **Modern UI**: Clean and intuitive user interface built with Bootstrap
- **Fast Loading**: Optimized performance with Vite build tool

## Technologies Used

### Frontend
- **React 19**: Latest version of the popular JavaScript library for building user interfaces
- **React Router 7**: For handling navigation and routing within the application
- **Bootstrap 5**: For responsive design and pre-styled components
- **Axios**: For making HTTP requests to the API

### Development Tools
- **Vite**: Next generation frontend tooling for faster development and optimized builds
- **ESLint**: For code linting and maintaining code quality
- **npm**: Package manager for JavaScript

## Country data

Country data comes from [countries.dev](https://countries.dev), a free API that needs no API key. The Countries page loads the full list from `https://countries.dev/countries`, and the navbar search filters it by name or capital.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/username/repo-name.git
cd react-store
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure
├── public/              # Public assets
├── src/                 # Source files
│   ├── assets/          # Static assets
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── services/        # API services
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── .gitignore           # Git ignore file
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── README.md            # Project documentation
└── vite.config.js       # Vite configuration

## Credits

- Geographic data from [GeoNames](https://www.geonames.org) (CC BY 4.0), through countries.dev
- Social icons from [Flaticon](https://www.flaticon.com)