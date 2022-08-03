/* for (var i = 1; i <= 20; i++) {
    console.log(i);
    if (i > 5) {
        break;
    }
} */



/* var roastGiven = 0;
while (roastGiven < 10) {
    console.log('Roast Den, git item ansi');
    roastGiven++;
    if (roastGiven > 4) {
        break;
    }
}
 */


var items = ['bottle', 'mouse', 'sunglass', 'pen', 'macbook'];
for (var i = 0; i < items.length; i++) {
    var item = items[i]


    if (item == 'pen') {
        break;
    }

    console.log(item);
}



// Numbers Break  

var numbers = [45, 87, 98, 56, 32, 51, 25, 188, 41]
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];

    if (number > 100) {
        break;
    }
    console.log(number);


}