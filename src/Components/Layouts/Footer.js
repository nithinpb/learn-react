import React from 'react';
import { Paper, Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';

export default ({ categories }) => {
  return (
    <Paper>
      <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
        {categories.map(cat => <Tab label={cat} />)}
      </Tabs>
    </Paper>
  );
};
