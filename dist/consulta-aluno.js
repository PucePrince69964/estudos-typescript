"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alunos = [
    { "ID_Aluno": 1, "matricula": 123456, "nome": "Gabriel", "idade": 18, "curso": "Ciência da Computação", "notas": [8, 10, 10] },
    { "ID_Aluno": 2, "matricula": 123457, "nome": "Maria", "idade": 19, "curso": "Engenharia Civil", "notas": [7, 9, 8] },
    { "ID_Aluno": 3, "matricula": 123458, "nome": "Sofia", "idade": 19, "curso": "Ciências Biológicas", "notas": [8, 9, 10] },
    { "ID_Aluno": 4, "matricula": 123459, "nome": "Pedro", "idade": 18, "curso": "Engenharia de Pesca", "notas": [7, 6, 8] },
    { "ID_Aluno": 5, "matricula": 123460, "nome": "Jones", "idade": 20, "curso": "Ciência da Computação", "notas": [8, 6, 7] },
    { "ID_Aluno": 6, "matricula": 123461, "nome": "Manuela", "idade": 21, "curso": "Engenharia Civil", "notas": [6, 9, 8] },
];
function calc_media(nota) {
    let soma = 0;
    for (let i of nota) {
        soma += i;
    }
    return soma / nota.length;
}
alunos.forEach((aluno) => {
    console.log(`ID do Aluno: ${aluno.ID_Aluno}`);
    console.log(`Matrícula: ${aluno.matricula}`);
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Idade: ${aluno.idade}`);
    console.log(`Curso: ${aluno.curso}`);
    console.log(`Média: ${calc_media(aluno.notas).toFixed(2)}`);
    console.log("-----------------------------------------------------");
});
//# sourceMappingURL=consulta-aluno.js.map