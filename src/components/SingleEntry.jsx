import React, { Component } from 'react'
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default class SingleEntry extends Component {
  render() {
    return (
      <div>
        <Paper style={style} zDepth={1} />
      </div>
    )
  }
}
