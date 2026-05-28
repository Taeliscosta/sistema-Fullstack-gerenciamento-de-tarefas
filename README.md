# Todo Fullstack

Projeto Fullstack básico desenvolvido para a disciplina :

- Programação Orientada a Objetos (POO)
- SOLID
- Node.js
- Express
- HTML/CSS
- Bootstrap
- API REST

## Objetivo

Criar um sistema de gerenciamento de tarefas onde o usuário pode:

- criar tarefas
- listar tarefas 
- remover tarefas

---

# Tecnologias utilizadas

## Backend

- Node.js
- Express

## Frontend

- HTML
- CSS
- Bootstrap
- JavaScript

---

# Estrutura do Projeto

```txt
backend/
frontend/
```

---

# Classes do domínio

## Task

Representa uma tarefa.

### Atributos

- id
- title
- completed

---

## TaskRepository

Responsável pelo armazenamento das tarefas.

---

## TaskService

Responsável pelas regras de negócio.

---

## TaskController

Responsável pelas requisições HTTP.

---

# Relações entre classes

## Associação

- TaskController → TaskService
- TaskService → TaskRepository

## Composição

- TaskRepository ◆── Task