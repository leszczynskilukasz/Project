import React, { useState } from 'react';
import './index.css';
import { useQuery } from '@apollo/client';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GET_ARTICLES } from '../../../apollo-client/queries';
import Article from '../../components/Article/index';

const Politics = ({ section }) => {
  const [page, setPage] = useState(1);
  const { data, loading } = useQuery(GET_ARTICLES, { variables: { section: section, page: page }, notifyOnNetworkStatusChange: true });

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Typography component="div" className="Container-Loading">
          <CircularProgress />
        </Typography>
      </Container>
    );
  }

  const loadPage = (value) => {
    setPage((prevState) => prevState + value);
  }

  return data && (
    <Container className="Container-Content" maxWidth="lg">
      <Typography component="div">
        {data.articles.map(article => <Article key={article.id} article={article} />)}
        <Button color="secondary" variant="contained" disabled={page === 1} onClick={() => loadPage(-1)}>Poprzednia</Button>
        <Button color="secondary" variant="contained" style={{ float: 'right' }} onClick={() => loadPage(1)}>Nastepna</Button>
      </Typography>
    </Container>
  );
}

export default Politics;