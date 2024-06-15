import React from 'react';
import { HeroList } from '../components';

export const Dc = () => {
	return (
		<>
			<h1>DC Heroes</h1>
			<hr />

			<HeroList publisher={'DC Comics'} />
		</>
	);
};
