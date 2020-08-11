import React, { Component } from "react";
import { MDBBtn, MDBCollapse, MDBIcon } from "mdbreact";

class Solutions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: "",
    };
  }

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));
  };

  render() {
    return (
      <div style={{ marginLeft: "65px" }}>
        <MDBBtn
          color="none"
          onClick={this.toggleCollapse("basicCollapse")}
          style={{
            marginBottom: "1rem",
            color: "rgb(67, 160, 71)",
            boxShadow: "none",height:'35px'
          }}
        >
         <h5>SOLUTIONS :</h5> 
        </MDBBtn>
        <MDBCollapse
          id="basicCollapse"
          isOpen={this.state.collapseID}
          style={{ marginLeft: "50px" }}
        >
          <p style={{ margin: "0px" }}>General identity </p>

          <p style={{ margin: "0px" }}>Let us consider (x+a)(x+b)</p>
          <p style={{ margin: "0px" }}>(x+a)(x+b)=(x+a)(x+b)</p>
          <p style={{ margin: "0px" }}>=x(x+b) + a(x+b)</p>
          <p style={{ margin: "0px" }}>=x2 + bx + ax + ab </p>
          <p style={{ margin: "0px" }}>=x2 + (a+b)x + ab</p>
          <p style={{ margin: "0px" }}>Thus,(x+a)(x+b)=x2 + (a+b)x+ab</p>
        </MDBCollapse>

        <hr></hr>

        <div style={{ display: "flex", justifyContent: "space-between",margin:'5px' }}>
          <div>
            {" "}
            <MDBIcon
              icon="chevron-circle-left"
              style={{ color: "#4285f4" }}
            />{" "}
            Previous{" "}
          </div>{" "}
          <div>2 of 30</div>
          <div>
            Next{" "}
            <MDBIcon icon="chevron-circle-right" style={{ color: "#4285f4" }} />{" "}
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default Solutions;
