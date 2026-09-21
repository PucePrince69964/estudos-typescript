# Caderno de Estudos de TypeScript

## 🎯 Objetivo
Este repositório foi criado para fins de estudo e prática da linguagem de programação TypeScript, como parte da disciplina de Programação TypeScript do curso de Ciência da Computação.

Aqui serão desenvolvidos exercícios, exemplos e atividades relacionados aos principais conceitos e recursos da linguagem, servindo também como registro do aprendizado ao longo da disciplina.

## 🎓 Disciplina
- Curso: Ciência da Computação
- Disciplina: Programação TypeScript

## Estrutura do Projeto
```
typescript/
├── dist/
│   ├── consulta-aluno.d.ts
│   ├── consulta-aluno.d.ts.map
│   ├── consulta-aluno.js
│   ├── consulta-aluno.js.map
│   ├── teste.d.ts
│   ├── teste.d.ts.map
│   ├── teste.js
│   └── teste.js.map
├── src/
│   ├── consulta-aluno.ts
│   └── teste.ts
├── package-lock.json
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## 📂 Diretórios
- src/ — Contém os arquivos escritos em TypeScript.
- dist/ — Contém os arquivos transpilados de TypeScript em JavaScript

## 💻 Tecnologias
- Typescript
- Node.js
- Git
- Github

## Instalação e Preparação de Ambiente
- 1. Abra o Git Bash e execute: `
```git clone https://github.com/PucePrince69964/estudo-typescript.git```
- 2. Acesse a pasta do projeto em sua máquina:
```cd estudo-typescript```
- 3. Abra o repositório:
```code .```
- 4. Instale as depedências definidas pelo `package.json`:
```npm install```
- 5. Verifique a instalação do TypeScript:
```npx tsc --version```
Se uma versão for exibida no terminal, o TypeScript está instalado e pronto para ser utilizado.

Os arquivos compilados serão gerados no diretório dist/, conforme as configurações definidas no tsconfig.json.
- 6. Execute o código:
```node dist/nome_do_arquivo.js```

## 📚 Atividades
### Consulta de Alunos
Atividade desenvolvida para praticar conceitos básicos de TypeScript, como:
- Interfaces;
- Tipagem de dados;
- Arrays;
- Objetos;
- Funções;
- Método de Array (forEach);
- Manipulação de dados.

📄 Arquivo: src/consulta-aluno.ts

### Testes
Arquivo utilizado para realizar testes e experimentar conceitos da linguagem durante o desenvolvimento das atividades.

📄 Arquivo: src/teste.ts