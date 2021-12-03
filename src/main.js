import { createApp } from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/fontawesome-free/css/all.min.css";
import "./assets/css/tailwind.css";

const app = createApp(App);

/**
 * So that we don't have to import base components every time.
 * Based on: https://v3.vuejs.org/cookbook/automatic-global-registration-of-base-components.html#base-example
 */
const requireComponent = require.context(
  // The relative path of the components folder
  "./components/base",
  // Whether or not to look in subfolders
  false,
);
console.log("dvdb - requireComponent", requireComponent)

requireComponent.keys().forEach((fileName) => {
  // Get component config
  const componentConfig = requireComponent(fileName);

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );
  console.log("dvdb - requireComponent.keys - componentName", componentName)

  app.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  );
});


app.use(store).use(router).mount("#app");
