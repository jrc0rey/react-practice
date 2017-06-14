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

// var LifeComponent = React.createClass({
// 	getDefaultProps: function(){
// 		console.log('getting default props')
// 	},
	
// 	getInitialState: function(){
// 		return{
// 			count: 0,
// 		}
// 	},
	
// 	componentWillMount: function(){
// 		console.log(this.state)
// 		console.log(this.props)
// 		console.log('component is mounting')
// 	},
		
// 	increment: function(){
// 		this.setState({
// 			count: this.state.count + 1
// 		})
// 	},
	
// 	render: function(){
// 		return(
// 			<button onClick={this.increment}>{this.state.count}</button>
// 		)
// 	},

// 	componentDidMount: function(){
// 		console.log('component has rendered')
// 		this.interval = setInterval(this.increment, 1000)
// 	},

// 	componentWillUnmount: function(){
// 		clearInterval(this.interval)
// 		console.log('component unmounted')
// 	}
// })

// var LifecycleContainer = React.createClass({
// 	mount: function(){
// 		ReactDOM.render(
// 			<LifeComponent />,
// 			document.getElementById('renderHere')

// 		)
// 	},
// 	unmount: function(){
// 		ReactDOM.unmountComponentAtNode(
// 			document.getElementById('renderHere')
// 		)
// 	},
	
// 	render: function(){
// 		console.log('Lifecycle container rendered')
// 		return(
// 		<div>
// 			<button onClick={this.mount}>Mount</button>
// 			<button onClick={this.unmount}>Unmount</button>
// 			<div id="renderHere"></div>
// 		</div>
		
// 		)
// 	}
// })

// Lifecycle Updates

// var LikesComponent = React.createClass({
// 	updateLikes: function(){
// 		ReactDOM.render(
// 			<LikesComponent likes={this.props.likes +1}/>,
// 			destination
// 		)
// 	},
	
// 	getDefaultProps: function(){
// 		return({
// 			likes: 0,
// 		})
// 	},
	
// 	getInitialState: function(){
// 		return({
// 			popular: false,
// 		})
// 	},
	
// 	componentWillReceiveProps: function(nextProps){
// 		console.log('nex props')
// 		this.setState({
// 			popular: nextProps.likes >= 10
// 		})
// 	},
	
// 	shouldComponentUpdate: function(nextProps,nextState){
// 		return(
// 			nextProps.likes % 2 === 0
// 		)
// 	},
	
// 	render: function(){
// 		return(
// 			<div className="container">
// 				<h1>{this.state.popular ? "I'm popular" : "not popular"}</h1>
// 				<button onClick={this.updateLikes}>Likes: {this.props.likes}</button>
// 			</div>
// 		)
// 	},

// 	componentDidUpdate: function(prevProps,prevState){
// 		console.log('previous props', prevProps)
// 		console.log('previous states', prevState)
// 	}

// })

// ES6 Classes

// class NameOfComponent extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {count: 0}
// 		this.click = this.click.bind(this)
// 	}
// 	click(){
// 		console.log('clicked')
// 	}
// 	render(){
// 		return(
			// <div onClick={ () => this.click(10) }>{this.props.text}</div>
// 			<div className="container">
// 				<Button clickHandler={this.click} text="Hello"></Button>
// 			</div>
// 		)
// 	}
// }

// NameOfComponent.defaultProps = {text: 'Bitch'}
// NameOfComponent.propTypes = {text: React.PropTypes.string}

// stateless functional component
// const Button = (props) => {
// 	return(
// 		<button onClick={props.clickHandler}>{props.text}</button>
// 	)
// }

// ES 6 Counter Challenge
class NewCounter extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {count: 0}
		this.increment = this.increment.bind(this)
	}

	increment(value){
		this.setState({
			count: this.state.count + value
		})
				
	}
	
	render(){
		return(
			<div>
				<h1>{this.state.count}</h1>
				<Button clickHandler={() => this.increment(this.props.valueOne)} text="OneMofo"></Button>
				<Button clickHandler={() => this.increment(this.props.valueTwo)} text="OneMofo"></Button>
			</div>
		)

	}

}

NewCounter.defaultProps = {
	valueOne: 1,
	valueTwo: 5,
	valueThree: 10,
}

const Button = (props) => {
	return(
		<button onClick={props.clickHandler}>{props.text}</button>
	)
}





















ReactDOM.render(
	<div>
		<NewCounter />
	</div>,
	destination
)