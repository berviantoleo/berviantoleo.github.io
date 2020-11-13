import Vue from "vue";
import Buefy from "buefy";
import "./mystyles.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
  faTumblr,
  faStackOverflow,
  faLastfm,
  faDribbble,
  faPinterest,
  faFoursquare,
  faSteam,
  faYoutube,
  faSoundcloud,
  faWeibo,
  faFlickr,
  faCodepen,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faHome,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faArrowLeft);
library.add(faArrowRight);
library.add(faEnvelope);
library.add(faHome);
library.add(faGithub);
library.add(faTwitter);
library.add(faFacebook);
library.add(faLinkedin);
library.add(faInstagram);
library.add(faTumblr);
library.add(faStackOverflow);
library.add(faLastfm);
library.add(faDribbble);
library.add(faPinterest);
library.add(faFoursquare);
library.add(faSteam);
library.add(faYoutube);
library.add(faSoundcloud);
library.add(faWeibo);
library.add(faFlickr);
library.add(faCodepen);
library.add(faTelegram);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Buefy, {
  defaultIconPack: "fas",
});

const app = new Vue({
  el: "#app",
});

export default app;
