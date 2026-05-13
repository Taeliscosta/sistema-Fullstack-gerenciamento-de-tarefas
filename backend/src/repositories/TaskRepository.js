class TaskRepository {
  constructor() {
    this.tasks = []
  }

  findAll() {
    return this.tasks
  }

  save(task) {
    this.tasks.push(task)
  }

  delete(id) {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }
}

module.exports = TaskRepository