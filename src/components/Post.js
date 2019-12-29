import React from 'react';
import { Link } from 'react-router-dom'

function Post() {
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
    <div className="post">
      <h1>post detail</h1>
    </div>
  );
}

export default Post;