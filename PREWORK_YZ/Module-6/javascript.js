document.getElementById("button1").addEventListener("click", function() {
    var currentHeight = parseInt(document.getElementById("box").style.height);
    var currentWidth = parseInt(document.getElementById("box").style.width);
    console.log('Current Height', currentHeight);
    console.log('Current Width', currentWidth);
    document.getElementById("box").style.height = (currentHeight+20) +"px";
    document.getElementById("box").style.width = (currentWidth+20) +"px";
    console.log('New Height', currentHeight+20);
    console.log('New Height', currentWidth+20);
});

document.getElementById("button2").addEventListener("click", function() {
    document.getElementById("box").style.backgroundColor = "blue";
});

document.getElementById("button3").addEventListener("click", function() {
    document.getElementById("box").style.filter = "saturate(50%)";
});

document.getElementById("button4").addEventListener("click", function() {
    document.getElementById("box").style.outline = "10px dotted black";
});

document.getElementById("button5").addEventListener("click", function() {
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.backgroundColor = "salmon";
    document.getElementById("box").style.filter = "saturate(100%)";
    document.getElementById("box").style.outline = "0px";
});