const TaskService = require('../services/TaskService')

const service = new TaskService()

class TaskController {

  getTasks(req, res) {
    const tasks = service.getTasks()

    res.json(tasks)
  }

  createTask(req, res) {
    const { title } = req.body

    const task = service.createTask(title)

    res.status(201).json(task)
  }

  deleteTask(req, res) {
    const { id } = req.params

    service.deleteTask(id)

    res.status(204).send()
  }
}

module.exports = new TaskController()