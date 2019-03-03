let test = [
  {subject: "math", points: 70}, 
  {subject: "english", points: 50}, 
  {subject: "society", points: 80}
];

const science = {subject: "science", points: 100};

test[3] = science;

console.log(test[3]["points"]);

 let data = {name: "shibata", password: "hogehoge"};


let teacher = {
  name: "野呂"
};

let memtor = {
  name: "宮岡"
};

function introduction(character){
  console.log(`私の名前は${character.name}です`);
};

introduction(teacher);