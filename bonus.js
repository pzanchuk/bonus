var userSentance = prompt("Please enter a sentence: ");



var final = function letters(userSentance){
  return (userSentance.charAt(0) + userSentance.charAt(userSentance.length - 1)).toUpperCase();

};

// alert(final(userSentance));



var reversed = function reverse(final){
  return (userSentance.charAt(userSentance.length - 1) + userSentance.charAt(0)).toUpperCase();
}

// alert(reversed(final));

function g (){
  var a = final(userSentance)
  var b = reversed(final);
  return userSentance+b
}
// alert(g());

function count() {
  var num = userSentance.length;
  var letter = Math.floor(num/2);
  return userSentance.charAt(letter)+g();
}
// alert(count())

var lastResult = count();


function reverseString(lastResult) {
    return lastResult.split("").reverse().join("");
}
alert(reverseString(lastResult));

// var lastResult = count();
// var text = "";
// for (i=lastResult-1; i>=0; i--){
//   text += lastResult[i];
//   alert(text);
// }
