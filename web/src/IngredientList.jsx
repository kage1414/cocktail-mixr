import { Grid, Paper } from '@mui/material';
import React, { useState } from 'react';

import { Clear } from '@mui/icons-material'

const IngredientList = ({ list, setList }): React.Node => {

  const removeItem = (idx) => {
    const newList = [...list]
    newList.splice(idx, 1);
    setList(newList)
  }

  return (
    <Paper style={{ width: 380, height: 150 }}>
      <Grid container spacing={2} direction="row" columns={4} style={{ margin: 5 }}>
        {list.map((item, idx) => (
          <Grid key={item + idx} item s={4}>
            <div >
              <Clear fontSize="small" onClick={() => {
                removeItem(idx)
              }} />
              {item}
            </div>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )

}

export default IngredientList;