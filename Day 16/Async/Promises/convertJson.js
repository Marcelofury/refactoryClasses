// convert js object ---> JSON

let user = {
    name: "Butera ",
    age: 22,
    isStudent: true,
    skills: ["JavaScript", "HTML", "CSS"],
};

let json = JSON.stringify(user)
console.log(json);