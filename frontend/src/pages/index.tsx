import Head from 'next/head'
import { Container, Header } from '../styles/home'
import { FaRocket } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GetStaticProps } from 'next';
import { api } from '../services/api';
import { useEffect, useState } from 'react';
import { Article, ArticlesProps } from '../components/Article';

export default function Home() {
  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] = useState("desc");
  const [articles, setArticles] = useState<ArticlesProps[]>([]);
  const limit = 10;

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`articles?_start=${page}&_limit=${limit}&_orderBy=${orderBy}`);
      setArticles(oldState => [...oldState, ...response.data]);
    }

    loadData();
  }, [page]);

  function loadMore() {
    setPage(oldState => oldState + 10);
  }

  return (
    <>
      <Head>
        <title>Space Flight News</title>
      </Head>
      <Header>
        <section>
          <div className="fake-input">
            <input type="text" name="article" placeholder="Search" />
            <button><FiSearch color="#1E2022"/></button>
          </div>
        </section>
        <div className="logo">
          <FaRocket size="2.5rem" />
        </div>
        <h1>Space Flight News</h1>
      </Header>
      <Container>
        <hr />
        {
          articles.map(article => (
            <Article 
              key={article.id}
              id={article.id}
              imageUrl={article.imageUrl}
              newsSite={article.newsSite}
              publishedAt={article.publishedAt}
              summary={article.summary}
              title={article.title} 
              url={article.url}
            />
          ))
        }
        <button onClick={loadMore}>Load more</button>
      </Container>
    </>
  )
}

