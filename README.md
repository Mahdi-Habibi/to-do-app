# To-Do App

A simple to-do list application built with a frontend in HTML, CSS, and JavaScript, and a backend API for task management.

## Features
- Add new tasks to the list.
- View all tasks.
- Delete tasks from the list.
- Tasks are fetched from and synced with a backend API.
- Tasks are cached in local storage for offline access.

## Prerequisites
- A running backend server that provides the following API endpoints:
  - `GET /tasks` - Fetch all tasks.
  - `POST /tasks` - Add a new task (expects a JSON body with a `task` field).
  - `DELETE /tasks/:id` - Delete a task by its ID.
- A modern web browser.

## Setup Instructions
1. Clone this repository to your local machine:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd to-do-app
   ```
3. Open the `frontend/index.html` file in your browser to use the app.

## Usage
1. Enter a new task in the input field and click the "Add Task" button to add it to the list.
2. View the list of tasks fetched from the backend.
3. Click the "Delete" button next to a task to remove it from the list.

## File Structure
```
to-do-app/
├── frontend/
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
│   └── index.html
└── README.md
```

## Notes
- Ensure the backend server is running and accessible at `http://127.0.0.1:5000`.
- Modify the API URLs in `index.html` if the backend server is hosted on a different address or port.

## License
This project is licensed under the MIT License. See the full license text below:

```
MIT License

Copyright (c) 2025 Mahdi habibi Nazarlu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
