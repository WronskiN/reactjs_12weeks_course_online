import React from 'react';
import { Button } from '../Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function ListItem(props) {
  const { name, ammount, category } = props;
  return (
    <li className="listItem">
      <span className="name">{name}</span>
      <span className="ammount">{`${ammount} zl`}</span>
      <span className="category">{`Cat: ${category}`}</span>
      <Button className="buttonDelete">
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    </li>
  );
}

export default ListItem;
