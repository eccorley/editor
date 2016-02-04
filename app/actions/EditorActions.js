import fs from 'fs';
import electron from 'electron';
const remote = require('electron').remote;
const dialog = remote.require('dialog');
const ipcRenderer = electron.ipcRenderer;

export const openFile = (content) => {
  return {
    type: 'OPEN_FILE',
    content: content
  }
}

export const editFile = (event) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'EDIT_FILE',
      content: event.target.value
    })
    const content = {
      fileName: null,
      content: event.target.value
    }
    ipcRenderer.send('send-content', JSON.stringify(content));
  }
}

export const saveFile = () => {
  return (dispatch, getState) => {
    const fileName = getState().editor.toJSON().filename;
    const content = getState().editor.toJSON().content
    if (fileName) {
      fs.writeFile(fileName, content, (err) => {
        if (err) throw "error";
      })
    } else {
      dialog.showSaveDialog((fileName) => {
        if (fileName === undefined) return;
        fs.writeFile(fileName, content, (err) => {
          if (err) throw "error";
          ipcRenderer.send('save-file', fileName);
        })
      })
    }
  }
}
