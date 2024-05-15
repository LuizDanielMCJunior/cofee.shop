
/*let pessoa = window.prompt('Olá! Posso saber seu nome?')

window.alert(pessoa +','+ ' é um prazer atender você!')


function mostra(el) {
document.getElementById(el).style.display = "inline-flex";
}
function esconde(el) {
    document.getElementById(el).style.display = "none";
    }*/
/*function mostra(el) {
    document.querySelector(".bebidasq").style.display = "inline-flex";
}*/



/*function preços(el)
{ 
    let preço =document.getElementById(".qtd").value
    console.log(preço)

 
}*/

function toggle(el) {
    var display =document.getElementById(el).style.display;
    if(display =="none") {
        document.getElementById(el).style.display= 'inline-flex';
    }
    else document.getElementById(el).style.display='none';
} 
function toggle2(el) {
    var display =document.querySelector(".carrinho").style.display;
    if(display =="none") {
        document.querySelector(".carrinho").style.display= 'inline-flex';
    }
    else document.querySelector(".carrinho").style.display='none';
} 
function contas(){
    let preço , numero, PreçoN, somad, total
preço = document.querySelector(".pcapuccino").innerText
numero = document.querySelector("#qtd").value
PreçoN = parseInt(preço)
NumeroN =parseInt(numero)
somad =PreçoN*NumeroN
total=  document.querySelector(".totalP").innerHTML+=somad

total+=(somad)
console.log(total);
}

//document.write(total)





/*function apenas(el) {
   var display =document.getElementById(el).style.display;
    if ( pessoa=='luiz daniel') {
    document.getElementById(el).style.display= 'inline-flex';}
    else document.getElementById(el).style.display='none';

}*/

//number.parseInt(n) converter para número inteiro
//number.parseFloat(n) converter para número Real
//number Js decide qual vai ser da parada
