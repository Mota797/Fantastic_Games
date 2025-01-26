//validação para o campo nome
document.getElementById('nome').addEventListener('input', function () {
    const nomevalida = /^[a-zA-Z\s]+$/; // Permite apenas letras e espaços
    const nome = this.value; // Valor do campo
    const campo_nome = document.getElementById('campo_nome'); // Elemento para exibir mensagens de erro
    
    // Remove mensagens de erro anteriores, se existirem
    campo_nome.innerHTML = '';

    if (!nomevalida.test(nome)) {
        // Criar o parágrafo e adicionar ao campo_nome
        var p = document.createElement('p');
        p.textContent = 'O nome possui números ou símbolos, tente novamente.';
        p.style.color = 'red'; // Opcional: destaque visual
        p.style.fontSize = '10px'
        p.style.fontWeight = '500'
        campo_nome.appendChild(p);
    }
});
document.getElementById('sobrenome').addEventListener('input', function () {
    const sobrenomevalida = /^[a-zA-Z\s]+$/;
    const sobrenome = this.value
    const campo_sobrenome = document.getElementById('campo_sobrenome')

    campo_sobrenome.innerHTML = ''

    if (!sobrenomevalida.test(sobrenome)){
        var p = document.createElement('p');
        p.textContent = 'O sobrenome possui números ou símbolos, tente novamente';
        p.style.color = 'red';
        p.style.fontSize = '10px'

p.style.fontWeight = '500';        p.style.fontWeight = '500'
        campo_sobrenome.appendChild(p);
    }
})
// Validação para o campo "Nick"
document.getElementById('nick').addEventListener('input', function () {
    const nickValida = /^[a-zA-Z0-9_]{3,16}$/; // Letras, números e underscores, de 3 a 16 caracteres
    const nick = this.value;
    const campo_nick = document.getElementById('campo_nick');

    campo_nick.innerHTML = '';

    if (!nickValida.test(nick)) {
        var p = document.createElement('p');
        p.textContent = 'O nickname deve ter entre 3 e 16 caracteres e conter apenas letras, números ou underscores.';
        p.style.color = 'red';
        p.style.fontSize = '10px';
        p.style.fontWeight = '500';
        campo_nick.appendChild(p);
    }
});

// Validação para o campo "Idade"
document.getElementById('idade').addEventListener('input', function () {
    const idadeValida = /^[1-9][0-9]?$|^100$/; // Aceita números entre 1 e 100
    const idade = this.value;
    const campo_idade = document.getElementById('campo_idade');

    campo_idade.innerHTML = '';

    if (!idadeValida.test(idade)) {
        var p = document.createElement('p');
        p.textContent = 'A idade deve ser um número entre 1 e 100.';
        p.style.color = 'red';
        p.style.fontSize = '10px';
        p.style.fontWeight = '500';
        campo_idade.appendChild(p);
    }
});

// Validação para o campo "E-mail"
document.getElementById('email').addEventListener('input', function () {
    const emailValida = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valida um formato básico de e-mail
    const email = this.value;
    const campo_email = document.getElementById('campo_email');

    campo_email.innerHTML = '';

    if (!emailValida.test(email)) {
        var p = document.createElement('p');
        p.textContent = 'Por favor, insira um e-mail válido.';
        p.style.color = 'red';
        p.style.fontSize = '10px';
        p.style.fontWeight = '500';
        campo_email.appendChild(p);
    }
});

// Validação para o campo "Senha"
document.getElementById('senha').addEventListener('input', function () {
    const senhaValida = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;
    // Pelo menos uma letra maiúscula, uma minúscula, um número, um caractere especial, e mínimo 8 caracteres
    const senha = this.value;
    const campo_senha = document.getElementById('campo_senha');
    

    campo_senha.innerHTML = '';

    if (!senhaValida.test(senha)) {
        var p = document.createElement('p');
        p.textContent = 'A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.';
        p.style.color = 'red';
        p.style.fontSize = '10px';
        p.style.fontWeight = '500';
        campo_senha.appendChild(p);
    }
    document.getElementById('confirmar').addEventListener('input', function() {
        const confirmar = this.value;
        const campo_confirmar = document.getElementById('campo_confirmar');

        campo_confirmar.innerHTML = '';

        if (senha != confirmar) {
            var p = document.createElement('p')
            p.textContent = 'As senhas não conferem'
            p.style.color = 'red';
            p.style.fontSize = '10px';
            p.style.fontWeight = '500';
            campo_confirmar.appendChild(p);
        }
    })
            
});

function validar_user() {
    const nomevalida = /^[a-zA-Z\s]+$/;
    const sobrenomevalida = /^[a-zA-Z\s]+$/;
    const nickValida = /^[a-zA-Z0-9_]{3,16}$/;
    const idadeValida = /^[1-9][0-9]?$|^100$/;
    const emailValida = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const senhaValida = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}$/

    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const nick = document.getElementById('nick').value;
    const idade = document.getElementById('idade').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmar_senha = document.getElementById('confirmar').value;

    if(!nomevalida.test(nome)){
        return false
    }
    else if(!sobrenomevalida.test(sobrenome)){
        return false
    }
    else if(!nickValida.test(nick)){
        return false
    }
    else if(!idadeValida.test(idade)){
        return false
    }
    else if(!emailValida.test(email)){
        return false
    }
    else if(!senhaValida.test(senha)){
        return false
    }
    else if(senha != confirmar_senha){
        return false
    }
    return true
}
