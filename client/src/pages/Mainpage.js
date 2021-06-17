import React from "react";
import Highlights from '../components/Highlights';
import Categories from '../components/Categories';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundImage: "url('data:image/jpeg;base64,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')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'auto',
    width: 'full'
    // box-shadow: "5px 5px 15px 5px #000000";
  },
  highlights: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '2ch',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const MainPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} elevation={2}>
          <Highlights className={classes.highlights}/>
          <Categories/>
    </div>
  );
};

export default MainPage;

