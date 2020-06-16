import React,{Component} from 'react';
import Cardlist from '../components/Cardlist';
import {robots} from '../components/robots';
import Scroll from '../components/Scroll';
import Searchbox from'../components/Searchbox';
import './App.css';



class App extends Component
{
	constructor()
	{
		super();
		this.state={
			robots:{robots},
			searchfield:''
		}
	}
		onsearchchange=(event)=>
	{
		this.setState({ searchfield: event.target.value})
	}

	render(){
		
		const filterrobots=robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return !robots.length?
		 <h1>Loading</h1>:
		          <div className='tc'>
		           <h1 className='f1'>RoboFriends</h1>
		           <Searchbox searchchange={this.onsearchchange}/>
		           <Scroll>
		            <Cardlist robots={filterrobots}/>
		           </Scroll>
		          </div>
}
}
export default App;