function goalReducer() {
  // TODO: IE is weird here.
  var state =
    arguments.length > 0 && arguments[0] != undefined
      ? arguments[0]
      : {
          goalId: 1,
          status: 1,
          description: "default",
          empComments: "default"
        };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_GOAL:
      var goal = action.goal;

      var goalId = goal.goalId;
      var status = goal.status;
      var description = goal.description;
      var empComments = goal.empComments;
      return {
        goalId: goalId,
        status: status,
        description: description,
        empComments: empComments
      };

    default:
      return state;
  }
}
