import React from 'react';

import { Checkbox } from '@procore/core-react';

export default ({ todo, completed = false, onCompleted = () => {} }) => (
  <div>
    <Checkbox
      checked={completed}
      onClick={() => onCompleted({ todo, completed: !completed })}
    />
    {todo}
  </div>
)
