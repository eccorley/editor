import React from 'react';

import '../sass/components/editor.scss';

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="editor">
        <textarea className="text-content" autoFocus value={this.props.content} onChange={this.props.onChange}/>
      </div>
    )
  }
}
