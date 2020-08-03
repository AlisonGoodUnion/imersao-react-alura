# Imersão React Alura

    https://github.com/facebook/react


## URL Acess
http://goodunionflix.vercel.app

Projeto utilizado para armazenar as aulas de react da Alura.

## Local do APP: 
    
    /good-union-flix

## Links uteis: 
    https://fonts.google.com/
    https://pt-br.reactjs.org/docs
    https://www.alura.com.br/imersao-react
    Criar fontes/logo: https://fontmeme.com/pt/

## Dados do projeto
 * contém arquivo figma + logo. https://www.figma.com/
necessário importar projeto no figma local: dados_projeto/AluraFlix.fig

## Pluggins VSCode
IntelliCode

## Libs
* extention do vscode para deixar mais claro as Tagged template string https://styled-components.com/

        npm install styled-components

* Rotas:  https://reactrouter.com/

* Slider:  https://react-slick.neostack.com/
    Para utilizar a lib, necessário adicionar 2 arquivos na pasta public do projeto
    Alterar ./public/index.html

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css">


## Dicas
* Style guide de javascript.
    https://github.com/airbnb/javascript

* Lib PropTypes: npm install prop-types
    https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html

        É praticamente uma documentação do nosso component semelhante ao swagger no spring.
        Utilizada para checar tipos nativos dos components, então, caso você passe um valor 
        inteiro para um campo do component de type string a lib ja realiza a validação e 
        ocorre erro no console. 
        Ajusa a evitar alguns erros bobos com os tipos de entrada de dados dos components

* Instalação ESLint: npx eslint --init

        √ How would you like to use ESLint? · style       
        √ What type of modules does your project use? · esm
        √ Which framework does your project use? · react
        √ Does your project use TypeScript? · Yes
        √ Where does your code run? · browser
        √ How would you like to define a style for your project? · guide
        √ Which style guide do you want to follow? · airbnb
        √ What format do you want your config file to be in? · JavaScript
        √ Would you like to install them now with npm? · Yes

    Caso ocorra erro ao executar o projeto, talvez seja necessário ajustar a versão do eslint no

        package.json "eslint": "^6.6.0".

    Após alterar a versão executar o npm install.
    Recomendo a instalação e ativação da extensão do ESLing 
    para ativar no VSCode é necessário ir no 

        Menu View > Command Palette > executar o comando eslint enable
        caso não funcione, executar o comando relaod window

    Caso você tenha criado seu project react dentro de algum diretório
    talvez seja necessário adicionar no arquivo settings.json 

        "eslint.workingDirectories": ["./good-union-flix"]

    Para ignorar apontamentos no jsx adicionar o ignore. .eslintrc.js
        
        "rules": {
            "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
        }
    
    Recomendado também utilizar a conf

        ESLint: Fix all auto-fixable Problems.


* Lib para mock API do backend.
    https://github.com/typicode/json-server

        Como criamos o arquivo db.json com um object json de categorias dentro, ao subir o server 
        temos a URL http://localhost:8080/categorias com nossas categorias, já com o restfull funcionando, por exemplo podemos passar o /1
        para buscar a 1º categoria da lista.

        Para execução é nesserario executar json-server --watch db.json --port 8080
        ou criar um scripts no package.json

        Obs: caso tenha feito o script é necessário subir o server com o command npm run NOME_DO_SCRIPT

* Concurrently: Lib para executar vários comandos no script do package.
    https://www.npmjs.com/package/concurrently

        npm install --save-dev concurrently

        Ex:. 
        "scripts": {
            "dev": "concurrently \"react-scripts start\" \"npm run server\"",
        }

        Cada comando que a gente executa trava o terminal, então podemos passar dois comandos e eles são executados em paralelo :) 