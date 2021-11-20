//import React library
import React from "react";
import axios from "axios";


//start Edit class - export used in order to use component elsewhere
export class Edit extends React.Component {

    //constructor method - called automatically when we created an object from that class
    constructor() {
        super();
        //bind used to pass the data as an argument to the function of a class based component
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);

        this.state = {
            Title: "",
            Year: "",
            Poster: ""
        }//end state
    }//end constructor

    //a lifecycle hook that gets invoked right after a React component has been mounted
    componentDidMount() {
        //logs id to the console
        console.log(this.props.match.params.id);

        //a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser
        axios.get('http://localhost:4000/api/movies/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    Title: response.data.title,
                    Year: response.data.year,
                    Poster: response.data.poster
                })
            })
            //callback function if something goes wrong
            .catch((error) => {
                console.log(error);
            });
    }//end componentDidMount

    //start onChangeMovieName method
    onChangeMovieName(e) {
        //when the valuse changes - update state
        this.setState({
            Title: e.target.value
        });
    }//end onChangeMovieName

    //start onChangeMovieYear method
    onChangeMovieYear(e) {
        //when the valuse changes - update state
        this.setState({
            Year: e.target.value
        });
    }//end onChangeMovieYear

    //start onChangeMoviePoster method
    onChangeMoviePoster(e) {
        //when the valuse changes - update state
        this.setState({
            Poster: e.target.value
        });
    }//end onChangeMoviePoster

    //start onSubmit method with 1 argument "e"
    onSubmit(e) {
        e.preventDefault()//stops from calling submit multiple times
        alert("Movie: " + this.state.Title + " " + this.state.Year + " " + this.state.Poster);

        //creating object
        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster,
            _id: this.state._id
        }//end const newMovie

        //first parameter is the URL, and the 2nd is the HTTP request body
        axios.put('http://localhost:4000/api/movies/' + this.state._id, newMovie)
            .then(res => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.data);
            });

        //promise - send asynchronous HTTP requests to REST endpoints and perform CRUD operations
        //axios.post('http://localhost:4000/api/movies', newMovie)
        //then returns an object as Promise
        //.then((res) => {
        //console.log(res);
        //})
        //catch handles errors
        //.catch((err) => {
        //console.log(err);
        // });
    }//end onSubmit method

    //start render method
    render() {
        //returns div tag content with form and print to screen 
        return (
            <div className="App">
                <form onSubmit={this.onSubmit}>
                    {/*input control - title*/}
                    <div className="form-group">
                        <label>Add Movie Name: </label>
                        <input type="text"
                            className="form-control"
                            //value method - uses existing title
                            value={this.state.Title}
                            //onChange method - change movie title
                            onChange={this.onChangeMovieName}></input>
                    </div><br />

                    {/*input control - year*/}
                    <div className="form-group">
                        <label>Add Movie year: </label>
                        <input type="text"
                            className="form-control"
                            //value method - uses existing year
                            value={this.state.Year}
                            //onChange method - change movie year
                            onChange={this.onChangeMovieYear}></input>
                    </div><br />

                    {/*input control - poster*/}
                    <div className="form-group">
                        <label>Add Movie poster: </label>
                        <textarea type="text"
                            className="form-control"
                            //value method - uses existing poster
                            value={this.state.Poster}
                            //onChange method - change movie poster
                            onChange={this.onChangeMoviePoster}>
                        </textarea>

                    </div><br />
                    {/*submit button*/}
                    <div className="form-group">
                        <input type="submit"
                            value="Edit Movie"
                            className="btn btn-warning"></input>
                    </div>
                </form>
            </div>
        )//end return
    };//end render method
}//end Edit class


