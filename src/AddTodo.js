import React, { Component } from "react";
import LIstTodos from "./LIstTodos";

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
        <div className="d-flex  justify-content-center align-items-center">
          <form className="d-flex " onSubmit={this.onAddBtn}>
            <input
              className="card shadow  form-control-lg"
              value={this.state.enteredValue}
              onChange={this.onEnterValue}
              placeholder="Enter ToDo here"
              type="text"
            />
            <button type="submit" className="btn btn-sm btn-primary rounded ">
              Add
            </button>
          </form>
        </div>
        <hr />

        <h5>List of Todo's</h5>
        <hr />

        <div className="col ml-3 mt-5">
          {this.state.list.map((value, index) => {
            return (
              <div key={index} className="col mb-3 card shadow">
                <div className="border d-flex card-body   justify-content-between align-items-center">
                  <div className="ml-3 p-2 ">{value.name} </div>
                  <div>
                    <span
                      onClick={() => this.onDelete(index)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </span>
                    <span
                      onClick={() => this.onEdit(index)}
                      className="btn btn-sm btn-info text-white mx-2"
                    >
                      Edit
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AddTodo;
