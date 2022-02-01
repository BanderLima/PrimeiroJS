
function contar() {

        //pegando os dados do html pelo Id 
    let pessoaVelha = document.getElementById('pessoaVelha')
    let idadeVelho = document.getElementById('idadeVelho')
    let pessoaNova = document.getElementById('pessoaNova')
    let idadeNovo = document.getElementById('idadeNovo')
    let res = document.getElementById('res')

//  validação, se nao houver nada digitado em nenhum campo...
    if (pessoaVelha.value.length == 0 || idadeVelho.value.length == 0 || pessoaNova.value.length == 0 || idadeNovo.value.length == 0) {
        // window.alert('[ERRO) Faltam dados')
        res.innerHTML = "<br> Impossivel mostrar resultado!! <br>"

  // Se todos os campos forem digitados vai fazer essa condição
    } else {
        res.innerHTML = ' <br> Exibindo Informações: <br>'
        let velho = (pessoaVelha.value)   // aqui tenho que forçar a entrada como string
        let idv = Number(idadeVelho.value) // aqui tenho q falar que é um tipo Number.
        let nova = (pessoaNova.value)
        let idn = Number(idadeNovo.value)
        let calculo = idv - idn  // aqui faço o calculo dos números 

        // nessa parte eu fiz mais uma validação. se o numero informado do mais jovem for maior que o do velho ele mostra essa mensagem,
        // e apaga todo o conteudo digitado....
        if (idv < idn) {
            res.innerHTML = '<br> A idade velha tem que ser maior que a nova, digite um número válido! <br>'
        } else {

            res.innerHTML += `Pessoa mais velha e idade: ${velho}, tem ${idv} anos <br> Pessoa mais Nova e idade: ${nova}, tem ${idn} anos <br> A diferença de idade entre eles é: ${calculo} anos`
        }
        pessoaVelha.value = " "
        idadeNovo.value = " "
        pessoaNova.value = " "
        idadeVelho.value = " "

    }
    
}
