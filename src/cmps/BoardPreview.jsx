
// export function BoardPreview ({board}){
    //     return(
        //         <Link to={`/board/${board._id}`} key={board._id}>
        //         <div key={board._id}>
        //             <h3>{board.title}</h3>
        //             <p>Created By: {(!board.createdBy) ? "Geust" : board.createdBy.fullname}</p>
        // <p>Created At: {(Date(board.createdAt)).substring(4, 15)}</p>
        //         </div>
        //         </Link>
        //     )
        // }
        
import { Link } from 'react-router-dom'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from '../assets/imgs/b101.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export function BoardPreview ({board}){
  const classes = useStyles();

    

  return (
    <Link to={`/board/${board._id}`}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {board.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Created By: {(!board.createdBy) ? "Geust" : board.createdBy.fullname}
          <br></br>
          Created At: {(Date(board.createdAt)).substring(4, 15)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}
