import psycopg2
from flask import Flask, request, jsonify

app = Flask(__name__)
conn = psycopg2.connect("dbname=todo_list")

@app.route('/todo', methods=['GET'])
def get_todo_list():
    cur = conn.cursor()
    cur.execute("SELECT * FROM todo;")
    rows = cur.fetchall()
    cur.close()
    todo_list = []
    for row in rows:
        todo = {
            'id': row[0],
            'title': row[1],
            'description': row[2],
            'completed': row[3],
            'created_at': row[4].strftime('%Y-%m-%d %H:%M:%S')
        }
        todo_list.append(todo)
    return jsonify(todo_list)

@app.route('/todo', methods=['POST'])
def create_todo():
    data = request.get_json()
    title = data.get('title')
    description = data.get('description')
    cur = conn.cursor()
    cur.execute("INSERT INTO todo (title, description) VALUES (%s, %s)", (title, description))
    conn.commit()
    cur.close()
    return jsonify({'message': 'Todo created'})

if __name__ == '__main__':
    app.run()
