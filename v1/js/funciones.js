document.getElementById("bot1").onclick = function(){
    var a = document.getElementById("numberA").value;
    var b = document.getElementById("numberB").value;
    console.log('la variable a es: ',a);
    console.log('la variable b es: ',b);
    a = parseInt(a);
    b = parseInt(b);
    console.log('y la suma de variables es: ',a+b);
    var c = a+b;
    document.getElementById("resultado").innerHTML = 'El resultado de la suma es: '+c;
};