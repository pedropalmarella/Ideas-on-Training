function start() {
    var console = document.getElementById("console").value;
    var game = document.getElementById("game").value;
    var card = document.getElementById("card").value;
    var kit = document.getElementById("kit").value;
    var soma = (console*1 + game*1 + kit*1 + card*1);

    alert(
        "ORÇAMENTO CONSOLE NOVO ATUAL: R$" + soma + ",00"

    );
}
