import * as api from '../api';
// import { fetchPosts ,createPost } from '../api';
export const getPosts=()=> async (dispatch)=>{
    // const action={type:'FETCH_ALL',payload:[]}
    // return action;
try {
    const {data}=await api.fetchPosts();
    dispatch({type:'FETCH_ALL',payload:data})
} catch (error) {
    console.log(error)
}
}
export const createPost = (post)=> async (dispatch)=>{
    // const action={type:'FETCH_ALL',payload:[]}
    // return action;
try {
    const {data}=await api.createPost(post);
    dispatch({type:'CREATE',payload:data})
} catch (error) {
    console.log(error)
}
}