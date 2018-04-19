/**
 * function called as a chain
 * P1: addup(1)(2)(3) = 6 addup(1)(2)(3)(4) = 10    http://www.css88.com/archives/5147
 * P2: f(1) = 1 f(1)(2) = 5   f(1)(2)(3) = 10
 */

function addup(x) {
    var sum = x;
    var tmp = function(y){
        sum += y;
        return tmp;
    }
    tmp.toString = function(){
        return sum;
    };
    return tmp;
}

