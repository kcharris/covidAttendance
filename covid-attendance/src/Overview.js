import React from "react";

class Overview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            students: [],
            mode: true, //used to switch between attendance and group modes
            //option to switch student locations
        }
    }
    render(){
        <OptionBar mode/>
    }
}
