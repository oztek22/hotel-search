# hotel-search

## PreRequisite

- You need to set up your own google Maps credentials in `components/map/index.js` to make it run locally.
- I've added logic to find the user's current location but commented it out and set it to center Munich since my sample data is based on Munich only.
- I've added a comment stating send center and zoom value to backend and get corresponding hotel details accordingly and called dummy JSON, but in real-world we will fetch data from the backend based on the coordinates.

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and enzyme
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
