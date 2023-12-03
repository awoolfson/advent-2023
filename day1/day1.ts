function main() {
    const fs = require('node:fs');
    const data = fs.readFileSync('day1/input.txt', 'utf8');
    const lines = data.split('\n')
    
    // part 1
    var sum = 0;
    for (var i = 0; i < lines.length; i++) {
        var number = "";
        var j = 0;
        while (j < lines[i].length && !(/\d/.test(lines[i][j]))) {
            j++;
        }
        number += lines[i][j];
        j = lines[i].length - 1;
        while (j >= 0 && !(/\d/.test(lines[i][j]))) {
            j--;
        }
        number += lines[i][j];
        if (/\d\d/.test(number)) {
            sum += parseInt(number);
        }
    }
    console.log("part 1");
    console.log(sum);

    // part 2
    const nums = {
        "zero": "0",
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    };

    sum = 0;
    for (var i = 0; i < lines.length; i++) {
        var number = "";
        var j = 0;
        outer: while (j < lines[i].length) {
            if (j >= 2) {
                for (var k = j - 3; (k > (j - 6)) && (k >= 0); k--) {
                    var text = lines[i].substring(k, j);
                    console.log(text);
                    if (nums[text] != undefined) {
                        number += nums[text];
                        break outer;
                    }
                }
            }
            if (/\d/.test(lines[i][j])) {
                number += lines[i][j];
                break outer;
            }
            j++;
        }

        if (number.length == 0) {
            number += lines[i][j];
        }

        j = lines[i].length - 1;
        outer: while (j >= 0) {
            if (j <= lines[i].length - 3) {
                for (var k = j + 3; (k < (j + 6)) && (k <= lines[i].length); k++) {
                    var text = lines[i].substring(j, k);
                    console.log(text);
                    if (nums[text] != undefined) {
                        number += nums[text];
                        break outer;
                    }
                }
            }
            if (/\d/.test(lines[i][j])) {
                number += lines[i][j];
                break outer;
            }
            j--;
        }

        if (number.length < 2) {
            number += lines[i][j];
        }

        console.log(lines[i], number);

        if (/\d\d/.test(number)) {
            sum += parseInt(number);
        }
    }
    console.log("part 2");
    console.log(sum);
}

main();