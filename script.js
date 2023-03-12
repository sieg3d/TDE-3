// document.write(`1. Faça um programa usando switch que leia dois valores do usuário e a
// operação que ele deseja executar (Operações: soma, subtração, divisão,
// multiplicação). Execute a operação desejada e imprima na tela.`)

// num1 = +(prompt(`Digite o primeiro número:`))
// operacao = prompt(`Que operação deseja realizar?\n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão`)
// num2 = +(prompt(`Digite o segundo número:`))

// switch (operacao) {
//     case '1':
//         document.write(`<p>A soma dos valores ${num1} e ${num2} é ${num1 + num2}</p>`)
//         break

//     case '2':
//         document.write(`<p>A subtração do valor ${num1} por ${num2} é ${num1 - num2}</p>`)
//         break

//     case '3':
//         document.write(`<p>A multiplicação dos valores ${num1} e ${num2} é ${num1 * num2}</p>`)
//         break

//     case '4':
//         document.write(`<p>A divisão do valor ${num1} por ${num2} é ${num1 - num2}</p>`)
//         break

//     default:
//         document.write(`<p>Opção inválida</p>`)


// }

// document.write(`2. Uma loja fornece 10% de desconto para funcionários e 5% de desconto para
// clientes vips. Faça um programa usando switch que calcule o valor total a
// ser pago por uma pessoa. O programa deverá ler o valor total da compra
// efetuada e um código que identifique se o comprador é um cliente comum (1), funcionário (2) ou vip (3).`)

// valorTotal = +(prompt(`Qual o valor total da compra?`))
// promocao = prompt(`Informe se: \n1 - Cliente Comum\n2 - Funcionário\n3 - Cliente VIP`)

// switch (promocao) {
//     case '1':
//         document.write(`<p>Identificado Cliente Comum.<br>O valor final é R$${valorTotal}</p>`)
//         break

//     case '2':
//         valorTotal = (valorTotal * 0.9)
//         document.write(`<p>Identificado Funcionário.<br>O valor final é R$${valorTotal.toFixed(2)}</p>`)
//         break

//     case '3':
//         valorTotal = (valorTotal * 0.95)
//         document.write(`<p>Identificado Cliente VIP.<br>O valor final é R$${valorTotal.toFixed(2)}</p>`)
//         break

//     default:
//         document.write(`<p>Opção incorreta</p>`)

// }

// document.write(`3. Dado o valor do produto e a forma de pagamento.
// 1= à vista;
// 2= à prazo.
// Se o produto for pago à vista aplique um desconto de 10% antes de mostrar
// o valor final, senão informe o mesmo valor do produto.(usando switch)`)



// valorProduto = +(prompt(`Qual o valor total da compra?`))
// formaPagamento = prompt(`Qual a forma de pagamento?\n1 - À vista\n2 - À prazo`)

// switch (formaPagamento) {
//     case '1':
//         valorProduto = valorProduto * 0.90
//         document.write(`Para pagamento à vista é aplicado 10% de desconto.<br>O valor final é R$${valorProduto}`)
//         break

//     case '2':
//         parcelas = (prompt(`Parcelamos em até 3x.\nGostaria de parcelar em quantas vezes?`))
//         switch (parcelas) {
//             case '2':
//                 valorProduto = valorProduto / 2
//                 document.write(`Sua forma de pagamento será em 2x de R$${valorProduto}.`)
//                 break

//             case '3':
//                 valorProduto = valorProduto / 3
//                 document.write(`Sua forma de pagamento será em 3x de R$${valorProduto}.`)
//                 break

//             default:
//                 alert(`Parcelamos em no máximo 3x`)

//         }
//         break

//     default:
//         alert(`Opção inválida.`)

// }


// document.write(`4. Crie um programa usando switch que leia o conceito de um aluno na
// disciplina Desenv Web 2 e imprima seu significado, de acordo com a tabela
// abaixo. Caso seja informado um conceito inexistente, deve ser exibida uma
// mensagem de erro. Conceito Significado:<br>
// A - Excelente<br>
// B - Ótimo<br>
// C - Bom<br>
// D - Regular<br>
// E - Ruim<br>
// F - Nos vemos de novo ano que vem...<br>`)

// conceito = prompt(`Digite o conceito do aluno:`)
// switch (conceito.toUpperCase()) {

//     case 'A':
//         document.write(`<br>Excelente!`)
//         break

//     case 'B':
//         document.write(`<br>Ótimo!`)
//         break

//     case 'C':
//         document.write(`<br>Bom!`)
//         break

//     case 'D':
//         document.write(`<br>Regular!`)
//         break

//     case 'E':
//         document.write(`<br>Ruim!`)
//         break

//     case 'F':
//         document.write(`<br>Nos vemos de novo ano que vem...!`)
//         break

//     default:
//         document.write(`<br>Opção inválida.`)
// }

// document.write(`5. Dada uma letra, usando switch, escreva na tela se essa letra é uma Vogal
// ou Consoante (Considerar apenas letras minúsculas).`)

// letra = prompt(`Digite uma letra para saber se é Vogal ou Consoante:`)

// switch (letra.toLowerCase()) {
//     case 'a':
//         document.write(`<br>Vogal`)
//         break
//     case 'e':
//         document.write(`<br><br>Vogal`)
//         break
//     case 'i':
//         document.write(`<br><br>Vogal`)
//         break
//     case 'o':
//         document.write(`<br><br>Vogal`)
//         break
//     case 'u':
//         document.write(`<br><br>Vogal`)
//         break
//     case 'b':
//         document.write(`Consoante`)
//         break
//     case 'c':
//         document.write(`Consoante`)
//         break
//     case 'd':
//         document.write(`Consoante`)
//         break
//     case 'e':
//         document.write(`Consoante`)
//         break
//     case 'f':
//         document.write(`Consoante`)
//         break
//     case 'g':
//         document.write(`Consoante`)
//         break
//     case 'h':
//         document.write(`Consoante`)
//         break
//     case 'j':
//         document.write(`Consoante`)
//         break
//     case 'k':
//         document.write(`Consoante`)
//         break
//     case 'l':
//         document.write(`Consoante`)
//         break
//     case 'm':
//         document.write(`Consoante`)
//         break
//     case 'n':
//         document.write(`Consoante`)
//         break
//     case 'p':
//         document.write(`Consoante`)
//         break
//     case 'q':
//         document.write(`Consoante`)
//         break
//     case 'r':
//         document.write(`Consoante`)
//         break
//     case 's':
//         document.write(`Consoante`)
//         break
//     case 't':
//         document.write(`Consoante`)
//         break
//     case 'v':
//         document.write(`Consoante`)
//         break
//     case 'w':
//         document.write(`Consoante`)
//         break
//     case 'x':
//         document.write(`Consoante`)
//         break
//     case 'y':
//         document.write(`Consoante`)
//         break
//     case 'z':
//         document.write(`Consoante`)
//         break

//     default:

//         document.write(`Opção inválida.`)
// }

// document.write(`6. Crie um programa usando o for que leia uma lista. Mostre no console
// apenas os números pares. Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];<br><br>`)

// lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (i = 1; i < 10; i++) {
//     if (lista[i] % 2 == 0) {
//         console.log(`${lista[i]}`)
//     }
// }

// document.write(`7. Faça um programa usando o for que peça uma nota, entre zero e dez.
// Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.`)

// for (nota = prompt(`Digite a nota do aluno: `); nota < 0 || nota > 10;) {
//     if (nota < 0 || nota > 10) {
//         nota = parseFloat(prompt(`Valor inválido. Digite novamente:`))
//     }
// }

// document.write(`<p>A nota digitada foi: ${nota}</p>`)

// document.write(`8. Faça um programa usando o for que leia um nome de usuário e a sua senha
// e não aceite a senha igual ao nome do usuário, mostrando uma mensagem
// de erro e voltando a pedir as informações.`)


// senha = 0
// for (usuario = 0; usuario === senha;) {
//     usuario = prompt(`Digite o usuário:`)
//     senha = prompt(`Digite a senha:`)
//     if (usuario === senha) {
//         alert(`Usuário e senha não podem ser iguais`)
//     }
// }

// document.write(`<p>Usuário criado: ${usuario}<br>Senha atual: ${senha}</p>`)

// document.write(`9. Faça um programa usando o for que, dado um conjunto de N números,
// determine o menor valor, o maior valor e a soma dos valores.`)

// var n = [21, 43, 56, 78, 75]
// var soma = 0, menor = 0, maior = 0
// for (i = 0; i < 5; i++) {
//     soma += n[i]

//     if (n[i] < menor || menor == 0) {
//         menor = n[i]
//     }
//     if (n[i] > maior) {
//         maior = n[i]
//     }
// }
// document.write(`<br>A soma do conjunto de numeros N é: ${soma}`)
// document.write(`<br>O menor valor é ${menor}`)
// document.write(`<br>O maior valor é ${maior}`)

// document.write(`10.Faça um programa usando o for que calcule o número médio de alunos por
// turma. Para isto, peça a quantidade de turmas e a quantidade de alunos para
// cada turma. As turmas não podem ter mais de 40 alunos.`)

// totalAlunos = 0
// qtdAlunos = 0
// qtdTurmas = parseInt(prompt(`Insira a quantidade de turmas: `))
// console.log(qtdTurmas)
// for (var i = 0; i < qtdTurmas; i++) {
//     do {
//         qtdAlunos = parseInt(prompt(`Insira a quantidade de alunos da turma: `))
//         if (qtdAlunos > 40) {
//             alert(`A quantidade de alunos por turma deve ser menor que 40`)
//         }
//     } while (qtdAlunos > 40)
//     totalAlunos += qtdAlunos
// }

// mediaAlunos = totalAlunos / qtdTurmas
// console.log(mediaAlunos)

// document.write(`11. Criar uma função para calcular a porcentagem de um número.`)
// function percent(numero, porcentagem) {
//     return (numero * porcentagem) / 100
// }
// numero = +(prompt(`Insira o numero que deseja a calcular a porcentagem: `))
// porcentagem = +(prompt(`Insira a porcentagem a ser calculada: `))
// resultado = percent(numero, porcentagem)
// document.write(`O calulo da porcentagem de ${numero} por ${porcentagem}% é ${resultado}`)

// document.write(`12.Criar uma função que converta a temperatura de Celsius para Fahrenheit.`)

// function convertTemp(c) {
//     return (c * 1.8) + 32
// }

// c = parseFloat(prompt(`Qual a temperatura em Celsius deseja converter para Fahrenheit?`))
// f = convertTemp(c)

// document.write(`<p>A conversão de ${c}° Celsius em Fahrenheit é ${f}°.</p>`)

// document.write(`14.Crie uma função que calcule a raiz quadrada de um número e retorne um
// número inteiro como resultado.`)

// function raizQuadrada(numero) {
//     raiz = Math.sqrt(numero)
//     inteiro = Math.round(raiz)
//     return inteiro
// }

// numero = +(prompt(`Digite o numero que deseja saber a raiz quadrada: `))
// raizInteira = raizQuadrada(numero)

// document.write(`<br>${raizInteira}`)


// document.write(`15.Crie uma função que receba dois números e retorne se o primeiro é maior ou
// igual ao segundo.`)

// function maiorNum(num1, num2) {
//     if (num1 >= num2) {
//         return true
//     } else {
//         return false
//     }

// }

// num1 = +(prompt(`Digite o primeiro numero: `))
// num2 = +(prompt(`Digite o segundo numero: `))

// resultado = maiorNum(num1, num2)

// document.write(`<br>${resultado}`)