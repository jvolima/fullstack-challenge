import Image from "next/image";
import { useRouter } from "next/router";
import { Container } from "./styles";

export interface ArticlesProps {
  id: number;
  imageUrl: string;
  title: string;
  summary: string;
  url: string;
  publishedAt: string;
  newsSite: string;
}

export function Article({
  id,
  imageUrl,
  newsSite,
  publishedAt,
  summary,
  title,
  url,
}: ArticlesProps) {
  const publishedAtFormated = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(new Date(publishedAt));

  const router = useRouter();

  function handleSeeMore() {
    router.push(url);
  }

  return (
    <Container>
      <img src={imageUrl} width="240px" height="180px" alt="Article image"/>
      <div className="article-infos">
        <h2>{title}</h2>
        <time>{publishedAtFormated}</time>
        <p>{summary}</p>
        <button onClick={handleSeeMore}>See more</button>
      </div>
    </Container>
  )
}