let num = 1000;
let init_val = 1000;
let cur_val = init_val;
let change = init_val/num;
let coin_count = 0;

let init_acc_bal = 10000;
let acc_bal = init_acc_bal;

document.getElementById('cur_value').innerHTML="Value : "+cur_val;


function buy(){

  if (coin_count<num){
    if(acc_bal>change){
      change = cur_val/(num-coin_count);
      cur_val+= change;
      acc_bal -= change;
      coin_count++;
      num--;
    }
  }

  document.getElementById('cur_value').innerHTML="Value : "+cur_val;
}

function sell(){
  if(coin_count>0){
    change = cur_val/(num-coin_count);
    cur_val -= change;
    acc_bal += change;
    coin_count--;
    num--;
  }
  document.getElementById('cur_value').innerHTML="Value : "+cur_val;
}