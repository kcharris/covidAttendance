import React from "react";
import OptionBar from "./OptionBar"
import Student from "./Student"


class Overview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            groupBool: false,
            groupColor: 'blue',
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

    render() {
        let nList = []
        if (this.state.students.length !== 0) {
            for (let i = 0; i < this.state.students.length; i++) {
                nList.push(<Student student={this.state.students[i]} gBool={this.state.groupBool} key={this.state.students[i].id} handleStudentGroupClick={this.handleStudentGroupClick} />)
            }
        }

        return (
            <div>
                <OptionBar onAClick={this.handleAttendanceClick} onGClick={this.handleGroupClick} />
                {nList}
            </div>
        )
    }
}
export default Overview
