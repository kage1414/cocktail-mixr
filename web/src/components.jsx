import { AppBar, List } from '@mui/material'

import { createTheme } from '@mui/material/styles';
import styled from 'styled-components'

export const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#5c00c5',
      darker: '#450073',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #aaaaaa;
  width: 100vw;
  height: 100vh;
`

export const Header = styled(AppBar)`
  align-items: center;
  font-size: 28px;
  padding: 10px;
`

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 10%;
`

export const StyledList = styled(List)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: transparent;
`