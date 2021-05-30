import React from 'react'
export function BgPicksList({ bgPicks }) {
    const pick = bgPicks
    return (
        <div className='picks'>
            <div className='pick 1' style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : { backgroundColor: '#61bd4f' }}></div >
            <div className='pick 2' style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : { backgroundColor: '#f2d600' }}></div >
            <div className='pick 3' style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : { backgroundColor: '#ff9f1a' }}></div >
            <div className='pick 4' style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : { backgroundColor: '#eb5a46' }}></div >
            <div className='pick 5' style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : { backgroundColor: '#c377e0' }}></div >
            <div className='pick 6' style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : { backgroundColor: '#0079bf' }}></div >
            <div className='pick 7' style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : { backgroundColor: '#00c2e0' }}></div >
            <div className='pick 9' style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : { backgroundColor: '#51e898' }}></div >
            <div className='pick 10' style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : { backgroundColor: '#ff78cb' }}></div >
            <div className='pick 11' style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : { backgroundColor: '#344563' }}></div >
            <div className='pick 12' style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : { backgroundColor: '#b3bac5' }}></div >
            <div className='pick 8' style={(pick === 'photos') ? { backgroundImage: `url(../assets/imgs/photosPreview.jpg)` } : {
                backgroundColor: 'white',
                border: '0.5px solid black'
            }}></div >

        </div>

    )
}