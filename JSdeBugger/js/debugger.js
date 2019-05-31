/*Pegando elementos input do html*/
/*Pegando elemento pelo nome do elemento*/
let inputs = document.querySelectorAll('input');
/*Pegando elemento pela classe*/
let resposta = document.querySelector('.resposta');
/*Pegando elemento pelo ID*/
let button = document.querySelector('#btnSomar');

pegarNum1 = function(){
	return inputs[0].value;
}
pegarNum2 = function(){
	return inputs[1].value;
}

entradasVazias = function(){
	if (pegarNum1() === '' || pegarNum2() === ''){

		return true;
	} else{
		return false;
	}
}

atualizarResposta = function(){
	let num1 = pegarNum1();
	let num2 = pegarNum2();
	let soma = parseInt(num1) + parseInt(num2);
	debugger;
	resposta.textContent = num1 + ' + ' + num2 + '=' + soma;

}

somar = function(){

	if(entradasVazias()){

		resposta.textContent = 'Erro: Preencha os dois campos numéricos.'
	} else {
		atualizarResposta();
	}

}



/*Espera por evento*/
/*Ao clicar a função somar é chamada*/
button.addEventListener('click', somar);