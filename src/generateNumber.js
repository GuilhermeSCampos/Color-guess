 //functions get in https://code.tutsplus.com/tutorials/how-to-code-a-random-color-generator-in-javascript--cms-39861

 function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}
//functions get in https://code.tutsplus.com/tutorials/how-to-code-a-random-color-generator-in-javascript--cms-39861
  function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}
//functions get in https://code.tutsplus.com/tutorials/how-to-code-a-random-color-generator-in-javascript--cms-39861
  function randomHexColor() {
    let [r,g,b] = randomRgbColor();
 
    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');
 
    return "#" + hr + hg + hb;
}
function generateColor() {
    const a = randomHexColor()
    const b = randomHexColor()
    const c = randomHexColor()
    return [a,b,c];
}

export default generateColor;