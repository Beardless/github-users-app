# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Decisions

 - I choose to use `redux-toolkit` to reduce redux boilerplate in application.
 - Github Api is using `since` parameter for pagination, so it required additional effort to create simple pagination with prev and next page.
 - I decided to use `Chakra-UI` as component library as i never used it before, so it was some challenge for me, it looks great, and I will definitely use it in the future. Implementing dark mode in App with chakra takes like 10 minutes.
 - I decided to use `react-router-dom` as it's really simplify logic for routing in app.
 - Unfortunately i didnt have time to write tests, but I think I would test mostly redux store, its reducer, async functions, and business logic in it.
