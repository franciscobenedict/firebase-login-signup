import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import {
  faUser as fasUser, faCheckSquare as fasCheckSquare, faChevronDown as fasChevronDown,
  faPlane as fasPlane, faHotel as fasHotel, faCalendarAlt as fasCalendarAlt,
  faHiking as fasHiking, faUtensils as fasUtensils, faTaxi as fasTaxi,
  faCheck as fasCheck, faTimes as fasTimes,
} from '@fortawesome/free-solid-svg-icons';

import { faCheckSquare as farCheckSquare } from '@fortawesome/free-regular-svg-icons';

/* Add all FontAwesome icons to be used here after `fab`*/
library.add(
  fab,
  fasUser,
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,

  fasCheckSquare, farCheckSquare, fasChevronDown, fasCheck, fasTimes,
  fasPlane, fasHotel, fasCalendarAlt, fasHiking, fasUtensils, fasTaxi
);

// If required, the FA cheatsheet for reference
// https://www.fontawesomecheatsheet.com/font-awesome-cheatsheet-5x/
