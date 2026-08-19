const params = new URLSearchParams(window.location.search);
const pacote = params.get("pacote");
if (pacote) console.log("Pacote selecionado:", pacote);
