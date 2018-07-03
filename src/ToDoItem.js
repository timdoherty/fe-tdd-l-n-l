import React from 'react';

import { Checkbox } from '@procore/core-react';

export default ({ itemText, completed = false, onCompleted = () => {} }) => (
  <div>
    <Checkbox
      checked={completed}
      onClick={() => onCompleted({ [itemText]: !completed })}
    />
    {itemText}
  </div>
)
