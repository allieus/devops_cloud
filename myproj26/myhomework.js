// npm install readline-sync

const { question } = require("readline-sync");

const animal_names = [
    "cat",
    "dog",
    "fox",
    "monkey",
    "mouse",
    "panda",
    "frog",
    "snake",
    "wolf",
];

// const random_animal_names = animal_names
//     .map((name) => ({
//         name,
//         value: Math.random(),
//     }))
//     .sort((obj_a, obj_b) => {
//         return obj_a.value - obj_b.value;
//     })
//     .map(obj => {
//         return obj.value;
//     });

const shuffled_animal_names = animal_names
    .map((name) => ({
        name,
        value: Math.random(),
    }))
    .sort((obj_a, obj_b) => {
        return obj_a.value - obj_b.value;
    })
    .map(({ name }) => name);

const begin_time = new Date().getTime();  // float
let ok_counter = 0;

for (const animal_name of shuffled_animal_names.slice(0, 5)) {
    const line = question(`${animal_name} >>> `);
    if (line === animal_name) {
        ok_counter++;
    }
}

const end_time = new Date().getTime();   // float

const time = end_time - begin_time;
console.log(`총 ${parseInt(time / 1000)}초가 소요되었습니다.`);

console.log(`총 ${ok_counter}회 맞추셨습니다.`);
