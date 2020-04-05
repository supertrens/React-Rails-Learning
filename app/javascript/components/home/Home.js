import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import Table from "./Table/Table";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      course_modules: [
        {
          id: 1,
          title: "This is the title 1",
          description: "Lorem Ipsen",
          active: false,
        },
        {
          id: 2,
          title: "This is the title 1 2",
          description: "Lorem Ipsen",
          active: false,
        },
        {
          id: 3,
          title: "This is the title 1 3",
          description: "Lorem Ipsen",
          active: true,
        },
        {
          id: 4,
          title: "This is the title 1 4",
          description: "Lorem Ipsen",
          active: false,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <Table course_modules={this.state.course_modules} />
      </div>
    );
  }
}

export default Home;
