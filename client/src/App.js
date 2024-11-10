import React from 'react'
import Form from './component/Form/Form.jsx';
import Posts from './component/Posts/Post/Posts';
import image from './component/images/logo.jpg';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import {getPosts} from './actions/posts'
// import logo from './component/'
// import {Container , Typography,AppBar,Grow,Grid} from '@material-ui/core';
const App = () => {
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch])
  return (
    <div>
     
      {/* <h1>HI hello</h1> */}
      {/* <Container maxwidth="lg">
        <AppBar position ="stattic" color="inherit">
          <Typography variant="h2" align="center">Memories</Typography>
          {/* <img src={logo} alt="memories" height="60"/> */}
        {/* </AppBar>
      </Container> />/*} */}
      <img src={image} className='rounded mx-auto d-block img-fluid'/>
      <Posts/>
      <Form/>
    </div>
  )
}
export default App;