import React from "react";

//start Content class - export used in order to use component elsewhere
export class Content extends React.Component {
    //start render method
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        )
    };//end render method
}//end Content class