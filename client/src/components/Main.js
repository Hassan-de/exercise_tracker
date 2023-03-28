import {
  Button,
  Box,
  Card,
  CardContent,
  Pagination,
  Popover,
  Typography,
  CardComponent,
} from "@mui/material";
import { display, Stack } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { createActivity, fetchActivities } from "../store/activitySlice/action";

import Activity from "./activity";
import React, { useState,useEffect } from "react";
import Samplecard from "./samplecard";
import {useNavigate} from "react-router-dom"

const Main = () => {

  const navigate = useNavigate();
  const callMainPage = async() =>{

    try{
      const res=await fetch('/Main', {
          method: "GET",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json"
          },
          credentials: "include",
      })
          const data = await res.json();
          console.log(data)
          if(!res.status === 200){
            const error=new Error(res.error);
            throw error;
          }
    }
    catch(err){
      console.log(err);
      navigate("/Main");
    }

  }

  useEffect(() =>{
    callMainPage();
  },[]);



  const activities = useSelector((state) => state.activitySlice || []);

  console.log("activities" ,activities)
  const [anchorEl, setAnchorEl] = useState(null);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(fetchActivities());
  }, []);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "add-popover" : undefined;

  const startIdx = (page - 1) * 4;
  const endIdx = startIdx + 4;
  const postsToShow = activities.slice(startIdx, endIdx);

  const isAddButtonDisabled = activities.length >= 5;
  return (
    <>
      <Box
        sx={{
          display: "flex",

          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "80px",
        }}
      >
        <Typography
          sx={{ alignSelf: "start", marginLeft: "140px" }}
          variant="h5"
          component="h2"
        >
          Welcome{" "}
        </Typography>

        {activities && activities.length > 0 ? (
          <Stack spacing={2} direction="row" flexWrap="wrap">
            {activities.map((activity, idx) => (
              <Samplecard
                key={`card-${startIdx + idx}`}
                activity={activity.activity}
                date={activity.date}
                duration={activity.duration}
                description={activity.description}
                id={activity._id}
              />
            ))}
          </Stack>
        ) : (
          <Card
            sx={{
              bgcolor: "#E94057",
              width: "80%",
              display: "flex",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <CardContent>
              <Typography variant="h6" component="h2">
                No previous data
              </Typography>
              <img src="images/project.png" width={150} />
            </CardContent>
          </Card>
        )}

        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            marginLeft: "300px",
            mt: 2,
          }}
        >
          <Pagination
            count={Math.ceil(activities.length / 4)}
            page={page}
            onChange={handleChangePage}
          />
        </Box>

        <Button
          onClick={handleClick}
          variant="contained"
          sx={{ marginTop: "25px" }}
          disabled={isAddButtonDisabled}
        >
          Add
        </Button>
      </Box>

      <Popover
        sx={{ marginTop: "70px" }}
        id={id}
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
          <Activity setAnchorEl={setAnchorEl} />
        </Typography>
      </Popover>
    </>
  );
};

export default Main;
