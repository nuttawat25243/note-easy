import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons';
import { faHashtag, faTag } from '@fortawesome/free-solid-svg-icons';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import router from './routes/router'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)
library.add(faNoteSticky);
library.add(faTag);
library.add(faBoxArchive);
library.add(faTrash);
library.add(faGear);
library.add(faMagnifyingGlass);
library.add(faHashtag);
library.add(faUser);
library.add(faLock);
library.add(faEnvelope);
library.add(faChevronUp);
library.add(faArrowRightFromBracket)
library.add(faPenToSquare)
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router).mount('#app');
