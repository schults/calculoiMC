function montaPaciente (trPacientes) {
	percorreArray(trPacientes, function (pacienteTr) {

		var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
		var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
		var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
		var tdSexo = pacienteTr.getElementsByClassName("info-sexo")[0];
		var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
		var tdInfo = pacienteTr.getElementsByClassName("info-adicional")[0];
		
	

		var paciente = {nome : tdNome.textContent, 
			peso : tdPeso.textContent, 
			altura : tdAltura.textContent, 
			sexo : tdSexo.textContent,
			imc : tdImc, 
			info : tdInfo,
			pegaImc : function () {
			if(this.altura != 0) {
				this.imc.textContent = (this.peso / (this.altura * this.altura)).toFixed(2);	
				if(this.imc.textContent > 16 && this.imc.textContent < 16.9){
					$(this.info).html("Muito abaixo do peso");
				} else if(this.imc.textContent > 17 && this.imc.textContent < 18.4){
					$(this.info).html("Abaixo do peso");
				} else if(this.imc.textContent > 18.5 && this.imc.textContent < 24.9){
					$(this.info).html("Peso Normal");
				} else if(this.imc.textContent > 25 && this.imc.textContent < 29.9){
					$(this.info).html("Acima do peso");
				} else if(this.imc.textContent > 30 && this.imc.textContent < 34.9){
					$(this.info).html("Obesidade Grau I");
				} else if(this.imc.textContent > 35 && this.imc.textContent < 40){
					$(this.info).html("Obesidade Grau II");
				} else if(this.imc.textContent > 40){
					$(this.info).html("Obesidade Grau III");
				}
			} 
			else {
				console.log("Erro! Não é possivel calcular o imc pois a altura informada é 0")
			}
		}};

	
		paciente.pegaImc();
	});
}