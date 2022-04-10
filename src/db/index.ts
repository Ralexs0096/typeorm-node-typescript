import { DataSource } from 'typeorm'
import { User } from '../entities/User'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'alexPYV7V7',
  database: 'typeormdb',
  port: 5432,
  entities: [User],
  logging: true,
  synchronize: true,
})
