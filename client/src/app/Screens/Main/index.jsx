import React, { useState } from 'react';
import './index.css';
import articleTypes from '../../const/articleTypes';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Drawer from '../../components/Drawer/index';

import Section from '../Section/index';


const buttonStyles = {
  marginTop: 10,
  marginLeft: 10,
  fontWeight: 'bold',
  fontSize: 20,
};

const News = () => {
  const [article, setArticle] = useState(articleTypes.WORLD_NEWS);
  const [showDrawer, setShowDrawer] = useState({ top: false });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setShowDrawer({ ...showDrawer, top: open });
  };

  return (
    <div className="Container-All">
      <Drawer toggleDrawer={toggleDrawer} showDrawer={showDrawer} />
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" className="Content">
          <Button style={buttonStyles}  onClick={toggleDrawer(true)}>NA PÓŹNIEJ</Button>
          <Button style={buttonStyles} disabled={article === articleTypes.WORLD_NEWS} onClick={() => setArticle(articleTypes.WORLD_NEWS)}>ŚWIAT</Button>
          <Button style={buttonStyles}  disabled={article === articleTypes.SPORT} onClick={() => setArticle(articleTypes.SPORT)}>SPORT</Button>
          <Button style={buttonStyles}  disabled={article === articleTypes.POLITICS} onClick={() => setArticle(articleTypes.POLITICS)}>POLITYKA</Button>
          <Button style={buttonStyles} disabled={article === articleTypes.BUSINESS} onClick={() => setArticle(articleTypes.BUSINESS)}>BIZNES</Button>
          {article === articleTypes.WORLD_NEWS && <Section section="world" />}
          {article === articleTypes.SPORT && <Section section="sport" />}
          {article === articleTypes.POLITICS && <Section section="politics" />}
          {article === articleTypes.BUSINESS && <Section section="business" />}
        </Typography>
      </Container>
    </div>
  );
}

export default News;