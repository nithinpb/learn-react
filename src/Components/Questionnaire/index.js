import React from 'react';
import { Grid, Paper } from 'material-ui';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

export default ({ questions }) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper} />
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>Right</Paper>
    </Grid>
  </Grid>
);
