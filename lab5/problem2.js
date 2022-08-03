function getNum(n) {
    numLst.push(n);
}

function averageNum(n) {
    var total = 0;
    for(var i = 0; i < n.length; i++) {
        total += n[i];
    }
    var avg = total / n.length;
    if (isNaN(avg)) return null;
    else return avg.toFixed(2);
}

function maxNum(n) {
    return Math.max(n);
}

function minNum(n) {
    return Math.min(n);
}

//check int
function isInt(n) {
    return n % 1 == 0;
}

const numLst = [];
while(true) {
    var num = Number(prompt("Enter an integer (a negative interger to quite):"))
    if (!isInt(num)) continue;  //check int
    if (num > 0) {
        getNum(num);
        continue;
    } else {
        alert('For the list '+ numLst + ', the average is ' + (averageNum(numLst) ?? "0") + ', the minimun is ' + (minNum(...numLst) ?? "0") + ', and the maximum is ' + (maxNum(...numLst) ?? "0"))
        break;
    }
}