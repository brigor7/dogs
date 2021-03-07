import React, { useEffect } from 'react';
import { PHOTO_GET } from '../../api';
import useFetch from '../../hooks/useFetch';
import styles from './FeedModal.module.css';
import Error from '../../Helpers/Error';
import Loading from '../../Helpers/Loading';
import PhotoContent from '../Photos/PhotoContent';

const FeedModal = ({ photo, setModal }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      setModal(null);
    }
  };

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
