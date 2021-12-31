import { Backdrop, CircularProgress, Container, Grid } from "@material-ui/core";

import React, { useState } from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
function Posts() {
  const products = [
    {
      name: "anandu",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel pharetra sapien. Morbi pretium dictum est eget tincidunt. Fusce sollicitudin elit sem, quis tempor erat sollicitudin quis. Duis sodales sagittis arcu, sed auctor nunc facilisis in. Integer imperdiet feugiat sagittis. Vivamus at sem nibh. Pellentesque id consequat urna. In ultrices purus et porttitor iaculis. Mauris dolor dolor, suscipit eu commodo a, volutpat sed lacus",
    },
    {
      name: "adarsh",
      comment: "hai",
    },
    {
      name: "adavait",
      comment: "how are you",
    },
  ];
  const load = false;
  return (
    <Container>
      {load ? (
        <CircularProgress color="primary" />
      ) : (
        products.map((product) => (
          <>
            <Post name={product.name} comment={product.comment} />
          </>
        ))
      )}
    </Container>
  );
}

export default Posts;
