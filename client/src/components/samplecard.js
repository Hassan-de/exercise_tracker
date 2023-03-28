import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import Activity from "./activity";
// import { deletePost } from "../store/activitySlice/action";
import { deleteActivity,fetchActivities } from "../store/activitySlice/action";

import {
  Card,
  CardActions,
  CardContent,
  Popover,
  IconButton,
  Typography,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const Samplecard = (props) => {
  const dispatch = useDispatch();

 

  const [anchorEl, setAnchorEl] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);


  const handleDelete = () => {
   
    dispatch(deleteActivity(props.id));
  };

  // console.log("handleDelete"  ,  handleDelete());

  const handleEdit = (event) => {
    setIsEditMode(true)
   
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsEditMode(true);
  };

  const open = Boolean(anchorEl);
  const id = open ? "add-popover" : undefined;
  

  return (
    <Card sx={{ maxWidth: 345, mb: 1.5 }}>   
      {/* <img src="images\swimming.gif" alt="image here" height="100" /> */}
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
          Date:{props.date}
        </Typography>

        <Typography gutterBottom variant="h5" component="div">
          Activity: {props.activity}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Duration: {props.duration}
        </Typography>

        <Typography gutterBottom variant="h5" component="div">
          Description: {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="edit" onClick={handleEdit}>
          <Edit />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleDelete}>
          <Delete />
        </IconButton>
      </CardActions>
     

      {/* {console.log("activty data", activityData)} */}
      <Popover
        sx={{ marginTop: "70px" }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Typography sx={{ padding: "16px" }}>
          <Activity
            setAnchorEl={setAnchorEl}
            isEditMode={isEditMode}
            date={props.date}
            description={props.description}
            duration={props.duration}
            activity= {props.activity}
            id={props.id}
          />
         {/* console.log( "propParent"{props.duration}, {props.description},{props.date} ) */}
        </Typography>
      </Popover>
    </Card>
  );
};

export default Samplecard;

{
  /* <CardActions>
  <IconButton aria-label="edit" onClick={() => handleEdit()}>
    <Edit />
  </IconButton>
  <IconButton aria-label="delete" onClick={() => handleDelete()}>
    <Delete />
  </IconButton>
</CardActions>;

const CardComponent = ({ title, description, image }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <img src="images\swimming.gif" alt={title} height="140" />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <IconButton aria-label="edit">
          <Edit />
        </IconButton>
        <IconButton aria-label="delete">
          <Delete />
        </IconButton>
      </CardContent>
    </Card>
  );
}; */
}
