import React, { Component } from "react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import "./NewTodo.css";
import * as actionTypes from "../../../store/actions/actionTypes";
import * as actionCreators from "../../../store/actions/index";
class NewTodo extends Component {
  state = {
    title: "",
    content: "",
    // submitted: false,
  };

  postTodoHandler = () => {
    // const data = { title: this.state.title, content: this.state.content };
    // alert("submitted" + data.title);
    // // this.props.history.push('/todos');
    // this.setState({ submitted: true });

    this.props.onStoreTodo(this.state.title, this.state.content);
    this.props.history.goBack();
    // this.setState({ submitted: true });
  };

  render() {
    // this.props.onStoreTodo;
    // 이렇게 안해도 되게 props에 붙였음
    // let redirect = null;
    // if (this.state.submitted) {
    //   redirect = <Redirect to="/todos" />;
    // }
    return (
      <div className="NewTodo">
        <h1>Add a New Todo!</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        ></input>
        <label>Content</label>
        <textarea
          rows="4"
          type="text"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        ></textarea>
        <button onClick={() => this.postTodoHandler()}>Submit</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStoreTodo: (title, content) =>
      dispatch(actionCreators.postTodo({ title: title, content: content })),
  };
};
export default connect(null, mapDispatchToProps)(NewTodo);
