from flask import Flask, jsonify, request
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for the app

# In-memory storage for tasks
tasks = []

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

@app.route('/tasks', methods=['POST'])
def add_task():
    data = request.get_json()
    print('Received POST data:', data)  # Debug log
    if 'task' in data and data['task'].strip():
        task_id = max([task['id'] for task in tasks], default=0) + 1  # Ensure unique ID
        task = {'id': task_id, 'task': data['task'].strip()}  # Trim whitespace
        tasks.append(task)
        print('Task added:', task)  # Debug log
        print('Current tasks:', tasks)  # Debug log
        return jsonify(task), 201
    print('Invalid task data:', data)  # Debug log
    return jsonify({'error': 'Task content is required'}), 400

@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    global tasks
    task_to_delete = next((task for task in tasks if task['id'] == task_id), None)
    if task_to_delete:
        tasks = [task for task in tasks if task['id'] != task_id]
        return jsonify({'message': 'Task deleted'}), 200
    return jsonify({'error': 'Task not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
