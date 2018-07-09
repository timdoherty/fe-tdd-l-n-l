import React from 'react';

import { Checkbox, Card } from '@procore/core-react';

export default ({ todo, completed = false, onCompleted = () => {} }) => (
  <Card style={{ padding: '10px' }}>
    <Checkbox
      checked={completed}
      onClick={() => onCompleted({ todo, completed: !completed })}
    >
      {todo}
    </Checkbox>
  </Card>
)
