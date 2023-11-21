import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ErrorPage } from './pages/error/error-page';
import { TodoListPage } from './pages/todo-list/todo-list-page';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navigate to='/todo-list' />} />
				<Route path='/todo-list' element={<TodoListPage />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
