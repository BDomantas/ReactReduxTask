import React, { Component } from "react";
import { connect } from "react-redux";

import Modal from "../components/Modal";

import { chainedOperation } from "../redux/actions";

import "../App.css";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay: false,
      inputValue: ""
    };
  }

  handleSubmit = () => {
    this.props.chainedOperation("test").then(() => {
      this.setState({ overlay: true });
    });
  };

  handleTextChange = event => {
    if (event.target.value.length <= 10)
      this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div className="formService">
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleTextChange}
        />
        <button
          className="xButton"
          disabled={!/^[a-zA-Z0-9]+$/.test(this.state.inputValue)}
          onClick={this.handleSubmit}
        >
          Start
        </button>
        <Modal
          visible={this.state.overlay}
          onClose={() => this.setState({ overlay: false })}
        >
          <p>{this.props.facility.val3 * this.props.exposure.val5}</p>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  person: state.person,
  facility: state.facility,
  exposure: state.exposure
});

const mapDispatchToProps = {
  chainedOperation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
