// Função para obter a data atual formatada
function obterDataAtual() {
    let dataAtual = new Date();
    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth() + 1; // Adiciona 1 porque o mês inicia do zero
    let ano = dataAtual.getFullYear();
    return `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`;
}

// Função para obter a hora atual formatada
function obterHoraAtual() {
    const data = new Date();
    const hora = data.getHours().toString().padStart(2, '0');
    const minuto = data.getMinutes().toString().padStart(2, '0');
    const segundo = data.getSeconds().toString().padStart(2, '0');
    return `${hora}:${minuto}:${segundo}`;
}

// Função para calcular a diferença entre duas horas
function calcularDiferencaHoras(hora1, hora2) {
    const [h1, m1, s1] = hora1.split(':').map(Number);
    const [h2, m2, s2] = hora2.split(':').map(Number);
    const diferencaSegundos = (h2 * 3600 + m2 * 60 + s2) - (h1 * 3600 + m1 * 60 + s1);
    const horas = Math.floor(diferencaSegundos / 3600);
    const minutos = Math.floor((diferencaSegundos % 3600) / 60);
    const segundos = diferencaSegundos % 60;
    return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

function calcularIdade(dataBR) {
  // Espera formato dd/mm/aaaa
  if (typeof dataBR !== "string") return null;

  dataBR = dataBR.trim();
  const match = dataBR.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) return null; // formato inválido

  const dia = parseInt(match[1], 10);
  const mes = parseInt(match[2], 10) - 1; // Date usa mês 0-11
  const ano = parseInt(match[3], 10);

  const nascimento = new Date(ano, mes, dia);

  // valida data real (ex.: 31/02/2020 deve falhar)
  if (
    nascimento.getFullYear() !== ano ||
    nascimento.getMonth() !== mes ||
    nascimento.getDate() !== dia
  ) {
    return null;
  }

  const hoje = new Date();
  let idade = hoje.getFullYear() - ano;

  const fezAniversarioEsteAno =
    hoje.getMonth() > mes ||
    (hoje.getMonth() === mes && hoje.getDate() >= dia);

  if (!fezAniversarioEsteAno) idade--;

  return idade;
}

