var itens={
    a1:'copo', a2: 'mesa', a3: 'gelo',
    a4:'leite', a5: 'terra', a6: 'botão'
}
console.log(Math.random()*itens);
// resultado sem retorno
var itens2=[
    10,20,11,21,12,22,13,23
]
console.log(Number(Math.random()*itens2));
// sem retorno esperado...

// for(a of itens2){
//     b=Math.random()*a
//     console.log(Math.round(b));
// }
//com math.round sendo usado depois de se gerar uma nova variavel... sucesso
    var x=999
    for(i=1; i<6;i++){             
      a=Math.round(Math.random()*x)
      b=Math.round(Math.random()*x)
      if(b>100) {b=Math.round(Math.random()*100)
      console.log(b)}
        else if(b<100){b=Math.round(Math.random()*x)
        console.log(b)}
        else if(a>100) {a=NaN
        console.log(a)};
    }
