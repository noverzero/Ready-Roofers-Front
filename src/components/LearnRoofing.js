import React from 'react';
import { Link } from 'react-router-dom'

function LearnRoofing() {
    const blog = [
        {
            title: "Post Number 1",
            author: "Dustin Huth",
            subject: "Roofing",
            content: "Lorem ipsum......."
        },
        {
            title: "Post Number 2",
            author: "Mark Fantini",
            subject: "Roofing",
            content: "Lorem ipsum......."
        },
        {
            title: "Post Number 3",
            author: "Brent",
            subject: "Roofing",
            content: "Lorem ipsum......."
        },
        {
            title: "Post Number 4",
            author: "Shae",
            subject: "Roofing",
            content: "Lorem ipsum......."
        }

    ]

  return (
    <div className="LearnRoofing">
      <h1>Learn Roofing Page</h1>
      <div className="blogPost">
        {blog.map((post, i) => (
            <div key={i}>
                
                <h3><Link to={`/learn-roofing/${post.title}`}>{post.title}</Link></h3>
                <h6>by: {post.author}</h6>
                <p>Content: {post.content}</p>

            </div>


        ))}
      </div>
    </div>
  );
}

export default LearnRoofing;