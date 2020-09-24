import React from "react";

class Student extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            absent: false,
        }
        this.changeAttendance = this.changeAttendance.bind(this)
    }
    changeAttendance(){
        this.setState({
            absent: !this.state.absent
        })
    }
    
    render(){
        let button = <div></div>
        if(!this.props.gBool){
            button = <button onClick={this.changeAttendance} style={this.state.absent ? {backgroundColor: "red"}: {backgroundColor: "lightgreen"}}>{this.props.student.name}</button>
        }
        else{
            button = <button onClick={() => this.props.handleStudentGroupClick(this.props.student.id)} style={{backgroundColor: this.props.student.color}}>{this.props.student.name}</button>
        }
        return(<div>
                {button}
            </div>
        )
    }
}
export default Student