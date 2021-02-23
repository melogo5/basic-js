const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;
  backyard.map(function(elem) {elem.map(function(el) {if (el == "^^") count++;})});
  return count;
};
