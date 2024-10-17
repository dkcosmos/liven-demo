# liven-demo
# https://dkcosmos.github.io/liven-demo/

This is a responsive React application built using the React-Bootstrap component library. 
The app supports various screen sizes, including mobile, desktop, and tablet views, achieved through the use of grid and flex layouts. 
The project also implements an optimized card click function to avoid unnecessary re-creation of callback functions.

## Features

- **Responsive Design:** The app is fully responsive and adjusts seamlessly to different screen sizes (mobile, tablet, desktop).
- **Lightweight Component Library:** Uses React-Bootstrap, a lightweight library that integrates Bootstrap components into React, for building user interfaces.
- **Optimized Event Handling:** The card click event handler is defined in `App.js` to avoid creating a new function for every card component during rendering.

## Project Structure


- `src/components`: Contains the React components used in the app, such as the Card, Header, and Footer.
- `App.js`: The main application component that includes the click event handler and state management.
- `App.css`: Contains custom styles for the app.
- `index.js`: The entry point of the application.


