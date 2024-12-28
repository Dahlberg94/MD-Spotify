import './App.css';
import { Stack, Button, Box } from '@mui/material';
import Dashboard from './Components/Da/Dashboard';
import Login from './page/Login'
import { getAccessToken } from './utils/getAccessToke';
import { getAccessTokenFromStorage } from './utils/getAccessTokenFromStorage';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App({ spotifyApi }) {
	const [token, setToken] = useState(getAccessTokenFromStorage());

	useEffect(() => {
		const accessToken = getAccessTokenFromStorage() || getAccessToken() ;
		if(accessToken) {
			setToken(accessToken);
			sessionStorage.setItem('spotifyToken', accessToken);
			window.location.hash = '';
		}
	}, []);

	return (
		<Box className="App" >
			{token ? (
				<Dashboard spotifyApi={spotifyApi} />
			) : (
				<Routes>
					<Route path="*" element={<Login />} />
				</Routes>
			)}
		</Box>
	);
}

export default App;
