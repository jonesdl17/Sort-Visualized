var canvasWidth = 1500;
var canvasHeight = 700;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var numOfPieces = 10;
var rate = 50;
var x = 0;

var pieces = [];

function start()
{
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    randomizeCanvas();
}

function printPieces()
{
    clearCanvas();
    for(var i = 0; i < numOfPieces; i++)
    {
        ctx.fillStyle = "grey";
        ctx.fillRect(i * (canvasWidth/numOfPieces), canvasHeight - pieces[i], canvas.width/numOfPieces, pieces[i]);
    }
}

function bubbleSort()
{
    inter = window.setInterval(function() {bubble();}, rate);
}

function bubble()
{
    var i = 0;
    var j = pieces.length - 1;
    while(j >= 0)
    {
        while(i < j)
        {
            if(pieces[i] > pieces[i + 1])
            {
                swap(i, i + 1);
                printPieces();
            } 
            i++;
        }
        j--;
    }
    printPieces();
    if(isSorted())
    {  
        window.clearInterval(inter);
    }
}

function selectionSort()
{
    inter = window.setInterval(function() {select();}, rate);
}

function select()
{
    var i = x;
    x++;
    var j = i + 1;
    while(i < pieces.length - 1)
    {
        var min = i;
        while(j < pieces.length)
        {
            if(pieces[j] < pieces[min])
            {
                min = j;
            }
            j++;
        }
        swap(i, min);
        printPieces();
        i++;
    }
    printPieces();
    if(isSorted())
    {  
        window.clearInterval(inter);
        x = 0;
    }
}

function isSorted()
{
    var sorted = true;
    for(var i = 0; i < pieces.length - 1; i++)
    {
        if(pieces[i] > pieces[i + 1])
        {
            sorted = false;
        }
    }
    return sorted;
}

function swap(x, y)
{
    var temp = pieces[x];
    pieces[x] = pieces[y];
    pieces[y] = temp;
}

function clearCanvas()
{
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}

function randomizeCanvas()
{
    numOfPieces = document.getElementById("numberOfElements").value;
    rate = document.getElementById("rate").value;
    for(var i = 0; i < numOfPieces; i++)
    {
        //make the piece a random heigth between 10 and 1 less than the height of the canvas.
        pieces[i] = Math.floor(Math.random() * (canvasHeight - 1)) + 10; 
    }
    printPieces();
}

start();
printPieces();