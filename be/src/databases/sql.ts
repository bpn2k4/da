import { Sequelize } from 'sequelize'

const sql = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',

  logging: () => 1
})

export default sql