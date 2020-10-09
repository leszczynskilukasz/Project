import React from 'react';
import './index.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { deleteBookmark } from '../../../../redux/Bookmarks/actions';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';

const SectionList = ({ sectionName, bookmarks }) => {

  const dispatch = useDispatch(); 

  return sectionName && bookmarks && (
    <List>
      <h2>{sectionName}</h2>
      {bookmarks.map(({ title, id, section, url }, index) => (
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
          <Button style={{ marginLeft: 10 }} variant="contained" color="secondary" onClick={() => dispatch(deleteBookmark({ id, section }))}>USUŃ</Button>
        </ListItem>
      ))}
    </List>
  );
}

export default SectionList;