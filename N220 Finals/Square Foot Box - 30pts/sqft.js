function boxCalc() {
    var width = document.getElementById('wInput').value;
    var height = document.getElementById('hInput').value;

    let sqft = width*height;
    document.getElementById('input').innerText="Width: "+width+" feet. Height: "+height+" feet.";
    document.getElementById('output').innerText="Square footage: "+sqft+" feet squared.";

    document.querySelectorAll('div.square').forEach(item=>item.remove());
    var square = document.createElement('div');
        square.className='square'
        square.style.width =width*10 +'px';
        square.style.height =height*10+'px';
        document.body.appendChild(square);
}
