const Task = require('../models/Task')
const TaskRepository = require('../repositories/TaskRepository')

class TaskService {

  constructor() {
    this.repository = new TaskRepository()
  }

  async getTasks() {
    return await this.repository.findAll()
  }

  async createTask(title) {

    const task = new Task(null, title)

    return await this.repository.save(task)
  }

  async deleteTask(id) {
    await this.repository.delete(id)
  }
}

module.exports = TaskService