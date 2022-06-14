/* .
Write a function, toEmoticon(), that takes in a string and returns the corresponding emoticon as a string. Use a switch/case, and cover these cases:

'shrug' should return '|_{"}_|'
'smiley face' should return ':)'
'frowny face' should return':('
'winky face' should return ';)'
'heart' should return '<3'
any other input should return '|_(* ~ *)_|' */

const toEmoticon = emoticon => {
  switch (emoticon) {
    case "shrug":
      return '|_{"}_|';
      break;
    case "smiley face":
      return ':)';
      braak;
    case "frowny face":
      return ':(';
      break;
    case "winky face":
      return ';)';
      break;
    case "heart":
      return '<3';
      break;
    default:
      return '|_(* ~ *)_|';
      break;
  }

}


// Should print  '|_(* ~ *)_|'
console.log(toEmoticon("whatever"));
console.log(toEmoticon("heart"));
console.log(toEmoticon("winky face"));
