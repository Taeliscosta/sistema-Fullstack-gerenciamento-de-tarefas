const db = require('../database/database')

class TaskRepository {

  findAll() {
    return new Promise((resolve, reject) => {
      db.all(
        'SELECT * FROM tasks',
        [],
        (error, rows) => {

          if (error) {
            reject(error)
          }

          resolve(rows)
        }
      )

    })
  }

  save(task) {

    return new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO tasks (title, completed) VALUES (?, ?)',
        [task.title, task.completed],
        function(error) {

          if (error) {
            reject(error)
          }

          resolve({
            id: this.lastID,
            ...task
          })
        }
      )

    })
  }

  delete(id) {

    return new Promise((resolve, reject) => {
      db.run(
        'DELETE FROM tasks WHERE id = ?',
        [id],
        function(error) {

          if (error) {
            reject(error)
          }

          resolve()
        }
      )

    })
  }

  updateStatus(id, completed) {

    return new Promise((resolve, reject) => {
      db.run(
        'UPDATE tasks SET completed = ? WHERE id = ?',
        [completed, id],
        function(error) {
          
          if (error) {
          reject(error)
          }

          resolve()
        }
      )
    })
  }
  
}

module.exports = TaskRepository