var React = require('react'),
	ReactDOM = require('react-dom')


var destination = document.querySelector('#container')


// Counter Example

// var Counter = React.createClass({
// 	getInitialState: function(){
// 		return{
// 			count: 0,
// 		}
// 	},
// 	incrementValue: function(value){
// 		this.setState({
// 			count: this.state.count + value
// 		})
// 	},
// 	getDefaultProps: function(){
// 		return{
// 			valueOne: 1,
// 			valueTwo: 5,
// 			valueThree: 10,
// 			text: 'add',
// 		}
// 	},
// 	alert: function(){
// 		alert('Do not do it')
// 	},
// 	render: function(){
// 		return(
// 			<div>
// 			<h1>Counter:{this.state.count}</h1>
// 			<div>
// 				<Button text={`${this.props.text} ${this.props.valueOne}`}
// 				value={this.props.valueOne} clickHandler={this.incrementValue.bind(this,1)}/>
				
// 				<Button text={this.props.text +' '+ this.props.valueTwo}
// 				value={this.props.valueTwo} clickHandler={this.incrementValue.bind(this,5)}/>
				
// 				<Button text={this.props.text +' '+ this.props.valueThree}value={this.props.valueThree} clickHandler={this.incrementValue.bind(this, 10)}/>
// 				<Button text='Alert' clickHandler={this.alert}/>
// 			</div>
// 			</div>
// 		)
// 	}
// })

// var Button = function(any){
// 	return(
// 		<button value={any.value} onClick={any.clickHandler}>{any.text}</button>
// 	)
// }

// List Example

// var List = React.createClass({
// 	getInitialState: function(){
// 		return{
// 			tasks: [
// 				{title: 'clean dishes', id: 1},
// 				{title: 'take out trash', id: 2},
// 				{title: 'walk the dog', id: 3}

// 			]
// 		}
// 	},

// 	render: function(){
// 		return(
// 			<ul>
// 				{this.state.tasks.map(function(task){
// 					return <Task title={task.title} key={task.id}/>
// 				})}
// 			</ul>

// 		)
// 	}
// })

// var Task = function(props){
// 	return(

// 		<li>Task: {props.title} </li>
// 	)
// }

// Lifecycle of Components

var LifeComponent = React.createClass({
	getInitialState: function(){
		return{
			count: 0,
		}
	},
	increment: function(){
		this.setState({
			count: this.state.count + 1
		})
	},
	render: function(){
		return(
			<button onClick={this.increment}>{this.state.count}</button>
		)
	}
})







ReactDOM.render(
	<div>
		<LifeComponent />
	</div>,
	destination
)