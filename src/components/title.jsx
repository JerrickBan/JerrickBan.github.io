import React, { Component } from 'react'



class TextField extends Component {
  render () {
    return (
      <h1 className="maintxt"> Hello, I'm <br/><span className = "name"> Jerrick </span><br/></h1>
    )
  }
}

class Description extends Component {
  render () {
    return (
      <div>
        <h3 className="desc">Student at the <span class='School'>University of Notre Dame</span><br/><br/>
        <span className="majors">Major:</span> Computer Science<br/><span className="majors">Minor:</span> Engineering Coporate Practice</h3>
      </div>
    )
  }
}

export default class Title extends Component {
  render() { 
      return (  
        <div className = "main">
          <TextField />
          <br/>
          <Description />
        </div>
      )
  }
}