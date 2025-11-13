export default function ehMaiorDeIdade(campo) {
  const dataNascimento = new Date(campo.value);
  const dataAtual = new Date();
  const dataMaioridade = new Date(
    dataNascimento.getUTCFullYear() + 18,
    dataNascimento.getUTCMonth(),
    dataNascimento.getUTCDate()
  );

  if (dataMaioridade > dataAtual) {
    campo.setCustomValidity("Você deve ser maior que 18 anos para se cadastrar.");
  }
}