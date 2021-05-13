import {Component} from 'react';
import {CardList} from './component/card-list/card-list.component.jsx';
import {Search} from './component/search/search.component.jsx'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monster : [],
      searchFilter : ''
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response=> 
        Response.json()
      )
      .then(digvijay=> 
        this.setState({
          monster : digvijay,
          
        })
      )
  }
  render(){
    const {monster,searchFilter} = this.state;
    const monsterFilter = monster.filter(monster=>
      monster.name.toLowerCase().includes(searchFilter.toLowerCase())
    );
    console.log(monsterFilter)
    return (
      <div className="App">
       <h1>Monster Rolodex</h1>
        <Search  placeholder="search monster"
         handelChange={(e)=>this.setState({searchFilter:e.target.value})
         }/>
       <CardList monster={monsterFilter}/>
      </div>
    );
  }
  
}

export default App;
