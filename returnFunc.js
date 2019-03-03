function add(i, j){
  if(i + j < 50){
    return "50より小さい";
  }else{
    return "50以上です";
  }
}

console.log(add(10,20));