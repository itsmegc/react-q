import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBIcon } from "mdbreact";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  all: {
    borderRadius: 20,
    background: "#0063cc",
    height: "30px",
    color: "white",
  },
  correct: {
    borderRadius: 20,
    border: "1px solid #1a1a1a1a",
    height: "30px",
  },
  wrong: {
    borderRadius: 20,
    border: "1px solid #1a1a1a1a",
    height: "30px",
  },
});

function Result() {
  const classes = useStyles();

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          backgroundColor: "rgb(66, 133, 244)",
          justifyContent: "space-evenly",
          height: "40px",
          alignItems: "center",
        }}
      >
        <MDBIcon icon="clock" style={{ color: "rgb(180 202 239)" ,    fontSize:"20px"}} />
        <div>
          <h6 style={{ color: "white" }}>Time Taken</h6>
        </div>
        <div>
          <h6>1 Hr 32 Mins</h6>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "15px",
        }}
      >
        <Button className={classes.all}>ALL</Button>
        <Button className={classes.correct}>CORRECT</Button>
        <Button className={classes.wrong}>WRONG</Button>
      </div>

      <MDBTable bordered>
        <MDBTableHead>
          <tr>
            <th>Questions</th>
            <th>Ansewrs</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>1</td>
            <td>
              D<MDBIcon
                far
                icon="check-circle"
                style={{ color: "rgb(67, 160, 71)", marginLeft: "5px" }}
              />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>B<MDBIcon far icon="times-circle"
            style={{ color: "#f97c7c", marginLeft: "5px" }}
            /></td>
          </tr>
          <tr>
            <td>3</td>
            <td>A<MDBIcon
            far
            icon="check-circle"
            style={{ color: "rgb(67, 160, 71)", marginLeft: "5px" }}
          /></td>
          </tr>
          <tr>
            <td>4</td>
            <td>D<MDBIcon far icon="times-circle"
            style={{ color: "#f97c7c", marginLeft: "5px" }}
            /></td>
          </tr>
          <tr>
            <td>5</td>
            <td>A<MDBIcon
            far
            icon="check-circle"
            style={{ color: "rgb(67, 160, 71)", marginLeft: "5px" }}
          /></td>
          </tr>
          <tr>
            <td>6</td>
            <td>A<MDBIcon
            far
            icon="check-circle"
            style={{ color: "rgb(67, 160, 71)", marginLeft: "5px" }}
          /></td>
          </tr>
          <tr>
            <td>7</td>
            <td>D<MDBIcon
            far
            icon="check-circle"
            style={{ color: "rgb(67, 160, 71)", marginLeft: "5px" }}
          /></td>
          </tr>
          <tr>
            <td>8</td>
            <td>B<MDBIcon
            far
            icon="check-circle"
            style={{ color: "rgb(67, 160, 71)", marginLeft: "5px" }}
          /></td>
          </tr>
          <tr>
            <td>9</td>
            <td>A<MDBIcon
            far
            icon="check-circle"
            style={{ color: "rgb(67, 160, 71)", marginLeft: "5px" }}
          /></td>
          </tr>
          <tr>
            <td>10</td>
            <td>D<MDBIcon
            far
            icon="check-circle"
            style={{ color: "rgb(67, 160, 71)", marginLeft: "5px" }}
          /></td>
          </tr>
          <tr>
            <td>11</td>
            <td>D<MDBIcon
            far
            icon="check-circle"
            style={{ color: "rgb(67, 160, 71)", marginLeft: "5px" }}
          /></td>
          </tr>
          <tr>
            <td>12</td>
            <td>A<MDBIcon
            far
            icon="check-circle"
            style={{ color: "rgb(67, 160, 71)", marginLeft: "5px" }}
          /></td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default Result;
