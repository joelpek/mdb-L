## A light and performant movie database prototype built on the MERN stack
Uses React, Redux, [The Movie Database (TMDb)](https://www.themoviedb.org/ "The Movie Database")  and react-horizontal-scrolling-menu to provide a smooth user experience complete with a Netflix-inspired UX. 

Traditional scrolling of horizontal movie lists has been disabled in favor of mouse dragging and button navigation. Mobile layout also preserves buttons for testing and demonstration purposes.

Provides watchlist functionality via MongoDB, Mongoose, Node and Express.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and was inspired and facilitated by the awesome work of Scott Tolinski @ [Level Up Tutorials](https://leveluptutorials.com "LevelUpTutorials.com").
***
## Local test build instructions
1. `npm install` **OR** `yarn install`
2. If you don't have Google Chrome, download and install it.
3. Install [Allow-Control-Allow-Origin: *](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi "Google Chrome Web Store") for Chrome by opening this link in Chrome
4. `npm run dev` **OR** `yarn run dev`
5. (only applies if Google Chrome is not your default web browser) Manually open the address "localhost:3000" in Chrome.
6. Hover over movie posters in main view to reveal the "*Add to Watchlist*" button **OR** click movie poster link and *Add to Watchlist* from there. Watchlist dynamically populates and reactively re-renders via JSON data posted to and fetched from MongoDB (mLab.com).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## 
