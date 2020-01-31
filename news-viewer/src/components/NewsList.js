import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;


// Api 요청은 useEffect에서 한다

const NewsList = (props) => {

    const [articles, setArticles] = useState(null); // api에서 받아오도록 Null로 초기화
    const [loading, setLoading] = useState(false); // 비동기화 작업 중 상태를 나타낼 boolean state

    useEffect(() => {
        // async를 사용하는 함수를 따로 선언하여 사용해야함, useEffect에서 반환하는 것은 뒷정리 함수여야 하기 때문
        console.log('진입');
        const fecthData = async() => {
            setLoading(true);
            try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=4bfb8b1da90a497b97f5ee81cb843c37', );
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fecthData();
    }, []);

    // 대기 중일 때
    if(loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>;
    }
    // 아직 articles 값이 설정되지 않았을 때
    if(!articles) {
        return null;
    }
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    );
};

export default NewsList;