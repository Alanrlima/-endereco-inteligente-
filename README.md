Endereço Inteligente

Página [endereco.html] com formulário de cadastro de endereço e validações em JavaScript, incluindo máscara automática de CEP, conversão de UF para maiúsculas e bloqueio de envio inválido.

​
Status do projeto

Em desenvolvimento (Sprint 01), acompanhando via GitHub Projects com quadro Scrum.

​
Objetivo

Fornecer um formulário acessível e validado para cadastro de endereço, garantindo formato correto do CEP, UF e campos obrigatórios, com feedback claro ao usuário.
​

​
Funcionalidades

    Máscara dinâmica do CEP no formato 00000-000 durante a digitação.

​

Conversão automática de UF para maiúsculas e validação com regex de 2 letras.

​

Validações no submit com preventDefault e alerts por campo inválido.
​

​

Aceita Complemento como campo opcional.

Estrutura do projeto

    endereco.html: marcação do formulário e inclusão do script.

​

script.js: máscaras, conversões e validações de CEP, Logradouro, Número e UF.
​

Requisitos do formulário

    CEP: obrigatório, máscara 00000-000 e regex de validação ^$$\d{5}-\d{3}$$$.

​

Logradouro: obrigatório, mínimo 5 caracteres úteis.

​

Número: obrigatório, apenas dígitos com regex ^$$\d+$$$.

​

UF: obrigatório, duas letras maiúsculas.

​
Complemento: opcional, sem validação rígida.


Comportamento e UX

    Submissão com addEventListener("submit", ...) e preventDefault para validar antes de enviar.


Alerts específicos por campo inválido e mensagem de sucesso quando tudo estiver válido.
​
Form fields configurados com inputmode apropriado e placeholders de exemplo.

Como executar localmente

    Clone o repositório e faça checkout da feature branch designada.

​

Abra endereco.html no navegador; não requer servidor nem dependências externas.

Edite script.js para customizações de mensagens ou regras adicionais, se necessário.

Uso

    Digite o CEP; a máscara é aplicada automaticamente após o quinto dígito.

​

Informe Logradouro com ao menos 5 caracteres e Número apenas numérico.

Informe a UF; qualquer entrada é convertida para maiúscula em tempo rea
