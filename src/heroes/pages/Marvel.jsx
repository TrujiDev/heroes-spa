import React from 'react';
import { HeroList } from '../components';

export const Marvel = () => {
	return (
		<>
			<h1>Marvel Heroes</h1>
			<hr />

			<HeroList publisher={'Marvel Comics'} />
		</>
	);
};
