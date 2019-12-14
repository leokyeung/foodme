import React from "react";
import '../style.css';

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          query: '',
          results: {},
          loading: false,
          message: ''
      }

    }
  
    render() {
      return (
        <div>
          <div className="container">
            <h2 className="heading">Search food</h2>
                <label className='search-lablel' htmlFor='search-input'>
                    <input type="text" value="" id="search-input" placeholder="Search....."/>

                </label>
                <i className="fa fa-search"></i>
        </div>          
        </div>
      );
    }
  }
  
export default Search