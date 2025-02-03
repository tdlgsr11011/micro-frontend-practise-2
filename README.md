# About the app

1. This application is currently made of 2 microfrontends `container` (parent app) and `food-app` (child app)
2. Food-App is a work in progress, so you are welcome to keep an eye on my devevlopment process :)
3. I have implemented `run time integration` in this application.
   
# How to run this App on your pc?

1. Fork the repository on your local
2. Open terminals in `/packages/container` and `/packages/food`, run `npm install` in both.
3. create `.env` file in `/packages/food`
4. Generate `api_key` on `https://forkify-api.herokuapp.com/v2`
5. Add a variable `FORKIFY_API_KEY=api_key` in the `.env` file 
6. Add another variable `FORKIFY_BASE_URL="https://forkify-api.herokuapp.com"` to `.env` file
7. run `npm run start` in `/packages/food` and `/packages/container`
8. open `http://localhost:8080/` in your browser
