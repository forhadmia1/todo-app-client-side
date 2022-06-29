import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import StartPage from './StartPage';
import TodoList from './TodoList/TodoList';

const Home = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            {
                !user ?
                    <StartPage /> :
                    <TodoList />
            }
        </div>
    );
};

export default Home;