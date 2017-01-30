# Vue 2.0 Phonecat

The angular phonecat tutorial ported to Vue 2.0. It uses vuex for internal storage management, vue-resource to 
fetch HTTP resources and cache data, vue-router for routing, and chunks of bootstrap CSS to look pretty. This 
was just to learn Vue 2.0 and probably does not reflect best practices.

Successfully built with node.js 7.4.0 and npm 4.0.5.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For a detailed explanation of the build process, read the [docs for vue-loader](http://vuejs.github.io/vue-loader).

You may need a .babelrc and .eslintrc.js file in the root directory. Try:

.babelrc
``` bash
{
  "presets": ["es2015"]
}
```

.eslintrc.js
```
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'standard',
}
```

## Application Directory Layout

```
content/                  --> resources files
  img/...                 --> images
  phones/...              --> JSON objects representing phone details
src/
  components/
    PhoneDetails.vue      --> phone details component
    PhoneList.vue         --> phone list component
  fonts/                  --> fonts (make bootstrap CSS happy)
    ...
  pages/
    PhoneDetails.vue      --> component page containing phone details
    Phones.vue            --> component page containing list of phones
  store/
    store.js              --> vuex state manager
  style/
    bootstrap.css         --> bootstrap CSS file
    phonedetails.css      --> CSS for phone details page
    phones.css            --> CSS for phones page
  main.js                 --> vue application and router
favicon.ico               --> empty icon for webserver
index.html                --> HTML file that sets title and loads vue application
package.json              --> node.js build/run instructions and package management
webpack.config.js         --> webpack configuration file

```