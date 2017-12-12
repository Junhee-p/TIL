/// <reference path="libraries/p5.d.js" />

var option = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();
}


// function draw() {
//     //background(255);
//     if(mouseX < windowWidth/2)
//     {
//         stroke(255, 0, 0);
//     }
//     else
//     {
//         stroke(0);
//     }
//     if (mouseIsPressed == true) {
//         ellipse(mouseX, mouseY, 30, 30)
//     }

// }

// function draw() {
//     background(102);

//     var grey = map(mouseX, 0, width, 0, 255);
//     fill(grey);
//     ellipse(mouseX, mouseY, 30, 30);
// }

//var bgColor = 0;

// function draw() {
//     background(bgColor);
//     fill(255);
//     //noStroke();

//     ellipse(width / 2, height / 2, 100, 100);
//     var d = dist(width / 2, height / 2, mouseX, mouseY);

//     if (d < 50 && mouseIsPressed) {
//         bgColor = 255;
//     }
//     else {
//         bgColor = 0;
//     }
// }

function draw() {
    background(255);
    var density = map(mouseX, 0, width, 20, 50);

    if (option == 1) {
        for (var x = 50; x <= width - 50; x += density) {
            for (var y = 50; y <= height - 50; y += density) {
                line(x - 5, y - 5, x + 5, y + 5);
                line(x + 5, y - 5, x - 5, y + 5);
            }
        }
    } else if (option == 2) {
        for (var x = 50; x <= width - 50; x += density) {
            for (var y = 50; y <= height - 50; y += density) {
                line(x, y, width / 2, height / 2);
            }
        }
    } else if (option == 3) {
        for (var x = 50; x <= width - 50; x += density) {
            for (var y = 50; y <= height - 50; y += density) {
                ellipse(x, y, 40, 40);
            }
        }
    } else if (option == 4) {
        var count = 0;
        for (var x = 50; x <= width - 50; x += density) {
            for (var y = 50; y <= height - 50; y += density) {
                strokeWeight(count * 0.2);
                ellipse(x, y, 40, 40);
                count++;
            }
        }
        strokeWeight(1);
    } else if (option == 5) {
        for (var x = 50; x <= width - 50; x += density) {
            for (var y = 50; y <= height - 50; y += density) {
                for (var i = 0; i < 16; i += 4) {
                    line(x + i, y, x + i, y + 12);
                }
                line(x, y, x + 12, y + 12);
            }
        }
    }
}

function mousePressed() {
    option++;
    if (option > 5)
        option = 1;
}