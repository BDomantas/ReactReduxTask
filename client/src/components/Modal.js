import React, { PureComponent } from "react";
import "../App.css";
export default class Modal extends PureComponent {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.visible) {
      return null;
    }

    const backdropStyle = {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
      padding: 50
    };

    const modalStyle = {
      backgroundColor: "#fff",
      display: "inline-flex",
      flexDirection: "column",
      justifyContent: 'center'
    };

    const footer = {
      
    }

    return (
      <div style={ backdropStyle }>
        <div style={ modalStyle }>
          {this.props.children}
          <div style={footer}>
            <button className="xButton" onClick={this.props.onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}
