var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function (event) {

	event.preventDefault();

	var campoNome = document.querySelector("#campo-nome");
	var campoPeso = document.querySelector("#campo-peso");
	var campoAltura = document.querySelector("#campo-altura");
	var campoSexo = document.querySelector("#campo-sexo");

	
	if (campoNome.value.length == "" ){
		alert("Preencha o campo nome!");
		document.getElementById("campo-nome").focus();
	}   else if(campoPeso.value.length == ""){
		alert("Preencha o campo peso!");
		document.getElementById("campo-peso").focus();
	}	else if(campoAltura.value.length == ""){
		alert("Preencha o campo altura!");
		document.getElementById("campo-altura").focus();
	}
		else if(campoSexo.value.length == ""){
		alert("Preencha o campo sexo!");
		document.getElementById("campo-sexo").focus();
	}

	else {
		
		var novoPaciente = "<tr class='paciente'>" +
						"<td class='info-nome'>" + campoNome.value + "</td>" +
						"<td class='info-peso'>"+ campoPeso.value +"</td>" +
						"<td class='info-altura'>"+ campoAltura.value +"</td>" +
						"<td class='info-sexo'>"+ campoSexo.value +"</td>" +
						"<td class='info-imc'></td>" +
						"<td class='info-adicional'></td>" +
						   "</tr>";

		var tabela = document.querySelector("table");
		tabela.innerHTML = tabela.innerHTML + novoPaciente;

		campoNome.value = "";
		campoPeso.value = "";
		campoAltura.value = "";
		campoSexo.value = "";
	}

});


