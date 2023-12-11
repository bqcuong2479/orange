import {DataSource} from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'orange',
  synchronize: false,
  entities: ['entity/*.ts'],
  migrations: ['migration/*.ts'],
  subscribers: [],
})

AppDataSource.initialize()
  .then(() => {
    console.log('DB has been initialized!')
  })
  .catch(error => {
    console.log('Error during DB initialization', error)
  })
