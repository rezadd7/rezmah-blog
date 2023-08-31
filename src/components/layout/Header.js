import React from 'react';

import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';

function Header() {
    return (
        <AppBar position='sticky'>
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography component="h1" variant='h5' fontWeight='bold' flex={1}>وبلاگ rezmah</Typography>
                    <BookIcon></BookIcon>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;