import React from 'react';
import './index.css';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { deleteBookmark } from '../../redux/Bookmarks/actions';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import SectionList from './Components/SectionList/index';

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

  const dispatch = useDispatch();

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
      <SectionList sectionName="Świat" bookmarks={worldNewsBookmarks} />
      <Divider />
      <SectionList sectionName="Sport" bookmarks={sportBookmarks} />
      <Divider />
      <SectionList sectionName="Polityka" bookmarks={politicsBookmarks} />
      <Divider />
      <SectionList sectionName="Biznes" bookmarks={businessBookmarks} />
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