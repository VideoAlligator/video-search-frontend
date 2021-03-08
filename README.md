# Video Search Tool (frontend)

A React App with Typescript

The goal of this project is to develop an accessible web page with a video frame searching engine powered by object detection and scene detection machine learning models.

# Prerequisite

Make sure `npm` (package manager) is installed.

If you are using VS Code, please install `Prettier` and `ESLint` extenstions. It's necessary for automated lint and code style.

Change the local env variable in `.env` file to local/cloud database. Copy `.env.example` to your own `.env`. To test with local API, `REACT_APP_API_BASE` is `http://localhost:8080`. To use the production environment API, just change it to `https://video-segment-search-api.herokuapp.com/`.

# Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. `npm install`: Install all packages

2. `npm start`: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

## Other Available Scripts

`npm test`: Launches the test runner in the interactive watch mode.

`npm run build`: Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

## Deployment

Use the `main` branch to deploy: `git push heroku main`, deploy to [Heroku](https://dashboard.heroku.com/apps).

## Learn More

1. [React documentation](https://reactjs.org/)

2. [Typescript documentation](https://www.typescriptlang.org/docs)

3. [Material-UI](https://material-ui.com/)

4. [styled-components](https://styled-components.com/docs)

5. [Redux](https://redux.js.org/api/api-reference), [React Redux](https://react-redux.js.org/api/connect)

6. [React Router](https://reactrouter.com/web/guides/quick-start)

7. [ESLint and Prettier](https://medium.com/javascript-scene/streamline-code-reviews-with-eslint-prettier-6fb817a6b51d)
