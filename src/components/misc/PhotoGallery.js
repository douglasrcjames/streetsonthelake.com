import React, { useState, useCallback } from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Masonry from 'react-masonry-css'
import '../../assets/css/PhotoGallery.scss'

export default function PhotoGallery(props) {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((index) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

    const breakpointColumnsObj = {
        default: 5,
        1400: 4,
        900: 3,
        700: 2,
      };

    return (
      <>
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {
                props.photos && props.photos.map((photo, i) => {
                    return (
                        <img 
                            src={photo} 
                            alt={`sarah and cooper wedding party`} 
                            onClick={() => openLightbox(i)} 
                            key={i}
                        />
                    )
                    
                })
            }
        </Masonry>
        {viewerIsOpen ? (
            <Lightbox
                mainSrc={props.photos[currentImage]}
                nextSrc={props.photos[(currentImage + 1) % props.photos.length]}
                prevSrc={props.photos[(currentImage + props.photos.length - 1) % props.photos.length]}
                onCloseRequest={closeLightbox}
                onMovePrevRequest={() =>
                    setCurrentImage((currentImage + props.photos.length - 1) % props.photos.length)
                }
                onMoveNextRequest={() =>
                    setCurrentImage((currentImage + 1) % props.photos.length)
                }
            />
        ) : null}
      </>
    );
  }
  