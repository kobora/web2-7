
 var nunber
 var answer
 
 var message;
 if(answer === number){
 message = `あたり!`;
}else if (answer < nunber){
 message =`残念！もっと大きいです`
 }else if(number < answer){
 message =`残念!もっと小さいです`;
}else{
 message = `0~3`;
}

document.getElementById(`choice`).textContent = message;
