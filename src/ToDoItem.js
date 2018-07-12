import React from 'react';
import { Checkbox } from '@procore/core-react';

export default ({ todo, completed = false, onToggled = () => {} }) => (
  <div>
    <Checkbox
      checked={completed}
      onClick={() => onToggled(todo)}
    >
      {todo}
    </Checkbox>
  </div>
)
