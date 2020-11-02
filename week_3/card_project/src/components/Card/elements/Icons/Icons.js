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

export const heart = <FontAwesomeIcon icon={faHeart} />;
export const ellipseV = <FontAwesomeIcon icon={faEllipsisV} />;
export const angleDown = <FontAwesomeIcon icon={faAngleDown} />;
export const angleUp = <FontAwesomeIcon icon={faAngleUp} />;
export const shareAlt = <FontAwesomeIcon icon={faShareAlt} />;
