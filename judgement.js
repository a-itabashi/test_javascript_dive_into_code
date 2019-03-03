function judgement(x,y,z){
  let achievement = get_achievement(x,y,z)
  let pass_or_failure = get_pass_or_failure(x,y,z)
  
  return `あなたの成績は${achievement}です。${pass_or_failure}です`;
}


// 成績判定をする
function get_achievement(x,y,z){
  let sum = x + y + z;
  if(sum >= 250 && sum <= 300){
    return "A";
  }else if(sum >= 200 && sum < 250){
    return "B";
  }else if(sum <= 100 && sum < 200){
    return "C";
  }else{
    return "D";
  }
}


// 合否判定をする
function get_pass_or_failure(x,y,z){
  if(x >= 60 && y >= 60 && z >= 60){
    return "合格";
  }else{
    return "不合格";
  }
}

console.log(judgement(60,100,40));