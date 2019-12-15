import React from "react";
import Search from "./Search.jsx";
import Food from "./Food.jsx";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };

    this.getFoodDB = this.getFoodDB.bind(this);
  }

  componentDidMount() {
    this.getFoodDB();
  }

  getFoodDB() {
    $.ajax({
      type: "GET",
      url: '/foodlist',
      dataType: 'json',
      success: data => {
        this.setState({
          list: data
        })
      }
    })
  }


  render() {
    return (
      <div>
        <Search getfood={this.getFoodDB}/>

        {this.state.list.map((item) => {
          return <Food key={item.id} list={item}/>
        })}
      </div>
    );
  }
}

export default App