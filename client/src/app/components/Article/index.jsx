import React from 'react';
import './index.css';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { saveBookmark } from '../../redux/Bookmarks/actions';
import { useToasts } from 'react-toast-notifications';

const stylesBtn = {
  btn_save: {
    minWidth: '10%',
    minHeight: '5%',
  },
  btn_read: {
    minWidth: '10%',
    minHeight: '5%',
    marginLeft: 20,
  }
}

const Article = ({ article }) => {
  const { publicationDate, title, id, section, url } = article;
  const { addToast } = useToasts();
  const dispatch = useDispatch();

  const setBookmark = () => {
    dispatch(saveBookmark({ title, id, section, url }))
    addToast('Zakladka zostala dodana', {
      appearance: 'success',
      autoDismiss: true,
    });
  }

  return (
    <div className="Container">
      <div className="Article">
        <p className="Article-Date">{publicationDate.slice(0, 10)}</p>
        <p className="Article-Title">{title}</p>
        <Button onClick={() => setBookmark()} style={stylesBtn.btn_save} variant="contained" color="primary">ZAPISZ NA PÓŹNIEJ</Button>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button style={stylesBtn.btn_read} variant="contained" color="primary">
            CZYTAJ
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Article;