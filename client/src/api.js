const createActivity = async ({ date, activity, duration, description }) => {
  const response = await fetch("http://localhost:3000/activities", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ date, activity, duration, description }),
  });
  const data = await response.json();
  return data;
};

const updateActivity = async (
  id,
  { date, activity, duration, description }
) => {

  console.log("api",{ date, activity, duration, description,id })
  const response = await fetch(`http://localhost:3000/activities/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ date, activity, duration, description }),
  });

  const data = await response.json();
  return data;
};

const fetchActivities = async () => {
  const response = await fetch("http://localhost:3000/activities");
  const data = await response.json();
  return data;
};

const deleteActivity = async (id) => {
  const response = await fetch(`http://localhost:3000/activities/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export { createActivity, updateActivity, fetchActivities, deleteActivity };
