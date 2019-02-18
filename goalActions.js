const UPDATE_GOAL = "UPDATE_GOAL";
const SUBMIT_GOAL = "SUBMIT_GOAL";

function updateGoal(goal) {
  return {
    goal: goal,
    type: UPDATE_GOAL
  };
}

function submitGoal(goal) {
  return dispatch => {
    // Simulate asynchronous treatment
    setTimeout(function() {
      var updatedGoal = submitGoalToLandmark(goal);
      dispatch(updateGoal(updatedGoal));
    }, 1000);

    // this needs a promise I think.
  };
}
