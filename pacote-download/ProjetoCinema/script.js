function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function consulta() {
    for (var i = 0; i < filmes.length; i++) {
        mostra(filmes[i] + " às " + horarios[i] + "hrs");
    }
}

/*function informaIngresso(){
    var filmes = document.getElementById("filmes");
    var poltrona = document.getElementById("poltrona")

    for(var i = 1; i <= 40; i++){
        poltrona.innerHTML += '<option value = "' + i + '" >' + i + '</option>';
    }
}*/

function informaIngresso() {
    var ingresso = prompt("Você paga meia entrada? s/n");
    if (ingresso == 's') {
        precoIngresso = precoIngresso / 2;
        alert("O valor do ingresso é " + precoIngresso + " R$");
    }
    else if (ingresso == 'n') {
        alert("O valor do ingresso é " + precoIngresso + " R$");
    } else {
        alert("Opção INVÁLIDA! Digite s ou n");
    }

}

function preco() {
    var ingresso = prompt("Você paga meia entrada? s/n");
    if (ingresso == 's') {
        precoIngresso = precoIngresso / 2;
    }
    else if (ingresso == 'n') {
        precoIngresso = precoIngresso;
    } else {
        alert("Opção INVÁLIDA! Digite s ou n");
        preco();
    }
}

function compraIngresso() {

    var selectFilme = document.getElementById('id_filmes');
    var filme = selectFilme.options[selectFilme.selectedIndex].value;

    var selectHora = document.getElementById('id_hora');
    var hora = selectHora.options[selectHora.selectedIndex].value;

    var selectPoltrona = document.getElementById('id_poltrona');
    var poltrona = selectPoltrona.options[selectPoltrona.selectedIndex].value;

    var inputData = document.getElementById('datemin');
    var data = inputData.value;

    var valorIngresso = document.getElementsByName("ckIngresso");
    
    if(valorIngresso[0].checked) {
        valorIngresso = "Meia - R$7,00";
    } else{
        valorIngresso = "Inteira - R$14,00";
    }

    var imprime = document.getElementById('imprime');

    imprime.style.display = 'block';
    imprime.innerHTML = "-------Compra do Ingresso Realizada!-------<br><br>" + "Filme escolhido: " + filme + "<br>"+ "Horário da sessão: " + hora + "<br>" + "Assento: " + poltrona + "<br>"+ "Data da sessão: " + data + "<br>"+ "Modalidade do Ingresso: " + valorIngresso;


}

var filmes = ['Moana', 'A Bruxa', 'Velozes e Furiosos', 'Kong'];
var horarios = ["12:30", "15:00", "18:00", "20:40"];
var precoIngresso = 14;