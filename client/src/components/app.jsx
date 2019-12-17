import React from "react";
import Search from "./Search.jsx";
import Food from "./Food.jsx";
import TotalCalories from "./TotalCalories.jsx"
import './style.css';
import ls from 'local-storage';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      dailyCal: 0,
      totalCal: 0,
      addInfo: false
    };

    this.getFoodDB = this.getFoodDB.bind(this);
    this.addDailyCal = this.addDailyCal.bind(this);
    this.changeToTrue = this.changeToTrue.bind(this);
    this.submitCal = this.submitCal.bind(this);
    this.removeFood = this.removeFood.bind(this);

  }

  componentDidMount() {

    this.getFoodDB();
    this.setState({
      addInfo: ls.get('addInfo'),
      dailyCal: ls.get('dailyCal')
    })


  }

  getFoodDB() {
    $.ajax({
      type: "GET",
      url: '/foodlist',
      dataType: 'json',
      success: data => {
        this.setState({
          list: data,
        })
      }
    })
  }

  changeToTrue() {
    this.setState({ addInfo: true });
    ls.set('addInfo', true);
  }

  removeFood(n) {
    var obj = { id: n }

    const currentdata = this.state.list;
    this.setState({
      list: currentdata.filter(data => data.id !== n),
    });
    $.ajax({
      type: "DELETE",
      url: '/delete',
      data: obj,
      success: this.getFoodDB,
      error: function (data) {
        console.log('Error:', data);
      }
    })
  }

  addDailyCal(e) {
    this.setState({ dailyCal: e.target.value });

  }

  submitCal(event) {
    event.preventDefault();
    ls.set('dailyCal', this.state.dailyCal);
  }




  render() {

    if (this.state.addInfo) {
      return (
        <div>

          <form class="form" onSubmit={this.submitCal} method="post">
            <label htmlFor="search" id="addmovie">Please add your daily calories intake</label>

            <input type="text" id="textbox" onChange={this.addDailyCal} />

            <button id="addbutton" type="submit" > Add this calories </button>
          </form>



          <Search getfood={this.getFoodDB} changeToTrue={this.changeToTrue} />


          <h2 className="foodheading">Total Food my ass ate </h2>

          {this.state.list.map((item) => {
            return <Food key={item.id} list={item} removeFood={this.removeFood} />
          })}

          <TotalCalories list={this.state.list} dailyCal={this.state.dailyCal} />

        </div>
      )
    } else {
      return (
        <div>
          <form className="form" onSubmit={this.submitCal} method="post">

            <label htmlFor="search" id="addmovie">Please add your daily calories intake</label>

            <input type="text" id="textbox" onChange={this.addDailyCal} />

            <button id="addbutton" type="submit">Add this calories </button>

          </form>

          <Search getfood={this.getFoodDB} changeToTrue={this.changeToTrue} />
        </div>

      )

    }


  }
}




export default App