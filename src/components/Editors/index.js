import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Editor from "@monaco-editor/react";

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

export default function Editors() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [code, setCode] = React.useState({ value: "" });
    const valueGetter = React.useRef();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    // const handleChangeCode = (prop) => (event) => {
    //     console.log( event.target.value);
    //     setCode({ ...code, [prop]: event.target.value });
    //   };

    function handleEditorDidMount(_valueGetter) {
        // setIsEditorReady(true);
        valueGetter.current = _valueGetter;
        setCode({ value: _valueGetter() })


        console.log(_valueGetter());
    }

    // function handleShowValue() {
    //     alert(valueGetter.current());
    //   }

    // React.useEffect(() => {
    //     setCode({ value: valueGetter.current() })
    // })


    return (
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
                    <Tab label="แสดงผล" {...a11yProps(1)} />
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
                        // value=""
                        editorDidMount={handleEditorDidMount}
                    // editorDidMount={true}
                    // loading={"Loading..."}
                    />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    แสดงผล
        </TabPanel>
            </SwipeableViews>
        </div>
    );
}
