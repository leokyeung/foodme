import React from "react";
import Search from "./Search.jsx"
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        list: []
      };
   
    }

    componentDidMount() {
      $.ajax({
        type: "GET",
        url: '/foodlist',
        dataType: 'json',
        success: (data) => {
          this.setState({
            list : data
          })
        }
      })
    }    
  
    render() {
      return (
        <div>
          <Search/>
        </div>
      );
    }
  }
  
export default App