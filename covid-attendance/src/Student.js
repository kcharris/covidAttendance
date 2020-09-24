import React from "react";

class Student extends React.Component{
    
    render(){
        let button = <div></div>
        if(!this.props.gBool){
            button = <button style={{backgroundColor: "lightgreen"}}>{this.props.student.name}</button>
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