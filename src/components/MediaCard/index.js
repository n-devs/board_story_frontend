import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory, Switch, Route } from 'react-router-dom'
import { UpdateBlog } from '@bsf/pages';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import socketIOClient from 'socket.io-client'

const useStyles = makeStyles({
  root: {
  },
  media: {
    width: 750,
    height: 350,
  },
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function MediaCard(props) {
  const [endpoint] = React.useState("http://localhost:9000")
  const classes = useStyles();
  const history = useHistory()
  const [alert, setAlert] = React.useState({
    open: false,
    msg: "",
    severity: ""
  });
  const socket = socketIOClient(endpoint)

  function handleClose() {
    setAlert({
      open: false,
      msg: "",
      severity: ""
    })
    window.location.reload()
  }

  // ฟังก์ชัน ลบ blog 
  function ActiveRemove() {
    socket.emit('remove_id_blog', {
      id: props.id
    })
    socket.on('remove_id_blog', (data) => {
      setAlert(data)

    })
  }

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea onClick={() => {
          sessionStorage.setItem('page_id', props.id)
          history.push(`/blog/watch/${props.id}`)
        }}>
          <CardMedia
            className={classes.media}
            image={props.cover}
            title={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{
              maxHeight: '42px',
              whiteSpace: 'nowrap',
              maxWidth: '600px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
              {props.detail}
            </Typography>
          </CardContent>
        </CardActionArea>
        {props.status ? (
          <CardActions>
            {/* ปุ่ม แก้ไขบทความ */}
            <Button size="small" color="primary" onClick={() => {
              sessionStorage.setItem('page_id', props.id)
              history.push(`/blog/update/${props.id}`)
            }}>
              แก้ไขบทความ
        </Button>
            <Button size="small" color="primary" onClick={ActiveRemove}>
              ลบ
        </Button>

          </CardActions>
        ) : (
            <React.Fragment></React.Fragment>
          )}
      </Card>
      <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert.severity}>
          {alert.msg}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
