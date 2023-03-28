const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');



const activitySchema = new mongoose.Schema({
    date: { type: String, required: true },
    activity: { type: String, required: true },
    duration: { type: String, required: true },
    description: { type: String, required: true }
  });


  
const Activity = mongoose.model("ACTIVITIES", activitySchema);

module.exports = Activity;  
