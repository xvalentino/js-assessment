exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(el){
      return str + ", " + el;
    }
  },

  makeClosures : function(arr, fn) {
    var values = [];

    //why return a function instead of just fn(value) below?

    var makeFn = function(value){
      return function() { return fn(value); }
    }

    arr.forEach(function(el) {
      values.push(makeFn(el));
    })
    return values;
  },

    partial : function(fn, str1, str2) {
      return function(additional){
        //why the null (hello does not get returned)?
        //fills the first arg of sayIt function
        return fn.call(null, str1, str2, additional);
      };
    },

    useArguments : function() {
      return [].reduce.call(arguments, function(num1, num2){
        return num1 + num2
      })
    },

    callIt : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1, arguments.length);
      fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1, arguments.length);
      return function() {
        var otherArgs = args.concat(Array.prototype.slice.call(arguments));
        return fn.apply(null, otherArgs);
      };
    },

    curryIt : function(fn) {
      function applyArguments(fn, arguments) {
        return fn.apply(null, arguments);
      }

      function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
        return function (currentArgument) {
          accumulatedArguments.push(currentArgument);

          var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;

          if (allArgumentsProvided) {
            return applyArguments(fn, accumulatedArguments);
          } else {
            return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
          }
        };
      }
      return getArgumentAccumulator([], fn.length);
    }
};
