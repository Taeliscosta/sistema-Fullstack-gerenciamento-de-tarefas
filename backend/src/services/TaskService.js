const Task = require('../models/Task')
const TaskRepository = require('../repositories/TaskRepository')

class TaskService {
  constructor() {
    this.repository = new TaskRepository()
  }

  getTasks() {
    return this.repository.findAll()
  }

  createTask(title) {
    const id = Date.now()

    const task = new Task(id, title)

    this.repository.save(task)

    return task
  }

  deleteTask(id) {
    this.repository.delete(Number(id))
  }
}

module.exports = TaskService