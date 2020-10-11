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
const useStyles = makeStyles({
  root: {
    // maxWidth: 750,
  },
  media: {
    width: 750,
    height: 350,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const history = useHistory()

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
            <Typography variant="body2" color="textSecondary" component="p">
              {props.detail}
            </Typography>
          </CardContent>
        </CardActionArea>
        {props.status ? (
          <CardActions>
            <Button size="small" color="primary" onClick={() => {
              sessionStorage.setItem('page_id', props.id)
              history.push(`/blog/update/${props.id}`)
            }}>
              แก้ไขบทความ
        </Button>
          </CardActions>
        ) : (
            <React.Fragment></React.Fragment>
          )}
      </Card>
    </React.Fragment>
  );
}
