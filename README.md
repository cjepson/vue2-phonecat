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
