import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };
  handleShowJobs = () => {
    this.setState({showJobs: true});
  }
  handleHideJobs = () => {
    this.setState({showJobs: false});
  }
  handleShowHide = () => {
    this.setState({showJobs: !this.state.showJobs});
  }

  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
    return (
      <>
        {showJobs === false ? <div className="Show">
          <button onClick={() => this.handleShowHide()}>Show</button>
        </div>
        :
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.id} + {item.title} + {item.salary} <></><span onClick={() => this.handleOnClickDelete(item)}>x</span>
                  </div>
                );
              })}
            </div>
            <div className="Hide">
              <button  onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        }
      </>
    );
  }
}

// const ChildComponent = (props) => {
//   let {arrJobs } = props;
//   return (
//     <div className="job-lists">
//       {arrJobs.map((item, index) => {
//         return (
//           <div key={item.id}>
//             {item.id} + {item.title} + {item.salary}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

export default ChildComponent;
