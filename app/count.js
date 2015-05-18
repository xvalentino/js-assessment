exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var timeout;

    function logIt () {
      console.log(start++);

      if (start <= end) {
        timeout = setTimeout(logIt, 100);
      }
    }

    logIt();

    return {
      cancel : function () {
        clearTimeout(timeout);
      }
    };
  }
};
