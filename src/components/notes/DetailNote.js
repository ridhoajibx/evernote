import React from 'react';

const DetailNote = (props) => {
    console.log(props, 'cek props detail');
    const id = props.match.params.id
    return (
        <div>
            This is detail page - {id}
        </div>
    );
}

export default DetailNote;
