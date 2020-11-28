import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import NotesList from '../notes/NotesList';
import Form from './Form';

const Home = () => {
    useFirestoreConnect([
        {
            collection: 'notes',
            orderBy: ['createdAt', 'desc']
        }
    ])
    const notes = useSelector(state => state.firestore.ordered.notes)
    console.log(notes);
    return (
        <div className="container">
            <div className="row center-align">
                <div className="col s12 m7"><Form /></div>
                <div className="col s12 m5"><NotesList /></div>
            </div>
        </div>
    );
}

export default Home;
