import React from 'react';
import { Header, ShearchName, Swipeable, ShearchProvince, MediaCard } from '@bsf/components';
import { Grid, Paper, Box, Container, Button, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory } from "react-router-dom";
import socketIOClient from 'socket.io-client'
import TextField from '@material-ui/core/TextField';

function Admin(props) {
    const [endpoint] = React.useState("http://localhost:9000")
    const socket = socketIOClient(endpoint)
    const [data, setData] = React.useState(null)
    const [value, setValue] = React.useState('');

    let history = useHistory();

    function partToCreateBlog() {
        history.push("/create-blog");
    }

    function ActiveLogout() {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('auth')
        window.location.replace('/')
    }

    function partToHome() {
        history.push("/");
    }

    const handleChange = (event) => {
        setValue(event.target.value);

        if (event.target.value === "") {
            socket.emit('get_all_blog', data)

            socket.on('get_all_blog', (_data) => {
                // console.log(_data);
                setData(_data)
            })
        } else {
            socket.emit('search_blog', event.target.value)

            socket.on('search_blog', (_data) => {
                // console.log(_data);
                setData(_data)
            })
        }
    };


    React.useEffect(() => {
        socket.emit('get_all_blog', data)

        socket.on('get_all_blog', (_data) => {
            console.log(_data);
            setData(_data)
        })
    },[])

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
                        <Button color="inherit" onClick={ActiveLogout}>Logout</Button>

                    </Grid>

                </Grid>
                <Skeleton animation={false} style={{
                    height: 5
                }} />
            </Box>
            <Box my={2} style={{
                display: 'flex',
                justifyContent: ' flex-end',
            }}>
                <Button onClick={partToCreateBlog} variant="contained" color="primary">สร้างบทความ</Button>
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
                                    <TextField
                                        id="standard-search"
                                        label="ค้นหา"
                                        multiline
                                        rowsMax={4}
                                        value={value}
                                        onChange={handleChange}
                                    />
                                </div>

                            </Grid>
                        </Grid>

                        {data !== null ? data.map((_data, index) => (
                            <Grid key={index} item xs style={{
                                display: 'contents'
                            }}>
                                <Box my={2}>

                                    <MediaCard status={true} {..._data}></MediaCard>
                                </Box>
                            </Grid>
                        )):(<React.Fragment></React.Fragment>)}


                    </Grid>
                </Paper>
            </Box>
        </Container>
    )
}

export default Admin;