import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const EditForm = (props) => {
    const note = useSelector(state => state.note)
    console.log('edit note', note);
    return (
        <div>
            Edit form page
        </div>
    );
}

export default EditForm;
