import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
       marginRight: '3px'
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


const Questions = (props) => {
  const [state, setState] = React.useState({
    checkedA: true,
  });

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setState({ ...state, [event.target.name]: event.target.checked });
  //   };




  return (
    <div style={{ marginLeft: "65px",marginTop:'10px' }}>
      <p style={{ fontWeight: "600" }}>
        1. Let us consider(x+a)(x+b)(x+a)(x+b)=(x+a)(x+b)
      </p>
      <ol>
        <p>A. x(x+b)+a(x+b)</p>
        <p>B. x2+(a+b)x+ab</p>
        <p>C. (x+a)(x+b)</p>
        <div
          style={{
            backgroundColor: "#cff8cf",
            display: "flex",
            padding: "0 10px",
            alignItems: "center",
            width: "80%",
          }}
        >
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.checkedA}
                //onChange={handleChange}
                name="checkedG"
              />
            }
          />
          <p style={{ margin: "0px",color:'rgb(67 160 71)' }}> D. x2+(a+b)x+ab</p>
        </div>
      </ol>
      <hr></hr>
    </div>
  );
};

export default Questions;
