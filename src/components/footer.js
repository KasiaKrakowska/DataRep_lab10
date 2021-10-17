//imports React library
import React from "react";

//start Footer class - export used in order to use component elsewhere
export class Footer extends React.Component {
    //start render method
    render() {
        //returns div tag content and print to screen 
        return (
            <div>
                <h1>My Footer in another component.</h1>
            </div>
        )
    };//end render method
}//end Footer class