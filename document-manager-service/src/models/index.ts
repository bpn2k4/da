import File from './File'
import { sql } from '@databases'

const initModel = async (alter = true, force = false) => {
  return sql.sync({
    alter: alter,
    force: force
  })
}

export {
  File,
  initModel
}