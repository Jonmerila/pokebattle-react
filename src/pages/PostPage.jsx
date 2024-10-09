import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styling from "./PostPage.module.css";

const PostPage = ({data}) => {

    let [post, setPost] = useState([]);
    let [user, setUser] = useState(null);
    let [comments, setComments] = useState([]);
    let params = useParams();
    let location = useLocation();
    console.log("Location", location);
    console.log("Params", params);
    console.log("POSTDATA", data);
    let filteredPost = data.find((post) => +post.id === +params.id)
    console.log("FILTERED", filteredPost);
    
    
    useEffect(()=> {
        
        setPost(filteredPost);

        
        
        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${filteredPost.userId}`);
            const userData = await response.json();

            const commentRes = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${filteredPost.id}`);
            const allComments = await commentRes.json();
            // console.log("FETCHING");
            console.log("DATA", userData);
            console.log("COMMENTS", allComments);
            setUser(userData);
            setComments(allComments);
        }
        if(!location.state){
            console.log("No location");
            
        }
        

        fetchData();
    }, [params.id, location.state, filteredPost])
    return (
        <div className={styling.container}>
          <h2>
            User:{" "}
            <Link
              to={`/profile/${location.state?.id || post?.userId}`}
              state={user}
              className={styling.link}
            >
              {user?.username}
            </Link>
          </h2>
          <h3 className={styling.title}>Title: {post && post.title}</h3>
          <p className={styling.paragraph}>Paragraph: {post && post.body}</p>
      
          <div className={styling.comments}>
            <h2>Comments</h2>
            {comments.map((comment, i) => {
              return (
                <li key={i} className={styling["comment-item"]}>
                  <h3 className={styling["comment-name"]}>
                    Made by: {comment.name}
                  </h3>
                  <h4 className={styling["comment-email"]}>
                    Email: {comment.email}
                  </h4>
                  <p className={styling["comment-body"]}>{comment.body}</p>
                </li>
              );
            })}
          </div>
        </div>
      );
}

export default PostPage;