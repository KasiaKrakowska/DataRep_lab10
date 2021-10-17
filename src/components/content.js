//imports React library
import React from "react";

//start Content class - export used in order to use component elsewhere
export class Content extends React.Component {
    //start render method
    render() {
        //returns div tag content and print to screen 
        return (
            <div>
                <h1>Hello World!</h1>
                {/*function to display time*/}
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        )//end return function
    };//end render method
}//end Content class