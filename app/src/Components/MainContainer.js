// MainContainer.jsx
import React from 'react';
import VideoHeader from './VideoHeader';
import Video from './Video';

function MainContainer({ data }) {
  return ( data &&   
    (
        <div className="relative w-full h-screen bg-black">
          <Video id={data.id} />
          <VideoHeader data={data} />
        </div>
      )
    );
}

export default MainContainer;
