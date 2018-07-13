import React from 'react';
import { Checkbox, Card } from '@procore/core-react';

export default ({ todo, completed = false, onToggled = () => {} }) => (
  <Card style={{ margin: '5px 0', padding: '10px' }}>
    <Checkbox
      checked={completed}
      onClick={() => onToggled(todo)}
    >
      {todo}
    </Checkbox>
  </Card>
)
