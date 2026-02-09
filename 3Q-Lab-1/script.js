function solveForTimeForBodyToOrbit() {
    const PI = 3.1415;
    const G = 6.6743e-11;
    let radius = parseFloat(document.getElementById("radius").value);
    let mass = parseFloat(document.getElementById("mass").value);

    let result = Math.sqrt ((4*Math.pow(PI,2)*Math.pow(radius,3))/(G*mass));
    let output = `The time it would take for a celestial body to orbit around a bigger celestial body is ${result}.`;
    
    document.getElementById("result").innerText = output;
}