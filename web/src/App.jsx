import { Body, Container, Header, theme } from './components.jsx'
import React, { useState } from 'react';

import CocktailList from './CocktailList.jsx'
import IngredientList from './IngredientList.jsx'
import Search from './Search.jsx'
import { ThemeProvider } from '@mui/material/styles';

const App = (): React.Node => {
  const [list, setList] = useState([])
  const [drinks, setDrinks] = useState([])
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header color="primary">
          Cocktail Mixr
        </Header>
        <Container>
          <Search list={list} setList={setList} setDrinks={setDrinks} />
          <IngredientList list={list} setList={setList} />
          <CocktailList drinks={drinks} />
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App;