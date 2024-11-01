import React, { useState, useEffect } from "react";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
  Skeleton,
} from "@mui/material";

const Post = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            loading ? (
              <Skeleton variant="circular" width={40} height={40} />
            ) : (
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                R
              </Avatar>
            )
          }
          action={
            loading ? (
              <Skeleton variant="circular" width={24} height={24} />
            ) : (
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            )
          }
          title={
            loading ? <Skeleton variant="text" width="80%" /> : "C.Ronaldo"
          }
          subheader={
            loading ? (
              <Skeleton variant="text" width="40%" />
            ) : (
              "September 14, 2024"
            )
          }
        />
        {loading ? (
          <Skeleton variant="rectangular" width="100%" height={200} />
        ) : (
          <CardMedia
            component="img"
            height="20%"
            image="https://media.admagazine.fr/photos/63721707e979add88fd833f5/master/w_1600%2Cc_limit/Cristiano-Ronaldo-home_011.jpg"
            alt="Paella dish"
          />
        )}
        <CardContent>
          {loading ? (
            <Skeleton variant="text" width="100%" />
          ) : (
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              New Home 🎉🎉
            </Typography>
          )}
        </CardContent>
        <CardActions disableSpacing>
          {loading ? (
            <>
              <Skeleton variant="circular" width={24} height={24} />
              <Skeleton
                variant="circular"
                width={24}
                height={24}
                sx={{ ml: 2 }}
              />
            </>
          ) : (
            <>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
