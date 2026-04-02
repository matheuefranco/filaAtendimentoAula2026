
const minhaFila = new Fila(5);

function adicionarElemento() {
  const nome = document.getElementById("txtnovoNome");
  const cpf = document.getElementById("txtnovoCPF");
  const data = obterDataAtual();
  const hora = obterHoraAtual();
  const novoAtendimento = 
    new Atendimento(nome.value,cpf.value,data,hora);
  if (minhaFila.enqueue(novoAtendimento)) {
    mostrarFila(); // mostrar a fila
    nome.value=""; // clear input
    cpf.value = "";
    nome.focus();
  } else {
    alert("Fila cheia!");
  }
}

  function mostrarFila(){
    const filaElemento = document.getElementById("listFila");
    filaElemento.innerHTML="";
    for(let item of minhaFila){
      const listItem = document.createElement("li");
      listItem.textContent = item;
      filaElemento.appendChild(listItem);
    }
  }

    function removerElemento(){
      let removido = minhaFila.dequeue();
      if(removido===null)
        alert("Fila vazia");
      else{
        alert("Atendido:"+removido);
        mostrarFila();
      }

  }

  function buscarElemento(){
    const busca = document.getElementById("txtnovoCPF");
    let encontrado = false;
    for(let atendimento of minhaFila){
       if(busca.value=== atendimento.cpf){
        alert("Encontrado na fila");
        encontrado = true;
       }
    }
    if(!encontrado)
      alert("Pessoa não está na fila");

  }// fim funcao busca



