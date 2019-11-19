import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VertButton from './VertButton';

const useStyles = makeStyles(theme => ({
  card: {
    width: '30%',
    maxHeight: 600,
    margin: '25px 25px'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function RecipeReviewCard(props) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
      
    <Card  className={classes.card}>
      <CardHeader 
        className="cardHeader"
        action={
            <VertButton/> 
          }
      />   
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          prop
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <typography>Show More</typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          prop
          </Typography>
          <Typography paragraph>
          prop
          </Typography>
          <Typography paragraph>
          prop
          </Typography>
          <Typography>
            prop
          </Typography>
          <Typography paragraph>
            prop
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  
  );
  
}