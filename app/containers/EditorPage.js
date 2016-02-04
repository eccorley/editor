import React, { Component }            from 'react';
import {ipcRenderer}                   from 'electron';
import { connect }                     from 'react-redux';
import { bindActionCreators }          from 'redux'
import Editor                          from '../components/Editor';
import AddButton                       from '../components/AddButton';
import * as actions                    from '../actions/EditorActions';

import '../sass/pages/editor-page.scss';

class EditorPage extends Component {
  constructor(props) {
    super(props);
    ipcRenderer.on('open-file', (event, message) => {
      console.log('Open File: ', event, message);
      this.props.openFile(message);
    })
  }

  render() {
    return (
      <main className="editor-page">
        <aside className="actions">
          <AddButton
            onClick={this.props.saveFile}
          />
        </aside>
        <Editor
          content={this.props.editor.content}
          onChange={this.props.editFile}
        />
      </main>
    );
  }
}

export default connect(
  state => {
    return {
      editor: state.editor.toJSON()
    }
  },
  dispatch => bindActionCreators(actions, dispatch)
)(EditorPage)
