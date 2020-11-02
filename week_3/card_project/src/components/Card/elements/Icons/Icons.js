import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEllipsisV,
  faHeart,
  faAngleDown,
  faShareAlt,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faEllipsisV, faHeart, faAngleDown, faAngleUp, faShareAlt);

const heart = <FontAwesomeIcon icon={faHeart} />;
const ellipseV = <FontAwesomeIcon icon={faEllipsisV} />;
const angleDown = <FontAwesomeIcon icon={faAngleDown} />;
const angleUp = <FontAwesomeIcon icon={faAngleUp} />;
const shareAlt = <FontAwesomeIcon icon={faShareAlt} />;

export { heart, ellipseV, angleDown, angleUp, shareAlt };
