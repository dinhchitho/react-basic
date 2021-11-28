import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
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
  addNewJob = (job) => {
    console.log(job);
    this.setState({
      arrJobs:[...this.state.arrJobs,job],
    })
  }
  render() {
    return (
      <>
      <AddComponent addNewJob={this.addNewJob}/>
        <ChildComponent
            arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}

export default MyComponent;
