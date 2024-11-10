import React, { useState } from 'react'
import {Filebase} from 'react-file-base64';
import { useDispatch } from 'react-redux';
import {createPost} from '../actions/posts'

 const Form = () => {
  const [postdata,setPostdata]=useState({
    creator:'',title:'',message:'',tags:'',selectedFile:''
  });
  const dispatch =useDispatch();
  const handleSubmit=(e)=>{
       e.preventDefault();
      dispatch(createPost(postdata));
  }
  const clear=(e)=>{
    
  }
  return (
  <>
      <h1 classNameName="container">FORMS</h1>
      <div className="mb-3">
  <label htmlFor="creator" className="form-label ">Creator</label>
  <input type="text" className="form-control" id="creator" name="creator"  placeholder="Example input placeholder"/>
</div>
<div className="mb-3">
  <label htmlFor="title" className="form-label">title</label>
  <input type="text" className="form-control" id="title" name ="title" placeholder="Another input placeholder"/>
</div>

<div className="mb-3">
  <label htmlFor="tags"  className="form-label">tags</label>
  <input type="text" className="form-control" id="tags" name='tags' placeholder="Another input placeholder"/>
</div>
      {/* <Filebase type="file" multiple={false} onDone={({base64})=>setPostdata({...postdata,selectedFile:base64})}></Filebase> */}
      <div class="input-group">
  <span class="input-group-text">With textarea</span>
  <textarea class="form-control" id="message" name="message" aria-label="With textarea"></textarea>
</div>
<button type="button" class="btn btn-primary btn-sm" onClick={handleSubmit}>Small button</button>
<button type="button" class="btn btn-secondary btn-sm" onClick={clear}>Small button</button>
    </>
  )
}
export default Form;