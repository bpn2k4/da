from app.databases.sql import Base, SessionLocal


def get_sql_database():
  sql = SessionLocal()
  try:
    yield sql
  finally:
    sql.close()
