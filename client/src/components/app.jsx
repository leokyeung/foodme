import React from "react";
import Search from "./Search.jsx";
import Food from "./Food.jsx";
import TotalCalories from "./TotalCalories.jsx"
import './style.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      totalCal: 0
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

        <h2 className="foodheading">Total Food my ass ate</h2>
        {this.state.list.map((item) => {
          return <Food key={item.id} list={item}/>
        })}

        <TotalCalories list={this.state.list}/>

        


      </div>
    );
  }
}

export default App