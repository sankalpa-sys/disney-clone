import React from 'react';
import Form from "next/form";

function SearchInput() {
    return (
        <Form action="/search">
            <input
                placeholder='Search movie...'
                maxLength={20}
                className='h-8 rounded-md px-2 outline-none'
                name="query"
                type="text"
            />
        </Form>
    );
}

export default SearchInput;