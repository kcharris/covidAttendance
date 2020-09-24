import React from "react";
import OptionBar from "./OptionBar"
import Student from "./Student"

/*
originally, I tried creating both students and the output array containing the <student> component list inside of setState. This did not work because student was not defined
Then, I tried moving messing around with functions to no avail. I knew the syntax sort of well but I kept trying
Then when that failed I tried to move both into functions that would run when the program begins to output the table without having to double click, sort of. There were multiple
Then, after messing around for a while I got it to work, component did mount, in addition to moving the initial setState of a student fill function allowed my to create
a output format.
I still had an update issue. That was fixed with component will update after figuring out I needed both parameters to specify the precState, which was the second.
Finally, at least for this problem, I removed the component did mount and component did update in favor of list that rerenders every time the render is called.
*/
class Overview extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            groupBool: false,
            groupColor: 'blue',
            students: (() => {
                let newDict = []
                for(let i = 0; i < 20; i++){
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
    handleStudentGroupClick(studentId){
        this.setState((state) => {
            return({
                students: (() => {
                    let newStudents = state.students.map((student) => {
                        if(student.id === studentId){
                            let newStudent = student
                            newStudent.color = this.state.groupColor
                            return newStudent
                        }
                        else{
                            return student
                        }
                    })
                    
                    return newStudents
                })(),
            })
        })
    }

    render(){
        let nList = []
        if(this.state.students.length !== 0){
            for (let i = 0; i < this.state.students.length; i++) {
                nList.push(<Student student={this.state.students[i]} gBool={this.state.groupBool} key={this.state.students[i].id} handleStudentGroupClick={this.handleStudentGroupClick}/>)
            }
        }
    
        return(           
            <div>
                <OptionBar onAClick={this.handleAttendanceClick} onGClick={this.handleGroupClick}/>
                {nList}
            </div>
        )}
}
export default Overview
