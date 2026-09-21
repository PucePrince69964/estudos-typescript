interface Pessoa {
    "nome": string,
    "idade": number,
    "casado": boolean
}

const cidadao:Pessoa = {
    "nome": "Gabriel",
    "idade": 18,
    "casado": false
}

Object.keys(cidadao).forEach(chave => {
  console.log(cidadao[chave as keyof Pessoa]);
});