import React from 'react';
import { Container, Grid, TextField, Paper, TextareaAutosize } from '@material-ui/core';
import { FullScreenDialog } from '@bsf/components'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Editor from "@monaco-editor/react";
import ReactMarkdown from 'react-markdown/with-html'
import socketIOClient from 'socket.io-client'
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { useParams } from 'react-router-dom'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function UpdateBlog(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [code, setCode] = React.useState("");
    const [data, setData] = React.useState({
        title: "",
        region: "",
        county: "",
        detail: "",
        img: ""
    });
    const [alert, setAlert] = React.useState({
        open: false,
        msg: "",
        severity: ""
    });
    const valueGetter = React.useRef();
    const [endpoint] = React.useState("http://localhost:9000")
    const socket = socketIOClient(endpoint)
    let { id } = useParams();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const handleChangeCode = (prop) => (event) => {
        setData({ ...data, [prop]: event.target.value });
    };

    function handleEditorDidMount(_valueGetter) {
        // setIsEditorReady(true);
        valueGetter.current = _valueGetter;

    }

    function update() {
        setCode(valueGetter.current())
    }

    function handleClose() {
        setAlert({
            open: false,
            msg: "",
            severity: ""
        })
    }

    function save() {
        socket.emit('update_blog', { id: id }, {
            title: data.title,
            detail: data.detail,
            region: data.region,
            county: data.county,
            cover: data.img,
            data: valueGetter.current()

        })

        socket.on('update_blog', (data) => {
            setAlert(data)
            window.location.replace('/')
        })
    }

    React.useEffect(() => {
        console.log('id', id);
        socket.emit('get_id_blog', id)

        socket.on('get_id_blog', (_data) => {
            setData({
                title: _data.title,
                region: _data.region,
                county: _data.county,
                detail: _data.detail,
                img: _data.cover
            })
            setCode(_data.data)
            // window.location.replace('/')
        })

    }, [])
    return (
        <FullScreenDialog title="แก้ไขบทความ" open={true} onClick={save}>
            <Container>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                >
                    {/* <Paper> */}
                    <Grid item xs={12}>
                        <TextField id="link-image" label="ลิ้งภาพ (ภาพหน้าปก)" value={data.img} onChange={handleChangeCode("img")} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="title" label="ชื่อห้วข้อ" value={data.title} onChange={handleChangeCode("title")} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="title" label="ภูมมิภาค" onChange={handleChangeCode("region")} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="title" label="จังหวัด" onChange={handleChangeCode("county")} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="detail" label="รายละเอียด" value={data.detail} onChange={handleChangeCode("detail")} />
                    </Grid>
                    <Grid item xs={12} style={{
                        width: '100%'
                    }}>
                        <div className={classes.root}>
                            <AppBar position="static" color="default">
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    variant="fullWidth"
                                    aria-label="full width tabs example"
                                >
                                    <Tab label="แก้ไขโค๊ด" {...a11yProps(0)} />
                                    <Tab label="แสดงผล" onClick={update} {...a11yProps(1)} />
                                </Tabs>
                            </AppBar>
                            <SwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={value}
                                onChangeIndex={handleChangeIndex}
                            >
                                <TabPanel value={value} index={0} dir={theme.direction}>
                                    {/* <button onClick={handleShowValue}>show</button> */}
                                    <Editor
                                        height="90vh" // By default, it fully fits with its parent
                                        theme="dark"
                                        language="html"
                                        value={code}
                                        editorDidMount={handleEditorDidMount}
                                        // editorDidMount={true}
                                        loading={"Loading..."}
                                    />
                                </TabPanel>
                                <TabPanel value={value} index={1} dir={theme.direction}>
                                    <ReactMarkdown source={code} escapeHtml={false}></ReactMarkdown>
                                </TabPanel>
                            </SwipeableViews>
                        </div>
                    </Grid>
                    {/* </Paper> */}
                </Grid>
            </Container>
            <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alert.severity}>
                    {alert.msg}
                </Alert>
            </Snackbar>
        </FullScreenDialog>
    )
}