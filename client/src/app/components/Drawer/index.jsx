import React, { useEffect } from 'react';
import './index.css';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  list: {
    width: 250,
    maxHeight: 300,
    marginLeft: 10,
  },
  fullList: {
    width: 'auto',
  },
});

const CustomDrawer = ({ toggleDrawer, showDrawer }) => {
  const classes = useStyles();

  const worldNewsBookmarks = useSelector((state) => state.bookmark.bookmarkWorldNews);
  const sportBookmarks = useSelector((state) => state.bookmark.bookmarkSport);
  const politicsBookmarks = useSelector((state) => state.bookmark.bookmarkPolitics);
  const businessBookmarks = useSelector((state) => state.bookmark.bookmarkBusiness);

  const list = () => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: true,
      })}

      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <h1>Zakładka</h1>
      <Divider />
      <List>
        <h2>World News</h2>
        {worldNewsBookmarks.map(({ title, id, section, url }, index) => (
          <ListItem key={index}>
            <ListItemText primary={title} />
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="contained" color="primary">
                CZYTAJ
            </Button>
            </a>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <h2>Sport</h2>
        {sportBookmarks.map(({ title, id, section, url }, index) => (
          <ListItem key={index}>
            <ListItemText primary={title} />
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="contained" color="primary">
                CZYTAJ
              </Button>
            </a>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <h2>Polityka</h2>
        {politicsBookmarks.map(({ title, id, section, url }, index) => (
          <ListItem key={index}>
            <ListItemText primary={title} />
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="contained" color="primary">
                CZYTAJ
            </Button>
            </a>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <h2>Biznes</h2>
        {businessBookmarks.map(({ title, id, section, url }, index) => (
          <ListItem key={index}>
            <ListItemText primary={title} />
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="contained" color="primary">
                CZYTAJ
             </Button>
            </a>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Drawer anchor={'top'} open={showDrawer.top} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}

export default CustomDrawer;