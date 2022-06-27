import Cocktail from './Cocktail.jsx'
import { Paper } from '@mui/material';
import React from 'react'
import { StyledList } from './components.jsx'

const CocktailList = ({ drinks }): React.Node => {

  return (
    <div>
      <StyledList style={{ height: '40vh', width: '80vw', overflow: 'auto' }}>
        {drinks.map(({ strDrink, strDrinkThumb }, idx) => (
          <Cocktail key={strDrink + idx} drink={strDrink} thumb={strDrinkThumb} />
        ))}
      </StyledList>
    </div>
  )

}

export default CocktailList