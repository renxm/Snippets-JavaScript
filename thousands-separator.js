/**
 * Convert a given number to a string with thousands seprarater.
 */

 //Solution 1: regrex
Number.prototype.toStrNum = function () {
    var num = this.toString();
    var reg = /\d{1,3}(?=(\d{3})+$)/g;
    return num.replace(reg, '$&,')
}

