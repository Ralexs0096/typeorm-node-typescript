import { AppDataSource } from './index'

const connectDbAsync = async () => {
  try {
    await AppDataSource.initialize()
    console.log('Database connected')
  } catch (error) {
    console.log(error)
  }
}

export default connectDbAsync
