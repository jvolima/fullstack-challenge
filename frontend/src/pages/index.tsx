import Head from 'next/head'
import { Container, Header } from '../styles/home'
import { FaRocket } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GetStaticProps } from 'next';

export default function Home() {
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
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
