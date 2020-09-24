import React from "react";

class OptionBar extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.onAClick} style={{ backgroundColor: "lightgreen" }}>Attendance</button>
                <button onClick={this.props.onGClick} style={{ backgroundColor: "lightblue" }}>Groups</button>
            </div>
        )
    }
}
export default OptionBar
