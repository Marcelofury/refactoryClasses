
// convert JSON ---> js object
let jsonString = `{
            "name": "Butera ",
            "age": 22,
            "isStudent": true,
            "skills": ["JavaScript", "HTML", "CSS"],
        }`; 


let obj = JSON.parse(jsonString);
console.log(obj.name);