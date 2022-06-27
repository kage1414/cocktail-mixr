import React, { useState } from 'react'

import { get } from 'axios'

const capitalize = (str) => {
  const words = str.split(' ');
  const capitalized = words.map((word) => {
    const first = word[0].toUpperCase();
    const rest = word.slice(1).toLowerCase();
    return first + rest;
  })
  return capitalized.join(' ')
}

const Search = ({ list, setList, setDrinks }): React.Node => {

  const [formField, setFormField] = useState('')

  const onChange = ({ target: { value } }) => {
    setFormField(value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const ingredient = capitalize(formField)
    if (ingredient && !list.includes(ingredient)) {
      const newList = [...list]
      newList.push(ingredient);
      setList(newList)
    }
    setFormField('')
  }

  const onSearch = (e) => {
    e.preventDefault();
    const queryElements = list.map((str) => {
      const ele = str.replaceAll(' ', '_')
      const first = ele[0].toUpperCase();
      const last = ele.slice(1).toLowerCase();
      return first + last
    }).join(',')
    get('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php', { params: { i: queryElements } }).then(({ data: { drinks } }) => {
      if (Array.isArray(drinks)) {
        setDrinks(drinks)
      }
    })
  }

  return (
    <div style={{ marginTop: 75, marginBotton: 30 }}>
      <div>Add ingredient</div>
      <form onSubmit={onSubmit}>
        <input value={formField} type="text" onChange={onChange} />
        <input type="submit" />
      </form>
      <button onClick={onSearch}>Search</button>
      <button onClick={() => {
        setDrinks([])
        setList([])
      }}>Reset</button>
    </div>
  )

}

export default Search