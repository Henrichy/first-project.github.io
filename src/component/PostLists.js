import React, { Component } from 'react'
import axios from 'axios'
 class PostLists extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          posts:[]
       }
     }
     componentDidMount(){
         axios.get('https://jsonplaceholder.typicode.com/posts1')
         .then(response =>{
             console.log(response)
             this.setState({posts: response.data})
         })
         .catch(error =>{
             console.log(error)
             this.setState({errorMsg: 'Error Retrieving Data'})
         })
     }
     
  render() {
      const { posts, errorMsg } = this.state
    return (
      <div>
        Lists of Post
        {
            posts.length ?
            posts.map(posts => <div key ={posts.id}>{posts.title}</div>):
            null
        }
            {errorMsg ? <div>{errorMsg}</div>:
            null}
        
      </div>
    )
  }
}

export default PostLists
