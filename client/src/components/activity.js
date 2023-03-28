import { useState, useEffect } from "react";
import { TextField, Select, MenuItem, Button } from "@mui/material";
import Card from "@mui/material/Card";
import Main from "./Main";
import { useDispatch } from "react-redux";
import { createActivity,updateActivity } from "../store/activitySlice/action";



function Activity({
  isEditMode,
  setAnchorEl,
  id,
  duration: propDuration,
  description: propDescription,
  date: propDate,
  activity: propActivity,
}) {
  const [status, setStatus] = useState(false);

 

  const [date, setDate] = useState(propDate || "");
  const [activity, setActivity] = useState(propActivity || "");
  const [duration, setDuration] = useState(propDuration || "");
  const [description, setDescription] = useState(propDescription || "");
  // const [activities, setActivities] = useState([]);
  
 

  const dispatch = useDispatch();
  console.log("isEditMode=>>", isEditMode)

// useEffect(()=>{ 
//   console.log("dispatch");
//   dispatch(fetchActivities())
// },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(!status);
    setAnchorEl(null);
    console.log("Activity:", activity);

    // await saveUser({ date, activity, duration, description });

    setDate("");
    setActivity("");
    setDuration("");
    setDescription("");
    
    

    // await fetchActivities(setActivities);
    // setIsEditMode(false);

    if( isEditMode){ 
      const payload = {}
      if(date.length > 0) payload[ "date" ] = date;
      if(duration.length > 0) payload[ "duration" ] = duration;
      if(activity.length > 0) payload[ "activity" ] = activity;
      if(description.length > 0) payload[ "description" ] = description;

console.log("edit",payload);
      dispatch(updateActivity({ ...payload, id }));
    }else { 
      dispatch(createActivity({ date, activity, duration, description }));
    }

  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };


  
// const isEditMode = description.length < 0 
const buttonText = isEditMode ? "Edit Activity" : "Add Activity";

  return (
    <Card
      sx={{
        maxWidth: 345,
        width: {
          xs: 200,
          sm: 400,
          md: 900,
          lg: 900,
          xl: 700,
        },
        mt: 6,
        ml: 2,
      }}
    >
      <form
      method="GET"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "400px",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          id="filled-basic"
          label="Date"
          type="date"
          variant="filled"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => setDate(e.target.value)}
         value={date}
        />

        <Select
          onChange={(e) => {
            setActivity(e.target.value);
            // console.log("Selected activity:", e.target.value);
          }}
          label=""
          defaultValue="Activity"
          value={activity}
        >
          <MenuItem disabled value="Activity">
            {" "}
            Select Activity
          </MenuItem>
          <MenuItem value="run">Run</MenuItem>
          <MenuItem value="bicycle-ride">Bicycle Ride</MenuItem>
          <MenuItem value="swim">Swim</MenuItem>
          <MenuItem value="walk">Walk</MenuItem>
          <MenuItem value="hike">Hike</MenuItem>
        </Select>
        <TextField
          label="Duration"
          value={duration}
          onChange={handleDurationChange}
        />

        <TextField
          rows="4"
          multiline
          label="Descriptions"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button
          onClick={handleSubmit}
          type="submit"
          variant="contained"
          color="primary"
        >
          {buttonText}
          {/* {isEditMode ? "Update Activity" : "Add Activity"} */}

          
        </Button>

        

        {/* <Main activities={activities}/> */}
      </form>
    </Card>
  );
}
export default Activity;
