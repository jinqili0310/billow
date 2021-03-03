/*
 * @Author: Jinqi Li
 * @Date: 2021-03-02 09:02:14
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-03-02 10:28:40
 * @FilePath: \billow\components\editor.js
 */
import React from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

export default class Editor extends React.Component {
	state = {
		editorState: null
	};

	async componentDidMount() {
		// Assume here to get the editor content in html format from the server
		const htmlContent = await fetchEditorContent();
		// Use BraftEditor.createEditorState to convert html strings to editorState data needed by the editor
		this.setState({
			editorState: BraftEditor.createEditorState(htmlContent)
		});
	}

	submitContent = async () => {
		// Pressing ctrl + s when the editor has focus will execute this method
		// Before the editor content is submitted to the server, you can directly call editorState.toHTML () to get the HTML content
		const htmlContent = this.state.editorState.toHTML();
		console.log(htmlContent);
		const result = await saveEditorContent(htmlContent);
	};

	handleEditorChange = (editorState) => {
		this.setState({ editorState });
	};

	render() {
		const { editorState } = this.state;

		return (
			<div className="editor-component">
				<BraftEditor value={editorState} onChange={this.handleEditorChange} onSave={this.submitContent} />
			</div>
		);
	}
}
