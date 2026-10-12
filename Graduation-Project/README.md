# Atlas

This project is a simple website for exploring the countries of the world, built with React and Vite. You can browse every country, search by name or capital, and open a details page for any country.

Currently, these libraries are used:

- [React Router](https://reactrouter.com/) handles the pages: Home, Countries, Country Details, About, and Contact
- [Axios](https://axios-http.com/) fetches the country data
- [Bootstrap](https://getbootstrap.com/) styles the layout, navbar, and cards

## Country data

Country data comes from [countries.dev](https://countries.dev), a free API that needs no API key. The Countries page loads the full list from `https://countries.dev/countries`, and the navbar search filters it by name or capital.

## Credits

- Geographic data from [GeoNames](https://www.geonames.org) (CC BY 4.0), through countries.dev
- Social icons from [Flaticon](https://www.flaticon.com)