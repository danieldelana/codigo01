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

for(a of itens2){
    b=Math.random()*a
    console.log(Math.round(b));
}
//com math.round sendo usado depois de se gerar uma nova variavel... sucesso