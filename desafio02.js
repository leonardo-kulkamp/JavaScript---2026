let cor_semaforo = "verde"; 
let veiculo_emergencia = false;

if (veiculo_emergencia === true) {
    console.log("ALERTA: Ambulância localizada! Todos os sinais estão fechados. PASSAGEM LIVRE.");
} 
else if (cor_semaforo === "verde") {
    console.log("Passagem liberada! Prossiga com cuidado");
} 
else if (cor_semaforo === "amarelo") {
    console.log("Atenção! Abaixe a sua velocidade");
} 
else {
    console.log("Pare imediatamente! Aguarde o sinal ficar verde");
}

