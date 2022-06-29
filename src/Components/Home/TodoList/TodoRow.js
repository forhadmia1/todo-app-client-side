import React from 'react';

const TodoRow = ({ todo, index, refetch }) => {
    const { _id, taskname, description, status } = todo;
    const handleDelete = (id) => {
        const isAgree = window.confirm()
        if (isAgree) {
            fetch(`https://still-citadel-42786.herokuapp.com/task/${id}`, {
                method: "DELETE"
            }).then(res => res.json())
                .then(result => {
                    refetch()
                })
        }

    }

    const handleCompleted = (id) => {
        fetch(`https://still-citadel-42786.herokuapp.com/task/${id}`, {
            method: "PUT"
        }).then(res => res.json())
            .then(result => {
                refetch()
            })
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{taskname}</td>
            <td>{description}</td>
            <td className='d-flex justify-content-around'>
                <button onClick={() => handleCompleted(_id)} className={status === 'pending' ? 'btn btn-dark' : ' disabled btn btn-dark'}>Completed</button>
                <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    );
};

export default TodoRow;