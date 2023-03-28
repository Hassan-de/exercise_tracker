const Activity = require("../model/activitiesSchema"); 
const express = require('express')


const router = express.Router();


router.get("/activities", async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to retrieve activities" });
  }
});


router.post("/activities", async (req, res) => {
  try {
    console.log(req.body);
    const { date, activity, duration, description } = req.body;
    const newActivity = new Activity({ date, activity, duration, description });
    await newActivity.save();
    res.json(newActivity);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to add activity" });
  }
});

router.put("/activities/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { date, activity, duration, description } = req.body;
    const updatedActivity = await Activity.findByIdAndUpdate(
      id,
      { date, activity, duration, description },
      { new: true }
    );
    res.json(updatedActivity);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to update activity" });
  }
});

router.delete("/activities/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Activity.findByIdAndRemove(id);
    res.json({ message: "Activity removed" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to remove activity" });
  }
});


module.exports = router;
