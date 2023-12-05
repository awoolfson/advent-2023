function main2() {
    const fs = require('node:fs');
    const data = fs.readFileSync('day2/input.txt', 'utf8');
    const lines = data.split('\n')

    // part 1
    const maxReds = 12;
    const maxGreens = 13;
    const maxBlues = 14;

    const limits = {
        "red": maxReds,
        "green": maxGreens,
        "blue": maxBlues,
        "": 0 
    };

    var sum = 0;

    for (var i = 0; i < lines.length; i++) {
        const game = lines[i].split(":")[1].trim();
        var gameArray = game.split("; ");
        const id = parseInt(lines[i].split(" ")[1].slice(0, -1));
        sum += id;

        loop: for (var j = 0; j < gameArray.length; j++) {
            gameArray[j] = gameArray[j].split(", ");

            for (var k = 0; k < gameArray[j].length; k++) {
                const draw = gameArray[j][k];
                var color = "";

                switch (draw.slice(-1)) {
                    case "d":
                        color = "red";
                        break;
                    case "n":
                        color = "green";
                        break;
                    case "e":
                        color = "blue";
                        break;
                }

                const amount = parseInt(draw.split(" ")[0]);

                if (amount > limits[color]) {
                    // remove last character
                    sum -= id;
                    break loop;
                }
            }
        }
    }
    console.log("part 1");
    console.log(sum);
}

main2();