import { useState, useEffect } from 'react'
import React from 'react'
import './fetch.css'


function Data () {

  const [id, setId] = useState(0)
  const [postId, setPostId] = useState(0)


   //for users
   const [userData, setUserData] = useState([])
  
   useEffect (() => {
   fetch(`http://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(userData => setUserData(userData))

    // console.log(userData);
    },[])


    //for posts
    const [postData, setPostData] = useState([])

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(res => res.json())
      .then(postData => setPostData(postData))
  
      console.log(postData);
    },[id])


    //for comments
    const [comment, setComment] = useState([])

    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then (res => res.json())
        .then (comment =>{
            setComment(comment)
        }) 
            
    },[postId])

    return(
        <>
           <div className='container'>
               <h1 className='heading'>User Api</h1>
               <div className='wrapper'>
                   <div className='userWrapper'>
                       <h2>Users</h2>
                       <p>Count of users: <span>{userData.length}</span></p>
                       <ul className='userList'>
                           {userData.length &&
                               userData.map (item => (
                                   <li onClick={() => setId(item.id)}
                                       key={item.id} className='userItem'>
                                       <h3 className='userId'>{item.id} .</h3>
                                       <h4 className='userName'><b>Name:</b> {item.name} </h4>
                                       <p className='userEmail'><b>Email:</b> {item.email}</p>
                                       <p className='userStreet'><b>Street:</b> {item.address.street}</p>
                                       <p className='userWebsite'> <b>Website:</b> {item.website}</p>
                                       <p className='userCompany'><b>Company:</b> {item.company.name}</p>
                                    </li>
                               ))
                           }
                       </ul>
                   </div> 

                   <div className='postWrapper'>
                       <h2>Posts</h2>
                       <p>Count of posts: <span>{postData.length}</span></p>
                       <ul className='postList'>
                           {postData.length &&
                               postData.map (item => {
                                   return (
                                        <li onClick={() => setPostId(item.id)}
                                            key={item.id} className='postItem'>
                                            <h3 className='postId'>{item.id}.</h3>
                                            <p className='postTitle'><b>Title</b> : {item.title}</p>
                                            <p className='postBody'><b>Body</b> : {item.body}</p>
                                        </li>
                                    )
                               })
                           }
                       </ul>
                   </div>

                   <div className='commentWrapper'>
                       <h2>Comments</h2>
                       <p>Count of comments: <span>{comment.length}</span></p>
                       <ul className='commentList'>
                           {comment.length && 
                              comment.map(item => {
                                  return (
                                      <li className='commentItem' key={item.id}>
                                          <h3>{item.id}</h3>
                                          <p className='commentName'>Name: {item.name}</p>
                                          <p className='commentEmail'>Email: {item.email}</p>
                                          <p className='commentBody'>Body: {item.body}</p>
                                        </li>
                                  )
                              })

                           }
                       </ul>
                   </div>

               </div>
           </div>
        </>
    )

}

export default Data