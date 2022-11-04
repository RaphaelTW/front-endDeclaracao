function validar() {

    //[Remetente]//
    var cpfCnpj = document.getElementById('cpfcnpj').value;
    var nome = document.getElementById('razaosocial').value;
    var cep = document.getElementById('cep').value;
    var endereco = document.getElementById('endereco').value;
    var numero = document.getElementById('numero').value;
    var complemento = document.getElementById('complemento').value;
    var cidade = document.getElementById('municipio').value;
    var estado = document.getElementById('uf').value;

    //[Destinatário]//
    var cpfCnpj1 = document.getElementById('cpfcnpj1').value;
    var nome1 = document.getElementById('razaosocial1').value;
    var cep1 = document.getElementById('cep1').value;
    var endereco1 = document.getElementById('endereco1').value;
    var numero1 = document.getElementById('numero1').value;
    var complemento1 = document.getElementById('complemento1').value;
    var cidade1 = document.getElementById('municipio1').value;
    var estado1 = document.getElementById('uf1').value;

    if (cpfCnpj == "") {
        document.getElementById('erro-cpfCnpj').innerHTML = "Informe um CPF ou CNPJ Valido!";
        document.getElementById('cpfCnpj').focus();
    } else {
        document.getElementById('erro-cpfCnpj').innerHTML = "";
    }

    if (nome == "") {
        document.getElementById('erro-nome').innerHTML = "Informe o seu nome!";
        document.getElementById('nome').focus();
    } else {
        document.getElementById('erro-nome').innerHTML = "";
    }

    if (cep == "") {
        document.getElementById('erro-cep').innerHTML = "Informe um CEP Valido!";
        document.getElementById('cep').focus();
    } else {
        document.getElementById('erro-cep').innerHTML = "";
    }

    if (endereco == "") {
        document.getElementById('erro-endereco').innerHTML = "Informe um endereço!";
        document.getElementById('endereco').focus();
    } else {
        document.getElementById('erro-endereco').innerHTML = "";
    }

    if (numero == "") {
        document.getElementById('erro-numero').innerHTML = "Informe o número!";
        document.getElementById('numero').focus();
    } else {
        document.getElementById('erro-numero').innerHTML = "";
    }

    if (complemento == "") {
        document.getElementById('erro-complemento').innerHTML = "Qual é o complemento!";
        document.getElementById('complemento').focus();
    } else {
        document.getElementById('erro-complemento').innerHTML = "";
    }

    if (cidade == "") {
        document.getElementById('erro-cidade').innerHTML = "Informe qual é a cidade!";
        document.getElementById('cidade').focus();
    } else {
        document.getElementById('erro-cidade').innerHTML = "";
    }

    if (estado == "") {
        document.getElementById('erro-estado').innerHTML = "Informe qual é o estado!";
        document.getElementById('estado').focus();
    } else {
        document.getElementById('erro-estado').innerHTML = "";
    }
}