const fs = require("fs")

fs.readFile("arquivos.txt", "utf8", (err, data) => {
    if(err){
        console.error("Erro ao ler o arquivo: ", err);
        return
    }

    console.log("Conteúdo do arquivo: \n", data)
})