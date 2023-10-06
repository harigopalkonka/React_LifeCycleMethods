import React, { Component } from 'react'

export default class LifeCycleMethods extends Component {
  
    constructor(props){
        super(props)
        this.state = {
            show:true,
            count: 0
        }
      }
      delHeader = () => {
        this.setState({show:false})
      }

      componentDidMount() {
        console.log('Component Did Mount Method !!!')
      }

      componentDidUpdate() {
        console.log('Component Did Update Method !!!!')
      }

  render() {
    let myheader;
    if(this.state.show) {
        myheader = <Child />
    }
    return (
      <div>
        <h1>Mainly 3 Parts In LifeCycle Methods</h1>
        <li>componentDidMount()</li>
        <li>componentDidUpdate()</li>
        <li>componentWillUnmount()</li><br/>
      
        {myheader}
        <button type='button' onClick={this.delHeader}>Delete Header</button><hr/>
        <h3>count: {this.state.count}</h3>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>

      </div>
    )
  }
}

class Child extends React.Component {
    componentWillUnmount() {
        console.log('Component Will Unmount Method !!!')
    }
    render() {
        return (
            <h1>Hello This Component Will Un Mount</h1>
        )
    }
}
