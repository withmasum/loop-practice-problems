var numbers = [45, 87, 98, 56, 32, 51, 25, 188, 41]
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];

    if (number > 50) {

        continue;
    }
    console.log(number);
}