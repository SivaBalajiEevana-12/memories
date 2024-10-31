import React from 'react'
// import logo from './component/'
import {Container , Typography,AppBar,Grow,Grid} from '@material-ui/core';
const App = () => {
  return (
    <div>
      {/* <h1>HI hello</h1> */}
      <Container maxwidth="lg">
        <AppBar position ="stattic" color="inherit">
          <Typography variant="h2" align="center">Memories</Typography>
          <img src={logo} alt="memories" height="60"/>
        </AppBar>
      </Container>
    </div>
  )
}
export default App;