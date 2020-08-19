import React from 'react';
import './Chatroom.css';
import  TextField  from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import  Button  from "@material-ui/core/Button";


function Chatroom() {
    const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));
      
      
        const classes = useStyles();
  return (
    <div className="Chatroom">
 <form className={classes.root} noValidate autoComplete="off">
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
  <Button variant="contained" color="primary">
  Send
</Button>
</form>
  );

     
    </div>
  );
}

export default Chatroom;
