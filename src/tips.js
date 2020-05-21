//Automatic Type Conversion

console.log(`8 * null = ${8 * null}`);
// 0 : Because null will be converted to 0  Number(null) ==0

console.log(`"5" - 1 = ${"5" - 1}`);
// 4 : Because -ve operator will convert string to int

console.log(`"Test"-1 = ${"Test" - 1}`);
// NaN : Because -ve operator will convert string to int (NaN in this case)

console.log(`"4" + 4 + 4 = ${"4" + 4 + 4}`);
// 444 :
console.log(`4+4+"4"= ${4 + 4 + "4"}`);
// 84 :
console.log(`false == "0" ${false == "0"}`);
// true : because both will converted to number 0 and then compared

console.log(`null == undefined :  ${null == undefined}`);
// → true
console.log(`null == 0 : ${null == 0}`);
//-> false:  Because when null and undefined are loosely equal to each other and not anything else
console.log(`"1,2,3" == [1,2,3] : ${"1,2,3" == [1, 2, 3]}`);
//-> true: Becaue array will be converted to primitive type string
console.log(`[0] == false : ${[0] == false}`);
//->true : Both Array and false will be converted to number
console.log(`[1,2] == true : ${[1, 2] == 1}`);
//->false : Both Array and false will be converted to number
/********** Falsy values in Javacript**************
   null, undefined, "" (empty string), -0, 0, false, NaN
***************************************************/

// Short Circuit operators && and ||
console.log(
  ` || or operator checks in left value is true then return left value else return right value`
);
console.log(`null || "user" : ${null || "user"}`);
// → user
console.log(`"Agnes" || "user":  ${"Agnes" || "user"}`);
// → Agnes
console.log(`null || undefined : ${null || undefined}`);
// → undefined
console.log(
  `&& operator checks if left value is true then return right value else if left value is false return left value`
);
console.log(`null && "user" : ${null && "user"}`);
// → null ::: Left value since it is evaluate to false
console.log(`"Agnes" && "user":  ${"Agnes" && "user"}`);
// → user ::: right value since left is evaluate to true
