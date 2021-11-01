//import React libraries and components
import React from "react";
import { Movies } from "./movies";
import axios from "axios";

//start Read class - export used in order to use component elsewhere
export class Read extends React.Component {
    //new object used to store property values that belongs to the component
    //state is used to represent an information about the component's current situation
    state = {
        //movies object with JSON data
        movies: []
    };//end state
    //Promise
    //componentDidMount() is invoked immediately after a component is inserted into the tree.
    //Initialization that requires DOM nodes goes here. 
    //Instantiate the network request To load data from a remote endpoint,
    componentDidMount() {//component lifecycle
        //promise - axios get request to jsonblob URL
        //library that serves to create HTTP requests that are present externally
        //data is read from JSON server.js - port 4000
        axios.get('http://localhost:4000/api/movies')
            //fulfilled promise - when everything works it will update State with response from URL
            .then(
                (response) => {
                    this.setState({ movies: response.data.movies })
                }
            )
            //rejected promise - if there is an error it will print to console
            .catch(
                (error) => {
                    console.log(error)
                }
            );
    }//end componentDidMount
    //start render method
    render() {
        //returns div tag content and print to screen 
        return (
            <div>
                <h1>This is the Read component with Movies.</h1>
                {/*embeds movies component in read component*/}
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }//end render method
}//end Read class