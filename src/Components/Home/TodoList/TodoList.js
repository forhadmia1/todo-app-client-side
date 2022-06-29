import React from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import './TodoList.css'

const TodoList = () => {
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
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td className='d-flex justify-content-around'>
                                <button className='btn btn-info'>Completed</button>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='mt-4 d-flex justify-content-center flex-column align-items-center'>
                <h2 className='text-center fw-bold'>Add Task</h2>
                <Form className='addTaskForm'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Task Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter task name" />
                    </Form.Group>
                    <div class="mb-3">
                        <label for="description" class="form-label fw-bold">Example textarea</label>
                        <textarea class="form-control" id="description" rows="3"></textarea>
                    </div>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default TodoList;