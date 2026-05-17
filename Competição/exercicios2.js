const ask = require('readline-sync');

let usuarios = []; // variável de usuários que será alimentada conforme cadastro
let opcao = null; // variável para controlar a opção desejada no menu
let loginRealizado = false; // variável de controle para continuar pedindo senha e login do usuario caso estejam incorretos
let finalizarAcesso = false; // variável utilizada para finalizar loop quando usuário estiver logado

function criarConta(usuario, senha) {
    usuarios.push([usuario, senha]);
    console.log('Cadastro realizado com sucesso!');
    // não precisa de return, porque a função só vai adicionar o usuario digitado no array de Usuários
}

function fazerLogin(usuario, senha) {

    // Laço para percorrer cada posição do array
    for (let i = 0; i < usuarios.length; i++) {

        // declarando duas variáveis para abrigar o valor salvo no array na posição i atual para poder verificar depois com os meus parametros de entrada se existe no array
        let usuarioSalvo = usuarios[i][0];
        let senhaSalva = usuarios[i][1];

        // Verificação se os valores digitados vão estar presentes no array atual verificado no for
        if (usuarioSalvo === usuario && senhaSalva === senha) {
            loginRealizado = true;
            return `Login realizado com sucesso! Bem vindo ${usuario}`;

        }
    }

    loginRealizado = false;
    return "Usuário ou senha incorretos. Digite novamente!";
}


console.clear();

while (opcao !== 0 && !finalizarAcesso) {

    opcao = Number(ask.question(`
    +----------------------------------+
    |          PORTAL SENAC            |
    +----------------------------------+
    
    1 - Fazer Login
    2 - Cadastrar Usuario
    0 - Sair
    
    +----------------------------------+
    Opcao desejada: `));

    console.clear()

    switch (opcao) {
        case 1:
            if (usuarios.length > 0) {
                while (!loginRealizado) {
                    console.log(`
                +----------------------------------+
                |          LOGIN SISTEMA           |
                +----------------------------------+
                
                    `)
                    let us = ask.question(`Login: `);
                    let pass = ask.question(`Senha: `, { hideEchoBack: true });

                    finalizarAcesso = true;
                    console.log(fazerLogin(us, pass));

                }
            } else {
                console.log('Não existe nenhum usuário ainda. Volte para o menu e cadastre um usuário' )
            }
        break;

        case 2:
            console.log(`
                +----------------------------------+
                |       CADASTRO DE USUARIO        |
                +----------------------------------+
                    `);

            let cadUs = ask.question(`Login: `);
            let cadPass = ask.question(`Senha: `, { hideEchoBack: true });

            console.log(criarConta(cadUs, cadPass));

            console.clear()
            


            break;
    

        case 0:
            console.log('Saiu do sistema')
            break;

        default:
            console.log('Opcao invalida!')
    }
}