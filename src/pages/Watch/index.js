import React from 'react';
import { Header, ShearchName, Swipeable, ShearchProvince, MediaCard } from '@bsf/components';
import { Grid, Paper, Box, Container, Button, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory, useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown/with-html'
import socketIOClient from 'socket.io-client'

const tutorialSteps = [
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



function Watch(props) {
    let { id } = useParams();
    const [endpoint] = React.useState("http://localhost:9000")
    const socket = socketIOClient(endpoint)
    const [code, setCode] = React.useState("");
    const [data, setData] = React.useState({
        label: "",
        region: "",
        county: "",
        detail: "",
        imgPath: ""
    });
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

    React.useEffect(() => {
        console.log('id', id);
        socket.emit('get_id_blog', id)

        socket.on('get_id_blog', (_data) => {
            setData({
                label: _data.title,
                region: _data.region,
                county: _data.county,
                detail: _data.detail,
                imgPath: _data.cover
            })
            setCode(_data.data)
            // window.location.replace('/')
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
                <Swipeable imgSteps={[data]}></Swipeable>
            </Box>

            <Box my={2}>
                <Paper style={{
                    padding: 20,
                    
                    margin:'20px 0px',
                    // display: 'flex',
                    // justifyContent: 'center',
                }}>
                    <h3>ชื่อ: {data.label}</h3>
                    <h3>ภูมมิภาค: {data.region}</h3>
                    <h3>จังหวัด: {data.county}</h3>
                    <h3>รายละเอียด: {data.detail}</h3>
                </Paper>
                <Paper style={{
                    padding: 20,
                    // display: 'flex',
                    // justifyContent: 'center',
                }}>
                    <ReactMarkdown source={code} escapeHtml={false}></ReactMarkdown>
                </Paper>
            </Box>
        </Container>
    )
}

export default Watch;