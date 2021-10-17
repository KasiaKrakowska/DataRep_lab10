//import React libraries and components
import React from "react";
import { Movies } from "./movies";

//start Read class - export used in order to use component elsewhere
export class Read extends React.Component {
    //new object used to store property values that belongs to the component
    //state is used to represent an information about the component's current situation
    state = {
        //movies object with JSON data
        movies: [
            {
                "Title": "Avengers: Infinity War",
                "Year": "2018",
                "imdbID": "tt4154756",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
                "Title": "Captain America: Civil War",
                "Year": "2016",
                "imdbID": "tt3498820",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
                "Title": "Charlie Wilson's War",
                "Year": "2007",
                "imdbID": "tt0472062",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg"
            }
        ]
    };
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