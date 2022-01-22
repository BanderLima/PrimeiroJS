
function contar() {

    let pessoaVelha = document.getElementById('pessoaVelha')
    let idadeVelho = document.getElementById('idadeVelho')
    let pessoaNova = document.getElementById('pessoaNova')
    let idadeNovo = document.getElementById('idadeNovo')
    let res = document.getElementById('res')

    if (pessoaVelha.value.length == 0 || idadeVelho.value.length == 0 || pessoaNova.value.length == 0 || idadeNovo.value.length == 0) {
        // window.alert('[ERRO) Faltam dados')
        res.innerHTML = "<br> Impossivel mostrar resultado!! <br>"

    } else {
        res.innerHTML = ' <br> Exibindo Informações: <br>'
        let velho = (pessoaVelha.value)
        let idv = Number(idadeVelho.value)
        let nova = (pessoaNova.value)
        let idn = Number(idadeNovo.value)
        let calculo = idv - idn

        if (idv < idn) {
            res.innerHTML = '<br> A idade velha tem que ser maior que a nova, digite um número válido! <br>'
        } else {

            res.innerHTML += `Pessoa mais velha e idade: ${velho}, tem ${idv} anos <br> Pessoa mais Nova e idade: ${nova}, tem ${idn} anos <br> A diferença de idade entre eles é: ${calculo} anos`
        }

    }
}
