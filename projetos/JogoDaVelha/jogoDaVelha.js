var Jogador = null;
var TabuleiroJogo = [[null,null,null],[null,null,null],[null,null,null]];


function IniciarJogo(){
	document.getElementById('IniciarJogo').style.display = 'none';
	document.getElementById('EscolherXO1').style.display = 'block';
	document.getElementById('EscolherXO2').style.display = 'block';
	
	document.getElementById('CorpoMensagem').innerHTML = "<strong>1º Jogador: 'X' ou 'O' ? ...</strong> Clique na Opção Abaixo";	
	document.getElementById('CorpoMensagem').style.fontSize = '15px';
	document.getElementById('Banner').style.display = 'none';
}
function MudarEstado(elemento){
	var tag = document.getElementById(elemento).style.display;
}

function ReiniciarJogo(){

	TabuleiroJogo = [[null,null,null],[null,null,null],[null,null,null]];
	document.getElementById('p0').innerHTML = "";
	document.getElementById('p1').innerHTML = "";
	document.getElementById('p2').innerHTML = "";
	document.getElementById('p3').innerHTML = "";
	document.getElementById('p4').innerHTML = "";
	document.getElementById('p5').innerHTML = "";
	document.getElementById('p6').innerHTML = "";
	document.getElementById('p7').innerHTML = "";
	document.getElementById('p8').innerHTML = "";
	RetrocederPintura('p0', 'p1', 'p2');
	RetrocederPintura('p3', 'p4', 'p5');
	RetrocederPintura('p6', 'p7', 'p8');
	
	document.getElementById('p0').style.visibility = 'visible';
	document.getElementById('p1').style.visibility = 'visible';
	document.getElementById('p2').style.visibility = 'visible';
	document.getElementById('p3').style.visibility = 'visible';
	document.getElementById('p4').style.visibility = 'visible';
	document.getElementById('p5').style.visibility = 'visible';
	document.getElementById('p6').style.visibility = 'visible';
	document.getElementById('p7').style.visibility = 'visible';
	document.getElementById('p8').style.visibility = 'visible';

	document.getElementById('Resultado').style.display = 'none';
	document.getElementById('Resultado').innerHTML = "Visualizar Resultado Completo do Jogo !";
	document.getElementById('Resultado').style.fontSize = '14px';


	if (VerificarJogo() == undefined){
		document.getElementById('CorpoMensagem').innerHTML = "";
		document.getElementById('CorpoMensagem').style.padding = '0px'
		document.getElementById('CorpoJogo').style.display = 'block';
	}
}
function FirstPlayer(opcao){	
	Jogador = opcao;
	document.getElementById('IniciarJogo').style.display = 'none';
	document.getElementById('ReiniciarJogo').style.display = 'block';
	document.getElementById('EscolherXO1').style.display = 'none';
	document.getElementById('EscolherXO2').style.display = 'none';
	document.getElementById('CorpoJogo').style.display = 'block';

	document.getElementById('CorpoMensagem').innerHTML = "";
	document.getElementById('CorpoMensagem').style.padding = '0px'
}

function TrocarJogador(jogador){
	if (jogador == 'X'){
		Jogador = 'O';
	}
	else{
		Jogador = 'X';
	}
}

function AtualizarMatriz(linha, coluna, id, elemento){
	if (TabuleiroJogo[linha][coluna] == null){
		document.getElementById('CorpoMensagem').innerHTML = ""
		document.getElementById('CorpoMensagem').style.padding = '0px'
		TabuleiroJogo[linha][coluna] = elemento;	
		document.getElementById(id).innerHTML = Jogador;
		
		if (VerificarJogo() == 0 || VerificarJogo() == 1){
			document.getElementById('Resultado').style.display = 'block';
		}

		TrocarJogador(Jogador);
	}
	else{
		document.getElementById('CorpoMensagem').innerHTML = "Jogada inválida !!!"
		document.getElementById('CorpoMensagem').style.padding = '15px'
	}
	
}

function VerificarJogo(){
	
	var p0 = TabuleiroJogo[0][0];
	var p1 = TabuleiroJogo[0][1];
	var p2 = TabuleiroJogo[0][2];
	var p3 = TabuleiroJogo[1][0];
	var p4 = TabuleiroJogo[1][1];
	var p5 = TabuleiroJogo[1][2];
	var p6 = TabuleiroJogo[2][0];
	var p7 = TabuleiroJogo[2][1];
	var p8 = TabuleiroJogo[2][2];

	// Verifica o jogo na Horizontal
	// Linha 1
	var status = (p0 == p1 && p1 == p2 && p0 != null && p1 != null && p2 != null);	
	if (status == 1){
		Pintar('p0', 'p1', 'p2');
		DesabilitaDIV('p3', 'p4', 'p5', 'p6', 'p7', 'p8');
		return 1;
	}
	// Linha 2
	status = (p3 == p4 && p4 == p5 && p3 != null && p4 != null && p5 != null);	
	if (status == true){
		Pintar('p3', 'p4', 'p5');
		DesabilitaDIV('p0', 'p1', 'p2', 'p6', 'p7', 'p8');
		return 1;
	}
	// Linha 3
	status = (p6 == p7 && p7 == p8 && p6 != null && p7 != null && p8 != null);	
	if (status == true){
		Pintar('p6', 'p7', 'p8');
		DesabilitaDIV('p0', 'p1', 'p2', 'p3', 'p4', 'p5');
		return 1;
	}

	// Verifica o Jogona Vertical
	// Coluna 1
	status = (p0 == p3 && p3 == p6 && p0 != null && p3 != null && p6 != null);	
	if (status == true){
		Pintar('p0', 'p3', 'p6');
		DesabilitaDIV('p1', 'p2', 'p4', 'p5', 'p7', 'p8');
		return 1;

	}
	// Coluna 2
	status = (p1 == p4 && p4 == p7 && p1 != null && p4 != null && p7 != null);	
	if (status == true){
		Pintar('p1', 'p4', 'p7');
		DesabilitaDIV('p0', 'p2', 'p3', 'p5', 'p6', 'p8');
		return 1;
	}
	// Coluna 3
	status = (p2 == p5 && p5 == p8 && p2 != null && p5 != null && p8 != null);	
	if (status == true){
		Pintar('p2', 'p5', 'p8');
		DesabilitaDIV('p0', 'p1', 'p3', 'p4', 'p6', 'p7');
		return 1;
	}

	// Verifica o Jogo na Trasnversal
	// Transversal 1 
	status = (p0 == p4 && p4 == p8 && p0 != null && p4 != null && p8 != null);	
	if (status == true){
		Pintar('p0', 'p4', 'p8');
		DesabilitaDIV('p1', 'p2', 'p3', 'p5', 'p6', 'p7');
		return 1;
	}
	// Trasnversal 2
	status = (p2 == p4 && p4 == p6 && p2 != null && p4 != null && p6 != null);	
	if (status == true){
		Pintar('p2', 'p4', 'p6');
		DesabilitaDIV('p0', 'p1', 'p3', 'p5', 'p7', 'p8');
		return 1;
	}
	// Verifica se deu velha 
	if (p0 != null &&
		p1 != null &&
		p2 != null &&
		p3 != null &&
		p4 != null &&
		p5 != null &&
		p6 != null &&
		p7 != null &&
		p8 != null
		){
		//document.getElementById('CorpoMensagem').innerHTML = "Deu Velha";
		//document.getElementById('CorpoMensagem').style.padding = '15px'
		Pintar('p0', 'p1', 'p2');
		Pintar('p3', 'p4', 'p5');
		Pintar('p6', 'p7', 'p8');
		return 0;
	}
}

function Pintar(pos1, pos2, pos3){
	document.getElementById(pos1).style.color = 'red';
	document.getElementById(pos2).style.color = 'red';
	document.getElementById(pos3).style.color = 'red';
}
function RetrocederPintura(id1, id2, id3){
	document.getElementById(id1).style.color = '';
	document.getElementById(id2).style.color = '';
	document.getElementById(id3).style.color = '';
}
function DesabilitaDIV(id1, id2, id3, id4, id5, id6){
	document.getElementById(id1).style.visibility = 'hidden';
	document.getElementById(id2).style.visibility = 'hidden';
	document.getElementById(id3).style.visibility = 'hidden';
	document.getElementById(id4).style.visibility = 'hidden';
	document.getElementById(id5).style.visibility = 'hidden';
	document.getElementById(id6).style.visibility = 'hidden';
}
function Mostrar(){
	var string = ""
	for (var i = 0; i < 3; i++){
		for (var j = 0; j < 3; j++) {
			if (TabuleiroJogo[i][j] == null) {
				string += ".. ";
			}
			else{
				string += TabuleiroJogo[i][j] + " ";
			}

		}
		string += '<br>';
	}
	if (VerificarJogo() == 0) {
		string = "Deu Velha >< "
	}
	document.getElementById('Resultado').innerHTML = string;
	document.getElementById('Resultado').style.fontSize = '32px';

}