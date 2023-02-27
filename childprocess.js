const { exec } = require("child_process");

// Define an array of all the keys to press
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
  "pagedown"
];

// Loop through the array of keys and press each one
for (const key of keysToPress) {
  // Use the `exec` function to execute a command that simulates pressing the key
  exec(`xdotool key ${key}`);
}