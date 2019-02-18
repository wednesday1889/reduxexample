var ADD_AMOUNT_ON_ACCOUNT = "ADD_AMOUNT_ON_ACCOUNT";
var REMOVE_AMOUNT_FROM_ACCOUNT = "REMOVE_AMOUNT_FROM_ACCOUNT";

function addAmountOnAccount(amount) {
  return {
    value: amount,
    type: ADD_AMOUNT_ON_ACCOUNT
  };
}

function removeAmountOnAccount(amount) {
  return {
    value: amount,
    type: REMOVE_AMOUNT_FROM_ACCOUNT
  };
}

function verifyAccount() {
  return function(dispatch) {
    // simulate an async call, https and stuff
    setTimeout(function() {
      dispatch(addAmountOnAccount(0.3));
    }, 1000);
  };
}
