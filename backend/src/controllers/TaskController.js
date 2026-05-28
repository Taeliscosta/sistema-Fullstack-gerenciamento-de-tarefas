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

  async toggleTask(req, res) {
    const { id } = req.params

    const { completed } = req.body

    await service.toggleTask(id, completed)

    res.status(200).json({
      message: 'Tarefa atualizada'
    })
  }
}

module.exports = new TaskController()