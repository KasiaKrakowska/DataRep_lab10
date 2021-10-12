import React from "react";
import { Card } from "react-bootstrap";

//start MovieItem class - export used in order to use component elsewhere
export class MovieItem extends React.Component {
    //start render method
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                <p>{this.props.movie.Year}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }//end render method
}//end MovieItem class

