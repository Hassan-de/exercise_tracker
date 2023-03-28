import { SET_ACTIVITY } from "./type";
import {
  createActivity as createActivityApi,
  fetchActivities as fetchActivitiesApi,
  deleteActivity as deleteActivityApi,
  updateActivity as updateActivityApi
} from "../../api";

export const createActivity =
  ({ date, activity, duration, description }) =>
  async (dispatch) => {
    await createActivityApi({ date, activity, duration, description });
    const activities = await fetchActivitiesApi();

    const action = {
      type: SET_ACTIVITY,
      payload: activities,
    };

    dispatch(action);
  };

export const fetchActivities = () => {
  return async (dispatch) => {
    const activities = await fetchActivitiesApi();

    console.log("activities response", activities);

    const action = {
      type: SET_ACTIVITY,
      payload: activities,
    };

    dispatch(action);
  };
};

export const deleteActivity = (id) => async (dispatch) => {
  await deleteActivityApi(id);
  const activities = await fetchActivitiesApi();

  const action = {
    type: SET_ACTIVITY,
    payload: activities,
  };

  dispatch(action);
};

export const updateActivity =
  ({ date, activity, duration, description,id }) =>
  async (dispatch) => { console.log("action",{ date, activity, duration, description,id });
    await updateActivityApi(id, { date, activity, duration, description });
    const activities = await fetchActivitiesApi();

    const action = {
      type: SET_ACTIVITY,
      payload: activities,
    };

    dispatch(action);
  };
