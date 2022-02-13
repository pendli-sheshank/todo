import React, { Component } from "react";

export class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ name: "Sheshank" }],
      enteredValue: "",
    };
  }

  onEnterValue = (e) => {
    this.setState({ enteredValue: e.target.value });
  };

  onAddBtn = (e) => {
    if (this.state.enteredValue !== "") {
      e.preventDefault();
      this.setState(
        {
          list: [{ name: this.state.enteredValue }, ...this.state.list],
          enteredValue: "",
        },
        () => {
          localStorage.setItem("todos", JSON.stringify(this.state.list));
        }
      );
    } else {
      alert("Enter Valid input");
    }
  };

  onDelete = (index) => {
    const updateList = [...this.state.list];
    updateList.splice(index, 1);
    this.setState({ list: updateList }, () => {
      localStorage.setItem("todos", JSON.stringify(this.state.list));
    });
  };
  componentDidMount() {
    const list = window.localStorage.getItem("todos");
    const SavedList = JSON.parse(list);
    console.log(SavedList);
    list && this.setState({ list: SavedList });
  }

  render() {
    return (
      <div className="container">
        <div>
          <form onSubmit={this.onAddBtn}>
            <input
              value={this.state.enteredValue}
              onChange={this.onEnterValue}
              placeholder="Enter ToDo here"
              type="text"
            />
            <button type="submit" className="btn btn-sm btn-primary">
              Add
            </button>
          </form>
        </div>
        <center>List</center>
        <ol className="col ml-3">
          {this.state.list.map((value, index) => {
            return (
              <div key={index} className="col mb-3">
                <div className="border d-flex  justify-content-between align-items-center">
                  <li className="ml-3 p-2 ">{value.name} </li>
                  <span
                    onClick={() => this.onDelete(index)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </span>
                </div>
              </div>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default AddTodo;
