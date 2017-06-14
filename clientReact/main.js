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
	getDefaultProps: function(){
		console.log('getting default props')
	},
	
	getInitialState: function(){
		return{
			count: 0,
		}
	},
	
	componentWillMount: function(){
		console.log(this.state)
		console.log(this.props)
		console.log('component is mounting')
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
	},

	componentDidMount: function(){
		console.log('component has rendered')
		this.interval = setInterval(this.increment, 1000)
	},

	componentWillUnmount: function(){
		clearInterval(this.interval)
		console.log('component unmounted')
	}
})

var LifecycleContainer = React.createClass({
	mount: function(){
		ReactDOM.render(
			<LifeComponent />,
			document.getElementById('renderHere')

		)
	},
	unmount: function(){
		ReactDOM.unmountComponentAtNode(
			document.getElementById('renderHere')
		)
	},
	
	render: function(){
		console.log('Lifecycle container rendered')
		return(
		<div>
			<button onClick={this.mount}>Mount</button>
			<button onClick={this.unmount}>Unmount</button>
			<div id="renderHere"></div>
		</div>
		
		)
	}
})





ReactDOM.render(
	<div>
		<LifecycleContainer />
	</div>,
	destination
)