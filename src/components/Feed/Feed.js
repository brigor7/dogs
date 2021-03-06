import React, { useState } from 'react';
import FeedPhotos from './FeedPhotos';
import FeedModal from './FeedModal';

const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null);
  console.log(modalPhoto);
  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModal={setModalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
