const HtmlWebpackPlugin = require("html-webpack-plugin");
//a sintaxe de importação ainda é antiga. o Babel não vai interpretar o webpack
//escrevemos dessa forma para garantir que o node ou qualquer lugar que esteja sendo utilizado 
//as configurações ele seja execultado.
module.exports = {
    //minhas ferramentas de desenvolvimento
    devtools: "source-map",
    //onde meu arquivo principal estará
    enty: "./src/inde.js",
    //e os modules serão nossos modúlos que 
    //seráo nossas regras
    modules: {
        reules: [{
                // validação: todos os aquivos que tenham JS eu quero....
                test: /\.js$/,
                //eu quero primeiramente excluir a leitura disso dentro do meu node modules (no
                //caso são os pacotes que a gente já instalou. Esses pacotes geralmente já são tratados.)
                exclude: /node_modules/,
                //desejamos usar o babel loader porque no nosso js o babel terà que fazer a transpilação para
                // que todos os navegadores entendam.
                use: {
                    loader: "babel-loader"
                }
            },

            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            },

            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },

            {
                test: /\.(png|jpe?g|gif))$/i,
                use: ["file-loader"]
            },

        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],

    },
    plugin: [
        //a variavel que criamos ali em cima. os plugins a gente importa e utiliza aqui dentro.
        new HtmlWebpackPlugin ({
            //o template é o resultado final. Onde nosso còdigo será exportado.
            template: './public/index.html'
        })
    ]
}