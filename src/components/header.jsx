import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    borderRadius: 20,
    background: '#1a1a1a1a',
    margin: '0 50px',
    height: '30px'

  },
});

function Header() {
  const classes = useStyles();

  return (
    <div style={{backgroundColor:'rgb(226 226 226 / 42%)',
    display: 'flex',alignItems: 'center',height:'40px'}}>
      <Button className={classes.root}>Back</Button>
      <h6><span style={{color:'#337ab7'}}>Assessment Test:</span>V Class-Maths/Batch Cl</h6>
    </div>
  );
}

export default Header;
