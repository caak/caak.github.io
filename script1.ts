window.onload = function start() {

    var scriptVar = 'my hidden string!';
    console.log(scriptVar);

    var p = document.createElement('p');
    var t = document.createTextNode(scriptVar);
    p.appendChild(t);

    document.body.appendChild(p);
}