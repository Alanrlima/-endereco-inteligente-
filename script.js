const form = document.getElementById('form-endereco');
const cep = document.getElementById('cep');
const logradouro = document.getElementById('logradouro');
const numero = document.getElementById('numero');
const uf = document.getElementById('uf');


cep.addEventListener('input', () => {
  const digits = cep.value.replace(/\D/g, '').slice(0, 8);
  if (digits.length > 5) {
    cep.value = digits.slice(0, 5) + '-' + digits.slice(5);
  } else {
    cep.value = digits;
  }
});

uf.addEventListener('input', () => {
  uf.value = uf.value.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 2);
});

numero.addEventListener('input', () => {
  numero.value = numero.value.replace(/\D/g, '');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const cepRegex = /^\d{5}-\d{3}$/;
  const numeroRegex = /^\d+$/;
  const ufRegex = /^[A-Z]{2}$/;

  if (!cep.value || !cepRegex.test(cep.value)) {
    alert('CEP inválido. Use o formato 00000-000.');
    return;
  }

  if (!logradouro.value || logradouro.value.trim().length < 5) {
    alert('Logradouro inválido. Deve conter no mínimo 5 caracteres.');
    return;
  }

  if (!numero.value || !numeroRegex.test(numero.value)) {
    alert('Número inválido. Informe apenas dígitos.');
    return;
  }

  if (!uf.value || !ufRegex.test(uf.value)) {
    alert('UF inválida. Use exatamente 2 letras maiúsculas (ex.: SP, RJ).');
    return;
  }

  alert('Endereço cadastrado com sucesso');
});
