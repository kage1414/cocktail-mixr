import { ListItem } from '@mui/material'
import React from 'react'

const Cocktail = ({ drink, thumb }): React.Node => {

  return (
    <ListItem style={{ display: 'flex', flexDirection: 'row', margin: 15 }}>
      <img src={thumb} width="100" style={{ marginRight: 30 }} />
      <h3>
        {drink}
      </h3>
    </ListItem>
  )

}

export default Cocktail