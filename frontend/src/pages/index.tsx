import Head from 'next/head'
import { Container, Header } from '../styles/home'
import { FaRocket } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GetStaticProps } from 'next';
import { api } from '../services/api';
import { useEffect, useState } from 'react';
import { Article, ArticlesProps } from '../components/Article';

export default function Home() {
  const [limit, setLimit] = useState(10);
  const [orderBy, setOrderBy] = useState("desc");
  const [articles, setArticles] = useState<ArticlesProps[]>([]);
  const page = 0;

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`articles?_start=${page}&_limit=${limit}&_orderBy=${orderBy}`);
      setArticles(response.data);
    }

    loadData();
  }, [limit, orderBy]);

  function loadMore() {
    setLimit(oldState => oldState + 10);
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
          <div className="dropdown">
            <button className="dropbtn">Escolha um filtro</button>
            <div className="dropdown-content">
              <button onClick={() => setOrderBy("desc")}>Mais recentes</button>
              <button onClick={() => setOrderBy("asc")}>Mais antigos</button>
            </div>
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

