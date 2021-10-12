import React from "react";
import { MovieItem } from "./movieItem";

//start Movies class - export used in order to use component elsewhere
export class Movies extends React.Component {
    //start render method
    render() {
        //acquires data from movies using arrow function
        return this.props.movies.map( (movie)=>{
            return <MovieItem movie = {movie}></MovieItem>
        })
    }//end render method
}//end Movies class

