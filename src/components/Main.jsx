import React, { Component } from 'react'

export class Main extends Component {
  render() {
    return (
      <div className="red col fill pad flex-3">
        {this.props.children}
      </div>
    )
  }
}

export default Main