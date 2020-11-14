# ShopBridge

This project is deployed on github and github pages. The links are:-
Github pages link: https://tanmay0057.github.io/tanmay0057.github.io/
Github repository link: https://github.com/tanmay0057/tanmay0057.github.io
This application is centered with simple style design.

## Details

This application is build in Angular. For frontend design Bootstrap CSS is used.
For backend REST API is used. The application send's request to the API server, takes the data entered by the user and converts it into JSON object(This conversion to JSON object is handled by Angular) which is then stored in the server. For response, when fetching the data the JSON object is converted into an array(The JSON object conversion to an array is done in posts.service.ts file by the function fetchPosts() which uses Http Get method) which can then be used application-wide.  
In the whole application, for navigation control, Routers are used which is a feature by Angular.

## About Images

This app doesn't handle image uploads. This project displays images only if server has the link of them otherwise default image is displayed. 

## Editor and Backend used

IDE - Visual studio Code
Backend - Firebase setup
          The link to firebase Rest API call - https://shop-bridge-a260a.firebaseio.com/posts.json

## Commands used

1) In local development mode - 
   For generating components Angular CLI is used - `ng g c [component-name]`
   For loading app in `localhost:4200` - `ng serve`
2) For deployment to github in production mode -
   `git init`
   `git add .`
   `git commit -m "test"`
   `git remote add origin https://github.com/tanmay0057/tanmay0057.github.io.git`
   `git push -u origin main`
   `npm i -g angular-cli-ghpages --save`
   `ng build --prod --base-href "https://tanmay0057.github.io/tanmay0057.github.io/"`
   `ngh --dir=dist/ShopBridge`
  