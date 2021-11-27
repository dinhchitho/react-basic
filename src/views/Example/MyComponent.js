import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      {
        id: "abcJob1",
        title: "Developer",
        salary: "500 $",
      },
      {
        id: "abcJob2",
        title: "Tester",
        salary: "400 $",
      },
      {
        id: "abcJob3",
        title: "Manager",
        salary: "600 $",
      },
    ],
  };
  handleChangeFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };
  handleChangeLastName = (event) => {
    this.setState({ lastName: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    let { firstName, lastName } = this.state;
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => {
              this.handleChangeFirstName(event);
            }}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            onClick={(event) => {
              this.handleSubmit(event);
            }}
          />
        </form>
        <ChildComponent firstName={firstName} lastName={lastName} 
            arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}

export default MyComponent;
