import React from 'react';
import Categoires from './Categories';
import NewsList from './NewsList';

const NewsPage = ({match}) => {
    const category = match.params.category || 'all';
    return (
        <>
            <Categoires />
            <NewsList category={category}/>
        </>
    );
};

export default NewsPage;