import React from "react";
import './style.css';
import axios from 'axios';
import Calories from './Calories.jsx';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: [],
            loading: false,
            message: ''
        }
        this.handleOnInputChange = this.handleOnInputChange.bind(this);
        this.cancel = '';
        this.fetchSearchResults = this.fetchSearchResults.bind(this);
        this.addFoodDB = this.addFoodDB.bind(this);
    }

    fetchSearchResults(query) {
        if (this.cancel) {
            this.cancel.cancel();
        }
        this.cancel = axios.CancelToken.source();

        const options = {
            method: 'post',
            headers: {
                'x-app-id': 'c953b263',
                'x-app-key': '31dc7821d68f8ad47c7e8593af147f7c'
            },
            url: `https://trackapi.nutritionix.com/v2/natural/nutrients`,
            data: {
                "query": `${query}`
            },
            cancelToken: this.cancel.token
        };
        // POST request
        axios(options)
            .then(response => {
                let resultNotFound = !response.data.foods.length ? "Not found, please try a new search" : "";
                this.setState({
                    results: response.data.foods,
                    message: resultNotFound,
                    loading: false
                })
                console.log(response.data.foods)
            })
            .catch(error => {
                if (axios.isCancel(error) || error) {
                    this.setState({
                        loading: false,
                        message: "Failed to fetch the data"
                    })
                }
            })
    }

    handleOnInputChange(e) {
        let query = e.target.value;
        this.setState({
            query: query,
            loading: true,
            message: ""
        }, () => {
            this.fetchSearchResults(query);
        })
    }

    addFoodDB(e) {
        e.preventDefault();
        let obj = this.state.results[0]

        $.ajax({
          type: 'POST',
          url: "/food",
          data: obj,
          success: this.props.getfood
        });
        this.props.changeToTrue();
    }

    render() {
        // getting the value from this.state.query
        let { query } = this.state;
        return (
            <div>
                <div className="container">
                    <h2 className="heading">Calories Tracker</h2>
                    <label className='search-lablel' htmlFor='search-input'>
                        <input
                            type="text"
                            value={query}
                            id="search-input"
                            placeholder="Search....."
                            onChange={this.handleOnInputChange}
                        />

                    </label>
                    <i className="fa fa-search search-icon"></i>

            
                    {this.state.results.map( (item) => { return <Calories
                        key={item.ndb_no}
                        query={query}
                        results={item}
                        addFood={this.addFoodDB}
                        />

                    })}
                    
                    

                </div>
            </div>
        );
    }
}

export default Search