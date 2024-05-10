import { Sequelize } from 'sequelize'

const sql = new Sequelize({
  dialect: 'sqlite',
  storage: './../data/database.sqlite',
  logging: () => 1
})

export default sql