import React from "react";

//start Header class - export used in order to use component elsewhere
export class Header extends React.Component {
    //start render method
    render() {
        return (
            <div>
                <h1>This is the Header in another component.</h1>
            </div>
        )
    };//end render method
}//end Header class

