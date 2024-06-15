import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { Navbar } from '../../ui';
import { Marvel, Dc, Hero, Search } from '../pages';

export const HeroesRoutes = () => {
	return (
		<>
			<Navbar />

			<div className='container'>
				<Routes>
					<Route
						path='/'
						element={<Navigate to='/marvel' />}
					/>

					<Route
						path='marvel'
						element={<Marvel />}
					/>

					<Route
						path='dc'
						element={<Dc />}
					/>

					<Route
						path='hero/:id'
						element={<Hero />}
					/>

					<Route
						path='dc'
						element={<Search />}
					/>
				</Routes>
			</div>
		</>
	);
};
