import React from 'react'
export function BgPicksList({ bgPicks, onChangeBg }) {
    const pick = bgPicks
    return (
        <div className='picks'>
            <div className='pick 1' onClick={() => onChangeBg(pick, '../assets/imgs/photosPreview.jpg', '#61bd4f')} style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : { backgroundColor: '#61bd4f' }}></div >
            <div className='pick 2' onClick={() => onChangeBg(pick, '../assets/imgs/photosPreview.jpg', '#f2d600')} style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : { backgroundColor: '#f2d600' }}></div >
            <div className='pick 3' onClick={() => onChangeBg(pick, '../assets/imgs/photosPreview.jpg', '#ff9f1a')} style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : { backgroundColor: '#ff9f1a' }}></div >
            <div className='pick 4' onClick={() => onChangeBg(pick, '../assets/imgs/photosPreview.jpg', '#eb5a46')} style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : { backgroundColor: '#eb5a46' }}></div >
            <div className='pick 5' onClick={() => onChangeBg(pick, '../assets/imgs/photosPreview.jpg', '#c377e0')} style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : { backgroundColor: '#c377e0' }}></div >
            <div className='pick 6' onClick={() => onChangeBg(pick, '../assets/imgs/photosPreview.jpg', '#0079bf')} style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : { backgroundColor: '#0079bf' }}></div >
            <div className='pick 7' onClick={() => onChangeBg(pick, '../assets/imgs/photosPreview.jpg', '#00c2e0')} style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : { backgroundColor: '#00c2e0' }}></div >
            <div className='pick 8' onClick={() => onChangeBg(pick, '../assets/imgs/photosPreview.jpg', '#51e898')} style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : { backgroundColor: '#51e898' }}></div >
            <div className='pick 9' onClick={() => onChangeBg(pick, '../assets/imgs/photosPreview.jpg', '#ff78cb')} style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : { backgroundColor: '#ff78cb' }}></div >
            <div className='pick 10' onClick={() => onChangeBg(pick, '../assets/imgs/photosPreview.jpg', '#344563')} style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : { backgroundColor: '#344563' }}></div >
            <div className='pick 11' onClick={() => onChangeBg(pick, '../assets/imgs/photosPreview.jpg', '#b3bac5')} style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : { backgroundColor: '#b3bac5' }}></div >
            <div className='pick 12' onClick={() => onChangeBg(pick, '../assets/imgs/photosPreview.jpg', '#ffffff')} style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : {
                backgroundColor: '#ffffff',
                border: '0.5px solid black'
            }}></div >

        </div>

    )
}