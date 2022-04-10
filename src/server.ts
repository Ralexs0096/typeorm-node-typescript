import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './routes/user.routes'
import connectDbAsync from './db/dbConnection'

class Server {
  private app: Application
  private port: string | number
  private apiPaths = {
    users: '/api/users',
  }
  constructor() {
    this.app = express()
    this.port = process.env.PORT_SERVER || 5000

    // Methods
    this.middlewares()
    this.getConnection()
    this.routes()
  }

  async getConnection() {
    await connectDbAsync()
  }

  routes() {
    this.app.use(this.apiPaths.users, userRoutes)
  }

  middlewares() {
    this.app.use(morgan('dev'))
    this.app.use(cors())
    this.app.use(express.json())
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log('Server running on Port', this.port)
    )
  }
}

export default Server
