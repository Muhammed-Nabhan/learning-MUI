import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

export const Page = () => {
  return (
    <Box flex={4} p={2} alignItems={"center"}>
      <Post />
      <Post />
      <Post />
    </Box>
  );
};
