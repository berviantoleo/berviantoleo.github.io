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
  faBriefcase,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const allowedFa = [
  faBook,
  faBriefcase,
  faArrowLeft,
  faArrowRight,
  faEnvelope,
  faHome,
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
];

for (const fa of allowedFa) {
  library.add(fa);
}

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Buefy, {
  defaultIconPack: "fas",
});

const app = new Vue({
  el: "#app",
});

export default app;
