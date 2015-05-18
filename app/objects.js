exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
      return fn.call(obj)
    },

  alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting
    },

  iterate : function(obj) {
      properties = []
      Object.getOwnPropertyNames(obj).forEach(function(value){
            properties.push(value + ": " + obj[value]);
          })
      return properties;
    }
};
