import React from 'react';

async function GenrePage({params}: {params: {id: string}}) {
    const parameters = await params
    const genre = parameters.id
    return (
        <div></div>
    );
}

export default GenrePage;