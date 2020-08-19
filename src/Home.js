import React, { Component, Fragment } from 'react';
import { exact } from 'prop-types';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }
    componentDidMount() {
    }
    setAge(age){
        this.setState({age});
    }
    render() {
        return (
            <Fragment>
                <h1>this is home</h1>
                {this.props.name && <h1>{this.props.name}</h1>}
                {this.state.age && <h1 className='age'>{this.state.age}</h1>}
                <button onClick={()=>this.setAge(100)}>set age to 100</button>
                <button onClick={()=>this.setAge(200)}>set age to 200</button>
            </Fragment>
        )
    }
}
export default Home;