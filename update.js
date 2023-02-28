const readline = require("readline");
const fs = require("fs");
const keypress = require("keypress");
const { exec } = require("child_process");
const writeStream = fs.createWriteStream("output.js", { flags: "a" });
const readStream = fs.createReadStream("promiss.js");

// Create a readline interface for reading input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Listen for the 'keypress' event on the input stream
// process.stdin.on("keypress", function(ch, key) {
//   console.log(`You pressed the '${ch}' key.`);
// });

// Simulate a 'keypress' event for the 'a' key after a short delay
// setTimeout(function() {
//   rl.input.emit("keypress", "a", { name: "a" });
// }, 1000)
const array = [
  1000, 100, 985, 964, 785, 684, 486, 579, 468, 579, 485, 654, 789, 475, 684,
  359, 248, 245, 345, 486, 125, 321, 145, 851, 750,
];

const keysToPress = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "space",
  "enter",
  "tab",
  "backspace",
  "shift",
  "control",
  "alt",
  "escape",
  "left",
  "right",
  "up",
  "down",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "f10",
  "f11",
  "f12",
  "printscreen",
  "scrolllock",
  "pause",
  "insert",
  "delete",
  "home",
  "end",
  "pageup",
  "pagedown",
];
keypress(process.stdin);

// Create a read stream for the file

// Listen for the 'data' event to read chunks of data from the stream
// readStream.on("data", function (chunk) {
//   console.log(`Received ${chunk.length} bytes of data.`);
//   console.log(chunk.toString());
//   writeIntoFile(chunk.toString());
// });

// Listen for the 'end' event to know when the stream has finished reading the file
// readStream.on("end", function () {
//   console.log("Finished reading the file.");
// });

// Listen for the 'error' event to handle any errors that occur while reading the file
// readStream.on("error", function (err) {
//   console.error(`Error while reading the file: ${err.message}`);
// });

//----------------------------------------------------------------
// const keySender = require("node-key-sender");

// Define an array of special characters to press
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Loop through the array and press each special character
// keysToPress.forEach((char) => {
//   // keySender.sendKey(char);
//   setTimeout(function () {
//     rl.input.emit("keypress", "a", { name: "a" });
//   }, 1000);
// });

var i = 0;
setInterval(() => {
  if (i == keysToPress.length) {
    i = 0;
  }
  let key = keysToPress[i];
  console.log(key);
  rl.input.emit("keypress", "key", { name: key });

  i++;
}, getRandomItem(array));

///----------------------------------------------------------------
const writeIntoFile = (str) => {
  for (var i = 0; i < str.length; i++) {
    let char = str.charAt(i);

    if (keysToPress.includes(char)) {
      exec(`xdotool key ${char}`);
    }
  }
};

//------------------------------------------------------------------------------
// Create a write stream for the output file

// Listen for keypress events on the standard input stream

// Listen for the 'keypress' event to handle each keypress
process.stdin.on("keypress", function (ch, key) {
  // Write the key data to the output file
  writeStream.write(key.name);
});

// Listen for the 'exit' event to close the write stream before exiting the script
process.on("exit", function () {
  writeStream.end();
});

function getRandomItem(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

//----------------------------------------------------------------

/* 
#!/bin/bash

SECONDS=10
END_TIME=$((SECONDS+60))
arr=(w r t y h d s c v b n h g ) 
I=0
tLen=${#arr[@]}
while [ $SECONDS -lt $END_TIME ]
do
  if [ $tLen  -eq  $I ]
     then
         I=0 
     fi
    xdotool key ${arr[RANDOM%13]}
    echo ${arr[I]} >> keylog.js
    sleep 0.5 
    ((I++))
done 


#!/bin/bash


SECONDS=30
END_TIME=$((SECONDS+10))
arr=(w r t y h d s c v b n h g d Return) 
tLen=${#arr[@]}
I=0
while [ $SECONDS -lt $END_TIME ]
do
         if [ $tLen  -eq  $I ]
     then
         I=0 
     fi
    xdotool key ${arr[I]}
    echo ${arr[I]} >> keylog.txt
    sleep 0.5 
    ((I++))
done 
 */