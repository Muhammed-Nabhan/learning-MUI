import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export const Rightbar = () => {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      title: "Beach",
    },
    {
      img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
      title: "Mountain",
    },
    {
      img: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
      title: "Cityscape",
    },
  ];

  return (
    <Box
      flex={2}
      p={2}
      alignItems={"center"}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100} mb={2}>
          Friends
        </Typography>
        <AvatarGroup max={5}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://photos.psychologytoday.com/854635d7-d4a8-486c-a207-258143726a21/1/320x400.jpeg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://th.bing.com/th/id/OIP.H2AQPubIQLwl4OYDe2KKhQHaK1?w=1313&h=1920&rs=1&pid=ImgDetMain"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://pbs.twimg.com/profile_images/1103304196294656001/4Oc3_rsP_400x400.png"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://i.pinimg.com/originals/f1/8b/87/f18b8722feaefddf5dc6d37101e6c8bd.jpg"
          />
          <Avatar alt="Trevor Henderson" src="" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} my={2}>
          Recent Posts
        </Typography>
        <ImageList sx={{ width: 350 }} cols={3} rowHeight={125}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={100} pt={4}>
          Recent Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://photos.psychologytoday.com/854635d7-d4a8-486c-a207-258143726a21/1/320x400.jpeg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </Box>
    </Box>
  );
};
