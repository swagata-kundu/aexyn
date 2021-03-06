import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class Editor extends Component {
  handleChange=(event, editor) => {
    const data = editor.getData();
    const { input } = this.props;
    input.onChange(data);
  }

  render() {
    const { input } = this.props;
    return (
      <CKEditor
        editor={ClassicEditor}
        data={input.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default Editor;
