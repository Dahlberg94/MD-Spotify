import{Box,} from '@mui/material';
import {Routes, Route} from 'react-router-dom';
import Home from '../../page/Home';
import SideNav from '../SideNav/SideNav'
import { getAccessTokenFromStorage } from '../../utils/getAccessTokenFromStorage';
import { useEffect, useState } from 'react';
import Playlist from '../../page/Playlist';
import Player from '../Player/Player';
import MobileNav from '../MoblineNav/MobileNav';
import Library from '../../page/Library';


const Dashboard = ({ spotifyApi }) => {
	const [token, setToken] = useState(getAccessTokenFromStorage());
	useEffect(() => {
		const onMount = async () => {
			await spotifyApi.setAccessToken(token);
		};
		if (token) {
			onMount();
		}
	}, []);


    return (
        <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection:'column' }}>
            <Box sx={{ flex: 1, overflowY: 'auto', display: 'flex'}}>
                <SideNav spotifyApi={spotifyApi} token={null} />
                <Routes>
                    <Route  path='/playlist/:id' element={<Playlist spotifyApi={spotifyApi} token={null} />} />
                    <Route  path='/library' element={<Library spotifyApi={spotifyApi} token={null} />} />
                    <Route  path='/' element={<Home/>} />
                </Routes>
            </Box>
            {token && <Player spotifyApi={spotifyApi} token={token} />}
            <MobileNav />
        </Box>
    )
};

export default Dashboard;