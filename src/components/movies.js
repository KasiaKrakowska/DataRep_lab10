//import React libraries and components
import React from "react";
import { MovieItem } from "./movieItem";

//start Movies class - export used in order to use component elsewhere
export class Movies extends React.Component {
    //start render method
    render() {
        //acquires data from movies using arrow function //reloads after delete
        return this.props.movies.map((movie) => {
            return <MovieItem movie={movie} ReloadData={this.props.ReloadData}></MovieItem>
        })
    }//end render method
}//end Movies class

