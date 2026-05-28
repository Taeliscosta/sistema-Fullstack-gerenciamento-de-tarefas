const TaskService = require('../services/TaskService')

const service = new TaskService()

class TaskController {

  async getTasks(req, res) {

    const tasks = await service.getTasks()

    res.json(tasks)
  }

  async createTask(req, res) {

    const { title } = req.body

    const task = await service.createTask(title)

    res.status(201).json(task)
  }

  async deleteTask(req, res) {

    const { id } = req.params

    await service.deleteTask(id)

    res.status(204).send()
  }
}

module.exports = new TaskController()