

function caught_speeding(speed, is_birthday){
  var Rspeed = 0
  if ((is_birthday == true)) {
    Rspeed = speed - 5;

  } else {
    Rspeed = speed;
  }

  if (Rspeed <= 60 ) {
    return 0
  }else if ((Rspeed >= 61) && (Rspeed <= 81)) {
    return 1
  }else if (Rspeed > 81) {
    return 2
  }
}

function luckySum(a, b, c){

if ((a === 13)) {
  return 0;
}else if ((b === 13)) {
  return a;
}else if ((c === 13)) {
  return a + b;

}else {
  return a + b + c;
}
}


function stringTimes(str, n) {
    var returnStr = '';
    var i = 0;
    while (i < n) {
        returnStr += str;
        i++;
    }
    return returnStr;
}

function sleepIn(weekday, vacation) {
    //Code Goes Here
var sleep = false;

    if ((weekday == false) && (vacation == true)) {
      sleep = true;

    }else if ((weekday == false) && (vacation == false)) {

      sleep = true;

    } else {
      sleep = false;
    }

return sleep
}


function monkeyTrouble(aSmile, bSmile) {
    //Code Goes Here
    var trouble = true;
    if ((aSmile == true) && (bSmile == true)) {
      var trouble = true;
    } else if ((aSmile == false) && (bSmile == false)) {
      var trouble = true;
    } else {
      var trouble = false;
    }
    return trouble;
}
