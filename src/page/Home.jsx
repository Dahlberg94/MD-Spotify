import {Box, Button} from '@mui/material'

const Home = () => {
    return (
    <Box sx={{
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems:	'center',
        flexDirection: 'column',
        gap: 5
    }}>
        <img src="/Spotify_Logo.png" alt="" style={{maxWidth:'50%', maxHeight: '50%'}} />
        <Button size='large' variant='contained' href="https://marcus-dahlberg.vercel.app/" > Min Portfolio </Button>
    </Box>
    );
};

export default Home