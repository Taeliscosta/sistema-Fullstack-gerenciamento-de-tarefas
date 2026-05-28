# Todo Fullstack

Sistema Fullstack de gerenciamento de tarefas desenvolvido para estudo de arquitetura backend, Programação Orientada a Objetos (POO), SOLID e integração entre frontend e backend utilizando Node.js, Express e SQLite.

---

# Preview do Projeto

## Funcionalidades

* Criar tarefas
* Listar tarefas
* Marcar tarefas como concluídas
* Remover tarefas
* Persistência de dados com SQLite

---

# Tecnologias Utilizadas

## Backend

* Node.js
* Express
* SQLite3
* CORS

## Frontend

* HTML5
* CSS3
* Bootstrap 5
* JavaScript

## Conceitos Aplicados

* Programação Orientada a Objetos (POO)
* SOLID
* API REST
* Arquitetura em Camadas
* CRUD
* Async/Await
* Persistência de Dados

---

# Arquitetura do Projeto

```txt
Frontend
   ↓
API REST
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
SQLite
```

---

# Estrutura do Projeto

```txt
todo-fullstack/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── TaskController.js
│   │   │
│   │   ├── services/
│   │   │   └── TaskService.js
│   │   │
│   │   ├── repositories/
│   │   │   └── TaskRepository.js
│   │   │
│   │   ├── models/
│   │   │   └── Task.js
│   │   │
│   │   ├── routes/
│   │   │   └── taskRoutes.js
│   │   │
│   │   ├── database/
│   │   │   ├── database.js
│   │   │   └── database.sqlite
│   │   │
│   │   └── app.js
│   │
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .gitignore
└── README.md
```

---

# Modelagem das Classes

## Task

Representa uma tarefa do sistema.

### Atributos

* id
* title
* completed

---

## TaskRepository

Responsável pela comunicação com o banco de dados.

### Métodos

* findAll()
* save()
* delete()
* updateStatus()

---

## TaskService

Responsável pelas regras de negócio da aplicação.

### Métodos

* getTasks()
* createTask()
* deleteTask()
* toggleTask()

---

## TaskController

Responsável pelas requisições HTTP.

### Métodos

* getTasks()
* createTask()
* deleteTask()
* toggleTask()

---

# Relações entre Classes

## Associação

```txt
TaskController → TaskService
TaskService → TaskRepository
```

## Composição

```txt
TaskRepository ◆── Task
```

---

# Rotas da API

| Método | Rota       | Descrição                 |
| ------ | ---------- | ------------------------- |
| GET    | /tasks     | Lista todas as tarefas    |
| POST   | /tasks     | Cria uma nova tarefa      |
| PUT    | /tasks/:id | Atualiza status da tarefa |
| DELETE | /tasks/:id | Remove uma tarefa         |

---

# Instalação e Execução

## Clonar repositório

```bash
git clone https://github.com/SEU-USUARIO/todo-fullstack.git
```

---

# Entrar no projeto

```bash
cd todo-fullstack
```

---

# Instalar dependências do backend

```bash
cd backend

npm install
```

---

# Rodar backend

```bash
npm run dev
```

Servidor disponível em:

```txt
http://localhost:3000
```

---

# Rodar frontend

Abra o arquivo:

```txt
frontend/index.html
```

Utilize preferencialmente a extensão:

* Live Server (VS Code)

---

# Banco de Dados

O projeto utiliza SQLite para persistência de dados.

O banco é criado automaticamente ao iniciar o backend.

Arquivo do banco:

```txt
src/database/database.sqlite
```

---

# Melhorias Futuras

* Editar tarefas
* Sistema de autenticação
* Responsividade avançada
* Deploy completo
* Docker
* Testes automatizados

---

# Autor

## Taélis Holanda

Estudante de Ciência da Computação focado em desenvolvimento Fullstack, APIs e Engenharia de Software.

GitHub:

[Taelis Costa GitHub](https://github.com/Taeliscosta?utm_source=chatgpt.com)
