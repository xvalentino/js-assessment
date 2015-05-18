exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var arrayLength = arr.length;
    var total = 0;
    for (var i = 0; i < arrayLength; i++) {
      total = arr[i] + total;
    }
    return total;
  },

  remove : function(arr, item) {
    arr.forEach(function(entry) {
      if (entry === item) {
        arr.splice(arr.indexOf(entry), 1);
      }
    });
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    var filterArray = function(array) {
      array.filter(function (item) { return item !== 2})
    }
    filterArray(arr);
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    arr2.forEach(function(element) {
      arr1.push(element);
    })
    return arr1;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr;
  },

  count : function(arr, item) {
    total = 0;
    arr.forEach(function(entry) {
      if (entry === item) {
        total++;
      }
    });
    return total;
  },

  duplicates : function(arr) {
    var numCounts = {};
    var dupes = [];
    arr.forEach(function(entry) {
      if (numCounts[entry] == 1 ) {
        dupes.push(entry);
      }
      else {
        numCounts[entry] = 1;
      }
    });
    return _.uniq(dupes);
  },

  square : function(arr) {
    squared = arr.map(function(entry) {
      return entry * entry
    });
    return squared;
  },

  findAllOccurrences : function(arr, target) {
    occurences = [];
    index = 0;
    arr.forEach(function(entry) {
      if (entry == target) {
        occurences.push(arr.indexOf(entry, index));
      }
      index++;
    });
    return occurences;
  }
};
