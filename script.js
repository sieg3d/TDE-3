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
// efetuada e um código que identifique se o comprador é um cliente comum
// (1), funcionário (2) ou vip (3).`)

// valorTotal = +(prompt(`Qual o valor total da compra?`))
// promocao = prompt(`Informe se: \n1 - Cliente Comum\n2 - Funcionário\n3 - Cliente VIP`)

// switch (promocao) {
//     case '1':
//         document.write(`<p>Identificado Cliente Comum.<br>O valor final é R$${valorTotal}</p>`)
//         break

//     case '2':
//         valorTotal = (valorTotal*0.9)
//         document.write(`<p>Identificado Funcionário.<br>O valor final é R$${valorTotal.toFixed(2)}</p>`)
//         break

//     case '3':
//         valorTotal = (valorTotal*0.95)
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
//         }
//         break

//         default:
//             (`Opção inválida.`)
// }


// document.write(`4. Crie um programa usando switch que leia o conceito de um aluno na
// disciplina Desenv Web 2 e imprima seu significado, de acordo com a tabela
// abaixo. Caso seja informado um conceito inexistente, deve ser exibida uma
// mensagem de erro. Conceito Significado:<br>
// A Excelente<br>
// B Ótimo<br>
// C Bom<br>
// D Regular<br>
// E Ruim<br>
// F Nos vemos de novo ano que vem...<br>`)

// conceito = prompt(`Digite o conceito do aluno:`)
// switch (conceito) {

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

document.write(`5. Dada uma letra, usando switch, escreva na tela se essa letra é uma Vogal
ou Consoante (Considerar apenas letras minúsculas).`)

letra = prompt(`Digite uma letra para saber se é Vogal ou Consoante:`)

switch (letra) {
    case 'a':
        document.write(`<br>Vogal`)
        break
    case 'e':
        document.write(`<br><br>Vogal`)
        break
    case 'i':
        document.write(`<br><br>Vogal`)
        break
    case 'o':
        document.write(`<br><br>Vogal`)
        break
    case 'u':
        document.write(`<br><br>Vogal`)
        break
    case 'b':
        document.write(`Consoante`)
        break
    case 'c':
        document.write(`Consoante`)
        break
    case 'd':
        document.write(`Consoante`)
        break
    case 'e':
        document.write(`Consoante`)
        break
    case 'f':
        document.write(`Consoante`)
        break
    case 'g':
        document.write(`Consoante`)
        break
    case 'h':
        document.write(`Consoante`)
        break
    case 'j':
        document.write(`Consoante`)
        break
    case 'k':
        document.write(`Consoante`)
        break
    case 'l':
        document.write(`Consoante`)
        break
    case 'm':
        document.write(`Consoante`)
        break
    case 'n':
        document.write(`Consoante`)
        break
    case 'p':
        document.write(`Consoante`)
        break
    case 'q':
        document.write(`Consoante`)
        break
    case 'r':
        document.write(`Consoante`)
        break
    case 's':
        document.write(`Consoante`)
        break
    case 't':
        document.write(`Consoante`)
        break
    case 'v':
        document.write(`Consoante`)
        break
    case 'w':
        document.write(`Consoante`)
        break
    case 'x':
        document.write(`Consoante`)
        break
    case 'y':
        document.write(`Consoante`)
        break
    case 'z':
        document.write(`Consoante`)
        break

    default:

        document.write(`Opção inválida.`)
}