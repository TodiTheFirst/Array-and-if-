const randomNumber = Math.random();
const rNgNum = Math.random(); // produces random number between 0 (including) and 1 (excluding)
// if (randomNumber >= 0.7) {   //Задание 1
//     alert('I did it Bro!!!')
// } else {
//     alert('Well it didn\'t work')
// }
const program = [1, 2, 3, 4, 5, 6, 10, 20, 40, 34, 21]; //Задание 2
// let b = 0                       //при помщи команд шифт можно убрать коментарий
// while (b > program.length) {
//    b++
//   console.log(program[b]);
//  }
for (const proo of program) {
  console.log(proo);
}

for (i = program.length; i > 0; i--) {
  //Задание 3
  console.log(program[i]);
}
console.log(randomNumber);
console.log(rNgNum);
if (randomNumber > 0.7 && rNgNum > 0.7) {
  //Задание 4
  alert("First variant");
} else if (randomNumber < 0.2 || rNgNum < 0.2) {
  alert("Second one");
} else {
  alert("Well something happend");
}

const person = { name: "Oleg", hobbies: ["Sports", "Cooking"] };

person.age = 30;

anotherPersone;

const person2 = { ...person };

persone.age = 31;

person.hobbies.push("Coding");

console.log(person);
console.log(person2);

const person3 = { ...person, age: 29, hobbies: [...person.hobbies] };
console.log(person3);
// использовать разделительного оператора для создания копий обьектов рекомендуется использовать только при неглубоком копировании

const person = { ame: "Boo" };
