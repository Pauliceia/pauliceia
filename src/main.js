import "core-js/stable";
import "regenerator-runtime/runtime";

import Vue from "vue";

import ElementUI from "element-ui";
import VueMaterial from "vue-material";
import Sortable from "sortablejs";

import "element-ui/lib/theme-chalk/index.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import "ol/ol.css";

import * as ol from "ol";
import * as olLayer from "ol/layer";
import * as olSource from "ol/source";
import * as olStyle from "ol/style";
import * as olInteraction from "ol/interaction";
import * as olFormat from "ol/format";
import * as olProj from "ol/proj";
import * as olGeom from "ol/geom";
import * as olControl from "ol/control";
import * as olEvents from "ol/events";
import * as olExtent from "ol/extent";

window.ol = ol;
window.ol.layer = olLayer;
window.ol.source = olSource;
window.ol.style = olStyle;
window.ol.interaction = olInteraction;
window.ol.format = olFormat;
window.ol.proj = olProj;
window.ol.geom = olGeom;
window.ol.control = olControl;
window.ol.events = olEvents;
window.ol.extent = olExtent;

import { sync } from "vuex-router-sync";
import router from "@/router";
import store from "@/store";
// eslint-disable-next-line no-unused-vars
import i18n from "@/views/language";

import App from "@/App";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueMaterial);
sync(store, router);

Vue.directive("sortable", {
  inserted: function (el, binding) {
    new Sortable(el, binding.value || {});
  },
});

new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App },
});
