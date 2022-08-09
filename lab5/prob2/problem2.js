function readInput() {
    let numLst = [];
    while(true) {
        let num = Number(prompt("Enter an integer (a negative interger to quite):"));
        if (!isInt(num)) continue;  //check int
        if (num > 0) {
            numLst.push(num);
            continue;
        } else {
            return numLst;
        }
    }
}

function averageNum(n) {
    let total = 0;
    for (let i = 0; i < n.length; i++) {
        total += n[i];
    }
    let avg = !n.length ? "0" : (total / n.length).toFixed(2);
    return avg;
}

function minNum(n) {
    let minimun = !n.length ? "0" : Math.min(...n);
    return minimun;
}

function maxNum(n) {
    let maximum = !n.length ? "0" : Math.max(...n);
    return maximum;
}

function displayStats(lst) {
    alert('For the list '+ lst + ', the average is ' + averageNum(lst) + ', the minimun is ' + minNum(lst) + ', and the maximum is ' + maxNum(lst));
}

//check int
function isInt(n) {
    return n % 1 == 0;
}

//main
let list  = readInput();
displayStats(list);
