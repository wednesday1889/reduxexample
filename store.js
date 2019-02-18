function _instanceof(left, right) {
  if (
    right != null &&
    typeof Symbol !== "undefined" &&
    right[Symbol.hasInstance]
  ) {
    return right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Store =
  /*#__PURE__*/
  (function() {
    function Store(reducers) {
      _classCallCheck(this, Store);

      this._reducers = reducers;
      this._state = {};
      this.subscribers = [];
      this.dispatch = this.dispatch.bind(this);
      this.dispatch({
        type: "__INIT__"
      });
    }

    _createClass(Store, [
      {
        key: "_dispatch",
        value: function _dispatch(action) {
          var _this = this;

          var reducersNames = Object.keys(this._reducers);
          var nextState = reducersNames.reduce(function(newState, name) {
            newState[name] = _this._reducers[name](_this._state[name], action);
            return newState;
          }, {});
          this._state = nextState;
          this.subscribers.forEach(function(subscriber) {
            subscriber(_this._state);
          });
        }
      },
      {
        key: "dispatch",
        value: function dispatch(action) {
          if (typeof action === "function") {
            return action(this.dispatch);
          }

          this._dispatch(action);
        }
      },
      {
        key: "subscribe",
        value: function subscribe(subscriber) {
          var _this2 = this;

          this.subscribers.push(subscriber);
          return function() {
            _this2.subscribers.splice(
              _this2.subscribers.indexOf(subscriber),
              1
            );
          };
        }
      },
      {
        key: "getState",
        value: function getState() {
          return this._state;
        }
      }
    ]);

    return Store;
  })();
