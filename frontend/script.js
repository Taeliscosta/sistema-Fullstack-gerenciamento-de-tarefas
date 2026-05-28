const API_URL = 'http://localhost:3000/tasks'

const taskInput = document.getElementById('taskInput')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')

async function loadTasks() {

  const response = await fetch(API_URL)

  const tasks = await response.json()

  taskList.innerHTML = ''

  tasks.forEach(task => {

    const li = document.createElement('li')

    li.className =
      'list-group-item d-flex justify-content-between align-items-center'

    li.innerHTML = `
        <span
            style="
                text-decoration:
                ${task.completed ? 'line-through' : 'none'}
            "
        >
            ${task.title}
        </span>

        <div>
            <button
                class="btn btn-success btn-sm"
                onclick="toggleTask(${task.id}, ${task.completed})"
            >
                ${task.completed ? 'Desfazer' : 'Concluir'}
            </button>

            <button
                class="btn btn-danger btn-sm"
                onclick="deleteTask(${task.id})"
            >
                Excluir
            </button>
        </div>
    `

    taskList.appendChild(li)
  })
}

async function createTask() {

  const title = taskInput.value

  if (!title) {
    return
  }

  await fetch(API_URL, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      title
    })
  })

  taskInput.value = ''

  loadTasks()
}

async function deleteTask(id) {

  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })

  loadTasks()
}

async function toggleTask(id, completed) {

  await fetch(`${API_URL}/${id}`, {

    method: 'PUT',

    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      completed: !completed
    })
  })

  loadTasks()
}

addTaskBtn.addEventListener('click', createTask)

loadTasks()