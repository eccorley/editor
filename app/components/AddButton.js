import React from 'react';

export default class AddButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="add-button" onClick={this.props.onClick}>
        <span className="fa fa-save"></span>
      </div>
    )
  }
}
