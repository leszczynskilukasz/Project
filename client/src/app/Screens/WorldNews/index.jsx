import React, { useState } from 'react';
import './index.css';
import { useQuery } from '@apollo/client';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GET_ARTICLES } from '../../../apollo-client/queries';
import Article from '../../components/Article/index';

const WorldNews = () => {
  const [page, setPage] = useState(1);
  const { data, loading } = useQuery(GET_ARTICLES, { variables: { section: 'world', page: page }, notifyOnNetworkStatusChange: true });

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Typography component="div" className="Container-Loading">
          <CircularProgress />
        </Typography>
      </Container>
    );
  }

  return data && (
    <Container maxWidth="lg">
      <Typography component="div" className="Container-Content">
        {data.articles.map(article => <Article key={article.id} article={article} />)}
      </Typography>
    </Container>
  );
}

export default WorldNews;