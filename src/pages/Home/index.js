import React from 'react';
import { Header, ShearchName, Swipeable, ShearchProvince, MediaCard } from '@bsf/components';
import { Grid, Paper, Box, Container, Button, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory } from "react-router-dom";
import socketIOClient from 'socket.io-client'
import TextField from '@material-ui/core/TextField';

const tutorialStepss = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
        label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
        imgPath:
            'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];



function Home(props) {
    const [endpoint] = React.useState("http://localhost:9000")
    const socket = socketIOClient(endpoint)
    const [data, setData] = React.useState(null)
    const [value, setValue] = React.useState('');
    const [tutorialSteps, setTutorialSteps] = React.useState(null)
    let history = useHistory();

    // ฟังก์ชัน ลงชื่อเข้าใช้
    function partToLogin() {
        history.push("/login");
    }
    // ฟังก์ชัน ลงชื่อออก
    function ActiveLogout() {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('auth')
        window.location.replace('/')
    }

    // ฟังก์ชัน ไปหน้า home
    function partToHome() {
        history.push("/");
    }

    // ฟังก์ชัน ค้นหา
    const handleChange = (event) => {
        setValue(event.target.value);

        if (event.target.value === "") {
            socket.emit('get_all_blog', data)

            socket.on('get_all_blog', (_data) => {

                setData(_data)


            })
        } else {
            socket.emit('search_blog', event.target.value)

            socket.on('search_blog', (_data) => {
                setData(_data)
            })
        }
    };

    React.useEffect(() => {
        socket.emit('get_all_blog', data)

        socket.on('get_all_blog', (_data) => {
            // console.log(_data);
            setData(_data)
            const Steps = []
            _data.map(step => {
                Steps.push({
                    label: step.title,
                    imgPath: step.cover
                })
                setTutorialSteps(Steps)
            })
        })
    }, [])

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
                <Swipeable imgSteps={tutorialSteps ? tutorialSteps : tutorialStepss}></Swipeable>
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

                        {/* การ์ด ข้อมูล อุทยานต่างๆ */}
                        {data !== null ? data.map((_data, index) => (
                            <Grid key={index} item xs style={{
                                display: 'contents'
                            }}>
                                <Box my={2}>

                                    <MediaCard status={false} {..._data}></MediaCard>
                                </Box>
                            </Grid>
                        )) : (<React.Fragment></React.Fragment>)}

                    </Grid>
                </Paper>
            </Box>
        </Container>
    )
}

export default Home;