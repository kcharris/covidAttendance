import React from "react";
import OptionBar from "./OptionBar"
import Student from "./Student"


class Overview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            groupBool: false,
            groupColor: 'lightblue',
            students: (() => {
                let newDict = []
                for (let i = 0; i < 20; i++) {
                    newDict.push(
                        {
                            name: `student${i + 1}`,
                            color: 'white',
                            id: i
                        }
                    )
                }
                return newDict
            })(),
        }

        this.handleAttendanceClick = this.handleAttendanceClick.bind(this);
        this.handleGroupClick = this.handleGroupClick.bind(this);
        this.handleStudentGroupClick = this.handleStudentGroupClick.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this)
        this.resetColor = this.resetColor.bind(this)
    }
    handleAttendanceClick() {
        this.setState({
            groupBool: false
        })
    }
    handleGroupClick() {
        this.setState({
            groupBool: true
        })
    }
    handleStudentGroupClick(studentId) {
        this.setState((state) => {
            return ({
                students: (() => {
                    let newStudents = state.students.map((student) => {
                        if (student.id === studentId) {
                            let newStudent = student
                            newStudent.color = this.state.groupColor
                            return newStudent
                        }
                        else {
                            return student
                        }
                    })

                    return newStudents
                })(),
            })
        })
    }
    handleColorChange(e) {
        this.setState({
            groupColor: e.target.value
        })
    }
    resetColor() {
        this.setState((state) => {
            return ({
                students: state.students.map((student) => {
                    let newStudent = student
                    newStudent.color = "white"
                    return newStudent
                })
            })
        })
    }

    render() {
        let nList = []
        let select = ""
        if (this.state.students.length !== 0) {
            for (let i = 0; i < this.state.students.length; i++) {
                nList.push(<Student student={this.state.students[i]} gBool={this.state.groupBool} key={this.state.students[i].id} handleStudentGroupClick={this.handleStudentGroupClick} />)
            }
        }
        if (this.state.groupBool) {
            select = <select value={this.state.groupColor} onChange={this.handleColorChange}>
                <option value="yellow">Yellow</option>
                <option value="sienna">Sienna</option>
                <option value="lightblue">Light Blue</option>
                <option value="purple">purple</option>
                <option value="orange">Orange</option>
                <option value="tan">Tan</option>
            </select>
        }
        else {
            select = <div></div>
        }

        return (
            <div>
                <OptionBar onAClick={this.handleAttendanceClick} onGClick={this.handleGroupClick} />
                <button onClick={this.resetColor}>Reset Group Color</button>
                {select}
                <div id="list">
                    {nList}
                </div>
            </div>
        )
    }
}
export default Overview
