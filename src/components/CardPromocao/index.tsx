import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from '../../assets/img/ilha.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    background:'rgba(0,0,0,0.5)',
    margin:'20px'
  },
  media:{
    height:440
  },
  title:{
    fontSize:'2rem',
    fontWeight:'normal',
    color:'#fff'
  },
  desc:{
    fontSize:'1.1rem',
    color:'#ddd'
  }

});

const CardPromocao:React.FC = () => {
  const classes = useStyles();

  return (
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          alt="imagem de uma ilha"
          height="140"
          image={Image}
          title="Ilha "
        />
        <CardContent>
          <Typography 
            gutterBottom 
            variant="h5" 
            component="h2"
            className={classes.title}
          >
            Lizard
          </Typography>
          <Typography 
            variant="body2" 
            color="textSecondary" 
            component="p"
            className={classes.desc}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardPromocao;