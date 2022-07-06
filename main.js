/*
 * Problem:
 * Write a minesweeper program to find out mines in a field row.
 * Entities:
 * mine
 * field row
 * The code describes the steps done
 * 
 */

console.log ("Solution using the while loop:");

const battleField = `tree 💣️ tree way river way path secret-path
💣️, car, cat cat person, soldier 💣️ mercenary, bullet tree
bullet 💣️ granade tank airplane helicopter 💣️ dog tree
kid mother dog dog 💣️ street 💣️ mines`;

const mine = '💣️';

/* i = position */
let i = 0;
while (true) {
  let foundPos = battleField.indexOf(mine, i);
  if (foundPos == -1) break; // -1 = first pos from right to left

  console.log(`There mine after the position: ${foundPos} 💣️`);
  i = foundPos + 1;
}


console.log ("Solution using the for loop:");

/*
Every emoji holds more than 1 char position, so this long
string requires more emoji management than .indexOf():
let battleField = `tree tree way river way path secret-path
💣️, car, cat cat person, soldier 💣️ mercenary, bullet tree
bullet 💣️ granade tank airplane helicopter 💣️ dog tree
kid mother dog dog 💣️ street 💣️ mines`;
*/

let battleField = `soldier M M rifle M`;

/* Lenght of the battleField */
console.log( battleField.length );

mine = 'M';

for (let i = 0; i < battleField.length; i++) {
  var foundPos = battleField.indexOf(mine, i);
  console.log(`Position: ${i}`);
  if (foundPos == i) {
    console.log ("💣️💣️ MINE AHEAD 💣️💣️");
  }
}