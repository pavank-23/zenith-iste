import React from 'react'
import ReactPlayer from 'react-player'
import './video-player.css'
import Header from '../header';
import Separator from '../../common/separator';
import { useState } from 'react'

function VideoPlayer(){
  let num = 1000;
  let init_val = 1000;
  let cur_val = init_val;
  let change = init_val/num;
  let coin_count = 0;

  let init_acc_bal = 10000;
  let acc_bal = init_acc_bal;

  function buy(cur_val){
    if (coin_count<num){
      if(acc_bal>change){
        change = cur_val/(num-coin_count);
        cur_val+= change;
        acc_bal -= change;
        coin_count++;
        num--;
      }
    }
    return cur_val;
  }

  function sell(cur_val){
    if(coin_count>0){
      change = cur_val/(num-coin_count);
      cur_val -= change;
      acc_bal += change;
      coin_count--;
      num--;
    }
    return cur_val;
  };

  const [value,setValue] = useState();
  const changeMyVariable = (a,i) => {
      if (i=="buy"){
       setValue = buy(a)
      }
      else if (i=="sell"){
        setValue = sell(a)
      }
  };
  return (
    <div>
      <Header />
      <Separator />
        <div className = 'videoplayer'>
            <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" controls="true" width="60%" height="60%"/>
        </div>
        <div className='video-title'>
            Rick Astley - Never Gonna Give You Up (Official Music Video)
        </div>
        <div className='investButtons'>
          <button onclick={()=>changeMyVariable(value,"buy")}>Buy</button>
          <button onclick={()=>changeMyVariable(value,"sell")}>Sell</button>
          <span className='value'>Value : {value}</span>
        </div>
        <div className='video-desc'>
        The official video for “Never Gonna Give You Up” by Rick Astley
    “Never Gonna Give You Up” was a global smash on its release in July 1987, topping the charts in 25 countries including Rick’s native UK and the US Billboard Hot 100.  It also won the Brit Award for Best single in 1988. Stock Aitken and Waterman wrote and produced the track which was the lead-off single and lead track from Rick’s debut LP “Whenever You Need Somebody”.  The album was itself a UK number one and would go on to sell over 15 million copies worldwide.
    <br />
    The legendary video was directed by Simon West – who later went on to make Hollywood blockbusters such as Con Air, Lara Croft – Tomb Raider and The Expendables 2.  The video passed the 1bn YouTube views milestone on 28 July 2021.
        </div>
    </div>
  )
}

export default VideoPlayer