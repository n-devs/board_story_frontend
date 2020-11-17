import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory } from "react-router-dom";
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TwinBcrypt from 'twin-bcrypt'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import socketIOClient from 'socket.io-client'



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// หน้า ลงชื่อเข้าใช้
export default function SignIn() {
  const classes = useStyles();
  const [endpoint] = React.useState("http://localhost:9000")
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    email: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const [alert, setAlert] = React.useState({
    open: false,
    msg: "",
    severity: ""
  });
  const socket = socketIOClient(endpoint)

  let history = useHistory();

  // ฟังก์ชัน ไปหน้า ลงชื่อเข้าใช้
  function partToLogin() {
    history.push("/login");
  }
 // ฟังก์ชัน ไปหน้า home
  function partToHome() {
    history.push("/");
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

   // ฟังก์ชัน ดู password
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function handleClose() {
    setAlert({
      open: false,
      msg: "",
      severity: ""
    })
  }

   // ฟังก์ชัน ตรวจสอบการลงชื่อเข้าใช้งาน
  function ActiveLogin() {
    TwinBcrypt.hash(values.password, function (hash) {
      console.log(hash);
    })
    socket.emit('login', {
      email: values.email,
      password: values.password
    })

    socket.on('login', (data) => {
      setAlert(data)
      if (data.severity === "success") {
        sessionStorage.setItem('auth', true)
        sessionStorage.setItem('token', data.token)
        window.location.replace('/')
      }
    })
  }

  return (
    <Container >
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
            <Button color="inherit" onClick={partToLogin}>Login</Button>
          </Grid>

        </Grid>
        <Skeleton animation={false} style={{
          height: 5
        }} />
      </Box>
      <Container maxWidth="xs" >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in admin
        </Typography>
          <FormControl className={clsx(classes.form, classes.textField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-email">Email Address</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              type={values.showemail ? 'text' : 'email'}
              value={values.email}
              onChange={handleChange('email')}
              labelWidth={70}
            />
          </FormControl>
          <FormControl className={clsx(classes.form, classes.textField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={ActiveLogin}
            className={classes.submit}
          >
            Sign In
          </Button>
        </div>
      </Container  >
      <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert.severity}>
          {alert.msg}
        </Alert>
      </Snackbar>
    </Container>
  );
}