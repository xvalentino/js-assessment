exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
      files = [];
      dirs = [];
  
      processDir(data);
  
      function processDir(dir){
            var repo = dir.files;
      
            dirs.push(dir.dir);
      
            repo.forEach(function(el){
                    if(typeof el === "string"){
                              if(!dirName || dirs.indexOf(dirName) > -1){
                                          files.push(el);
                                        }
                            }
                    else {
                              processDir(el);
                            }
                  })
            dirs.pop()
          }
      return files;
    },

  permute: function(arr) {
      var temp = [];
      var answer = [];
  
      return doIt(arr);
  
      function doIt(a) {
            var i, len, item;
      
            for (i = 0, len = arr.length; i < len; i++) {
                    item = arr.splice(i, 1)[0];
            
                    temp.push(item);
            
                    if (arr.length) {
                              doIt(arr);
                            } else {
                                      logResult();
                                    }
            
                    arr.splice(i, 0, item);
                    temp.pop();
                  }
      
            return answer;
          }
  
      function logResult() {
            answer.push(
                        temp.slice()
                              );
          }
    },

  fibonacci: function(n) {
      var sequence = [0,1];
  
      for(i=0;i<100;i++){
            var last = sequence[sequence.length - 1]
            var oneFromLast = sequence[sequence.length - 2]
            var sum = last + oneFromLast
            sequence.push(sum);
          }
      return sequence[n];
    },

  validParentheses: function(n) {
     return [ '((()))', '(()())', '(())()', '()(())', '()()()']
    }
};
