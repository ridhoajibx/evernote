import React from 'react';
import useInput from '../../customhooks/useInput';

import { useDispatch } from 'react-redux';
import { addNote } from '../../store/actions/noteAction';

const Form = () => {
    const [title, bindTitle, resetTitle] = useInput();
    const [content, bindContent, resetContent] = useInput();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNote({title, content}));
        resetTitle()
        resetContent()
    }
    return (
        <div className="section">
            <form onSubmit={handleSubmit} className="white p-4">
                <h5 className="grey-text">New Note</h5>
                <div className="input-field">
                    <input id="note_title" type="text" className="validate" {...bindTitle} />
                    <label className="active" htmlFor="note_title">Note title</label>
                </div>
                <div className="input-field">
                    <textarea id="note_content" className="materialize-textarea" {...bindContent}></textarea>
                    <label htmlFor="note_content">Note content</label>
                </div>
                <button className="btn green">Add Note</button>
            </form>
        </div>
    );
}

export default Form;
