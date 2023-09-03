import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';

import { GET_AUTHOR_INFO } from '../../graphql/queries';
import { Avatar, Grid, Typography } from '@mui/material';



function AuthorPage() {
    const {slug} = useParams();

    const {loading, data, errors} = useQuery(GET_AUTHOR_INFO, {
        variables: {slug}
    })

    if (loading) return <h4>Loading ...</h4>

    if(errors) return <h4>Error ...</h4>
    
    const {author} = data;

    return (
        <Grid  maxWidth="lg">
            <Grid container mt={10}>
                <Grid item xs={12} display="flex" flexDirection="column" alignItems="center">
                    <Avatar src={author.avatar.url} sx={{width: 250, height: 250}}/>
                    <Typography component="h3" variant='h5' fontWeight={700} mt={4}>
                        {author.name}
                    </Typography>
                    <Typography component="h3" variant='h5' color="text.secondary">
                        {author.field}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    {author.description.html}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default AuthorPage;