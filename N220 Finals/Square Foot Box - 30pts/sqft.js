function boxCalc() {
    var width = document.getElementById('wInput').value;
    var height = document.getElementById('hInput').value;

    let sqft = width*height;
    document.getElementById('input').innerText="Width: "+width+" feet. Height: "+height+" feet.";
    document.getElementById('output').innerText="Square footage: "+sqft+" feet squared.";

    square(width*10, height*10);
}