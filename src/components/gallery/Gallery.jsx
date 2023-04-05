import React, {useState} from 'react';

import {CloseBtn, GalleryComponent, ImageWrapper, ModalImage, ModalWrapper} from './gallery.styles';

import DATA from '../../data';


const Gallery = () => {

    const [active, setActive] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (e) => {

        const ImgSrc = process.env.PUBLIC_URL + `/gallery_data/specimen_${e}.jpg`;

        setTempImgSrc(ImgSrc);
        setActive(true);
    }


    return (
        <>
            <ModalWrapper active={active}>
                <ModalImage
                    className={active ? "opened" : ""}
                    src={tempImgSrc}
                />
                <CloseBtn
                    onClick={() => setActive(false)}
                />
            </ModalWrapper>

            <GalleryComponent>
                {
                    Object.keys(DATA).map((id) => {
                        const e = Number.parseInt(id) + 1;

                        return (
                            <ImageWrapper
                                key={e}
                                onClick={() => {
                                    getImg(e)
                                }}
                            >
                                <img
                                    src={process.env.PUBLIC_URL + `/gallery_data/specimen_${e}.jpg`}
                                    alt={String(e)}
                                />
                            </ImageWrapper>
                        )
                    })
                }
            </GalleryComponent>
        </>
    )

}

export default Gallery;