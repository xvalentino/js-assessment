exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
      var reg = /\d+/;
      if(str.match(reg)){
            return true;
          }
      else {
            return false;
          }
    },

  containsRepeatingLetter : function(str) {
      reg = /([a-zA-Z]).*?\1/;
      if(str.match(reg)){
            return true;
          }
      else {
            return false;
          }
    },

  endsWithVowel : function(str) {
      reg = /[aeiouAEIOU]\b/;
      if(str.match(reg)){
            return true;
          }
      else{
            return false;
          }
    },

  captureThreeNumbers : function(str) {
      reg = /(\d{3})/;
      if(str.match(reg)) {
            return str.match(reg)[0]
          }
      else {
            return false;
          }
    },

  matchesPattern : function(str) {
      reg = /^\d{3}-{1}\d{3}-{1}\d{4}$/
      if(str.match(reg)) {
            return true;
          }
      else {
            return false;
          }
    },
  isUSD : function(str) {
      reg = /(?=.)^\${1}(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+)?(\.[0-9]{2})?$/;
      if(str.match(reg)) {
            return true;
          }
      else {
            return false;
          }
    }
};
