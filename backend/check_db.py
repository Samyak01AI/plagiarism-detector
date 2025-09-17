import sqlite3

# Connect to your database
conn = sqlite3.connect("database.db")
cursor = conn.cursor()

# List all tables
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()
print("Tables:", tables)

# View all users
cursor.execute("SELECT * FROM users;")
users = cursor.fetchall()
for user in users:
    print(user)

conn.close()
