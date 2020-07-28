/* stack */


/*  ************ exersice ***********

        making a palindorme checker

palindorme is a word with the same meaning when it is read in both sides.
like 'racecar' read it from left to right and right to left we get the same letter

*/

// global variables
 
var stack = []; // this is our stack

var word = 'kirubel'

var rword = ''; // the reaverse of word

// put the letters of the word inthe stack
for (var i = 0; i < word.length; i++){
    stack.push(word[i]);
}
// pop the letter form the stack and add is to rword 

for (var i = 0; i < word.length; i++){
    rword += stack.pop();
}

function cheack(){
    if (word == rword ){
        return word + ' is palindorme'
    }else{
        return word + ' is not palindorme'
    }
}