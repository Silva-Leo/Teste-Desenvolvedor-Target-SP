// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// 	SP – R$67.836,43
// 	RJ – R$36.678,66
// 	MG – R$29.229,88
// 	ES – R$27.165,48
// 	Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const estados = [
    {estado:"ES", faturamento: 67.83643},
    {estado:"RJ", faturamento: 36.67866},
    {estado:"MG",faturamento: 29.22988},
    {estado:"ES", faturamento: 27.16548},
    {estado:"Outros", faturamento: 19.84953}
]

const soma = estados.map(valor => valor.faturamento).reduce((prev, curr) => prev + curr,0)
// estado * soma / 100 para achar o percentual 
const percentual = estados.map (percentual => (percentual.faturamento * soma/100).toFixed(2) )


for (let indice in  percentual){
    console.log('Estado:', estados[indice].estado, 'Percentual: ', percentual[indice],'%') 
}