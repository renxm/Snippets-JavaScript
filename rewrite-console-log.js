/**
 * Rewrite console.log to add a line num before each line.
 */
var lineNum = 1;
console.log = (function(oldLog){
    return function(str){
        oldLog("" + (lineNum++) + ": " + str);
    };
})(console.log);
