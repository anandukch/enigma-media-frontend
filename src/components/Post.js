import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Post() {
  return (
    <div>
        
      <form action="" method="POST">
        <label htmlFor="">title</label>
        <input type="text" name="title" />
        <label htmlFor="">author</label>
        <input type="text" name="author" />
        <button type='submit'>submit</button>
      </form>
      <div>
        {/* {posts.map((post) => {
          return (
            <>
              <p>{post.title}</p>
              <p>{post.author ?? "no author"}</p>
            </>
          );
        })} */}
      </div>
    </div>
  );
}

export default Post;
