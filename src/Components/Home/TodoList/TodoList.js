import React from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { useQuery } from 'react-query'
import './TodoList.css'
import TodoRow from './TodoRow';

const TodoList = () => {
    const handleAddTask = (e) => {
        e.preventDefault()
        const taskname = e.target.task.value;
        const description = e.target.description.value;
        const task = { taskname, description, status: "pending" }
        fetch('http://localhost:5000/addTask', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    e.target.reset()
                }
            })
    }

    const { isLoading, error, data: todos, refetch } = useQuery('task', () =>
        fetch('http://localhost:5000/task').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <p>Loading....</p>
    }

    return (
        <div className='container mt-5'>
            <div className='table-responsive'>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>Si:</th>
                            <th>Task Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map((todo, index) => <TodoRow
                                key={todo._id}
                                todo={todo}
                                index={index}
                                refetch={refetch}
                            ></TodoRow>)
                        }
                    </tbody>
                </Table>
            </div>
            <div className='mt-4 d-flex justify-content-center flex-column align-items-center'>
                <h2 className='text-center fw-bold'>Add Task</h2>
                <Form onSubmit={handleAddTask} className='addTaskForm'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Task Name</Form.Label>
                        <Form.Control name='task' type="text" placeholder="Enter task name" />
                    </Form.Group>
                    <div class="mb-3">
                        <label for="description" class="form-label fw-bold">Example textarea</label>
                        <textarea name='description' class="form-control" id="description" rows="3"></textarea>
                    </div>
                    <Button variant="primary" type="submit">
                        Add Task
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default TodoList;