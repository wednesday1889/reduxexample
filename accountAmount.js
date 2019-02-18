function accountAmount() {
  // TODO: IE is weird here.
  var state =
    arguments.length > 0 && arguments[0] != undefined
      ? arguments[0]
      : {
          value: 0
        };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_AMOUNT_ON_ACCOUNT:
      return {
        value: state.value + action.value
      };

    case REMOVE_AMOUNT_FROM_ACCOUNT:
      return {
        value: state.value - action.value
      };

    default:
      return state;
  }
}
