import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEllipsisV,
  faHeart,
  faAngleDown,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faEllipsisV, faHeart, faAngleDown, faShareAlt);

const Card = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faEllipsisV} />
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faAngleDown} />
      <FontAwesomeIcon icon={faShareAlt} />
    </div>
  );
};

export { Card };
