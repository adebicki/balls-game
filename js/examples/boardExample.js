/**
 * Created by ad1919 on 2015-11-12.
 */

function init(){
    var fieldCount = 6;
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var fieldWidth = canvas.width / fieldCount;
    var patternImg;

    loadPattern(function() {
        console.log("pattern downloaded callback...");
        drawScene();

    });

    function drawScene(){
        drawBoard();
        drawAllPawns();
        //drawTestBezierPaths();
        //drawTestQuadraticPaths();
    }

    function loadPattern(callback){
        patternImg = new Image();
        patternImg.onload = function() {
            console.log("pattern downloaded");
            callback();
        };
        patternImg.onerror = function() {
            console.log("loading pattern error");
        };
        patternImg.src = "img/token-background.png";
    }

    function drawAllPawns(){
        var i, j, pawnType;
        var pawnRadius = fieldWidth * 0.32;
        var pawnBorder = 5;

        var pawns = [
            [1, 1, 0, 0, 0, 0],
            [0, 2, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 2],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 2],
            [0, 1, 0, 0, 0, 0]
        ];

        var colors = {
            "1": {
                stroke: "#1BA60C",
                fill: "#21D90D"
            },
            "2": {
                stroke: "#A30000",
                fill: "#D60000"
            }
        };

        var firstRowCenter = canvas.height / (2 * fieldCount);
        var firstColumnCenter = canvas.width / (2 * fieldCount);
        var step = canvas.width / fieldCount;
        var rotation = 0;

        for(i = 0; i < fieldCount; i++) {
            for(j = 0; j < fieldCount; j++) {
                pawnType = pawns[i][j];
                if(pawnType === 1 || pawnType === 2){
                    if(pawnType === 1) {



                        //drawRectangleAt({x:0, y:0}, 10, "red");
                        //ctx.rotate(Math.PI / 100);
                    }

                    if(pawnType === 1) {
                        rotation = Math.PI / 4;
                    } else {
                        rotation = 0;
                    }
                    drawPawn({x: firstColumnCenter + (j * step), y: firstRowCenter + (i * step)}, pawnRadius, pawnBorder, colors[pawnType].stroke, colors[pawnType].fill, rotation);
                }
            }
        }
        //test
        //drawPawn({x: 100, y: 100}, pawnRadius, pawnBorder, "#1BA60C", "#21D90D", 0);
    }


    function drawPawn(coordinates, radius, lineWidth, strokeStyle, fillStyle, rotation){

        ctx.save();

        ctx.translate(coordinates.x, coordinates.y);

        // shadow
        var gradShadow = ctx.createRadialGradient(0, 4, 0, 0, 4, radius + 4);
        gradShadow.addColorStop(0, "rgba(0, 0, 0, 0.8)");
        gradShadow.addColorStop(0.8, "rgba(0, 0, 0, 0.6)");
        gradShadow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.beginPath();
        ctx.arc(0, 4, radius + 4, 0, 2*Math.PI, false);
        ctx.fillStyle = gradShadow;
        ctx.fill();

        // pawn
        var gradMain = ctx.createRadialGradient(0, 0, radius / 3, 0, radius / 20, radius);
        gradMain.addColorStop(0, "transparent");
        gradMain.addColorStop(0.6, "transparent");
        gradMain.addColorStop(1, "rgba(0, 0, 0, 0.5)");
        var gradBorder = ctx.createRadialGradient(0, 0, 0, 0, 0, radius + lineWidth / 2);
        gradBorder.addColorStop(0, "rgba(0, 0, 0, 1)");
        gradBorder.addColorStop(0.85, "rgba(0, 0, 0, 0.1)");
        gradBorder.addColorStop(0.9333, strokeStyle);
        gradBorder.addColorStop(1, "rgba(0, 0, 0, 0.1)");

        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2*Math.PI, false);
        ctx.fillStyle = fillStyle;
        ctx.strokeStyle = gradBorder;
        ctx.lineWidth = lineWidth;
        ctx.fill();

        // pattern
        ctx.save();
        ctx.fillStyle = ctx.createPattern(patternImg, "repeat");
        ctx.translate(5, 5);
        ctx.rotate(rotation);
        ctx.fill();
        ctx.restore();

        // gradient
        ctx.fillStyle = gradMain;
        ctx.fill();

        ctx.stroke();

        // shine
        ctx.beginPath();
        ctx.arc(0, - radius/4, radius/2, 0, 2*Math.PI, false);
        var gradShine = ctx.createLinearGradient(0, - radius / 4 - radius / 2, 0, radius / 4);
        gradShine.addColorStop(0, "rgba(255, 255, 255, 0.5)");
        gradShine.addColorStop(0.9, "rgba(255, 255, 255, 0.2)");
        gradShine.addColorStop(1, "rgba(255, 255, 255, 0.1)");
        ctx.fillStyle = gradShine;
        ctx.fill();

        ctx.restore();
    }

    function drawTestBezierPaths(){
        var ctrlP1 = {
            x: 125,
            y: 50
        };
        var ctrlP2 = {
            x: 175,
            y: 150
        };
        var startP = {
            x: 50,
            y: 100
        };
        var endP = {
            x: 250,
            y: 100
        };
        var pointSize = 10;

        ctx.beginPath();
        ctx.strokeStyle = "#000";
        ctx.fillStyle = "#e9e";
        ctx.lineWidth = 6;
        ctx.moveTo(startP.x, startP.y);
        ctx.bezierCurveTo(ctrlP1.x, ctrlP1.y, ctrlP2.x, ctrlP2.y, endP.x, endP.y);
        ctx.stroke();

        drawRectangleAt(ctrlP1, pointSize, "red");
        drawRectangleAt(ctrlP2, pointSize, "red");
        drawRectangleAt(startP, pointSize, "blue");
        drawRectangleAt(endP, pointSize, "blue");
    }

    function drawTestQuadraticPaths(){
        var ctrlP1 = {
            x: 200,
            y: 250
        };
        var startP = {
            x: 50,
            y: 200
        };
        var endP = {
            x: 250,
            y: 200
        };
        var pointSize = 10;

        ctx.beginPath();
        ctx.strokeStyle = "#000";
        ctx.fillStyle = "#e9a";
        ctx.lineWidth = 6;
        ctx.moveTo(startP.x, startP.y);
        ctx.quadraticCurveTo(ctrlP1.x, ctrlP1.y, endP.x, endP.y);
        ctx.stroke();

        drawRectangleAt(ctrlP1, pointSize, "red");
        drawRectangleAt(startP, pointSize, "blue");
        drawRectangleAt(endP, pointSize, "blue");
    }

    function drawRectangleAt(startPoint, sideLength, fillStyle){
        ctx.fillStyle = fillStyle || "red";
        //ctx.fillRect(startPoint.x, startPoint.y, startPoint.x + sideLength, startPoint.y + sideLength);
        ctx.fillRect(startPoint.x - sideLength/2, startPoint.y - sideLength/2, sideLength, sideLength);
    }

    function drawBoard(){
        //wypełnienie całości
        ctx.fillStyle = "#e8c061";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        drawGrid(4 * fieldCount, 1, "rgba(238, 153, 0, 0.2)");
        drawGrid(2 * fieldCount, 1, "rgba(238, 153, 0, 0.3)");
        drawGrid(fieldCount, 1, "rgba(238, 153, 0, 1)");
    }

    function drawGrid(fields, lineWidth, strokeStyle){
        var step = canvas.width / fields;
        var i;
        var aux;
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = strokeStyle;
        ctx.beginPath();
        for(i = 0; i < fields - 1; i++) {
            aux = step * (i + 1);
            //console.log(aux);
            if(aux % 1 === 0) { aux += 0.5;}
            ctx.moveTo(aux, 0);
            ctx.lineTo(aux, canvas.height);
            ctx.moveTo(0, aux);
            ctx.lineTo(canvas.width, aux);
        }
        ctx.stroke();
    }

}
