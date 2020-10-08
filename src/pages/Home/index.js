import React from 'react';
import { Header, ShearchName, Swipeable, ShearchProvince, MediaCard } from '@bsf/components';
import { Grid, Paper, Box, Container, Button, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory } from "react-router-dom";


function Home(props) {



    let history = useHistory();

    function partToLogin() {
        history.push("/login");
    }

    function ActiveLogout() {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('auth')
        window.location.replace('/')
    }

    function partToHome() {
        history.push("/");
    }

  

    return (
        <Container>
            <Box my={2} >
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="baseline"
                    spacing={3}

                >
                    {/* <Grid item xs style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <Typography>Title</Typography>
                    </Grid> */}
                    <Grid item xs style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                    }}>
                        <Button color="inherit" onClick={partToHome}>Home</Button>
                    </Grid>
                    <Grid item xs style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}>
                        {props.status ? (<Button color="inherit" onClick={ActiveLogout}>Logout</Button>) : (<Button color="inherit" onClick={partToLogin}>Login</Button>)}

                    </Grid>

                </Grid>
                <Skeleton animation={false} style={{
                    height: 5
                }} />
            </Box>
            <Box my={2} style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Swipeable></Swipeable>
            </Box>

            <Box my={2}>
                <Paper style={{
                    padding: 20,
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"

                        spacing={3}
                    >
                        <Grid item xs
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                            style={{
                                display: 'contents'
                            }}>
                            <Grid item xs >
                                <div style={{
                                    padding: 10
                                }}>
                                    <ShearchName></ShearchName>
                                </div>

                            </Grid>
                        </Grid>

                        <Grid item xs style={{
                            display: 'contents'
                        }}>
                            <Box my={2}>

                                <MediaCard></MediaCard>
                            </Box>
                        </Grid>

                    </Grid>
                </Paper>
            </Box>
        </Container>
    )
}

export default Home;