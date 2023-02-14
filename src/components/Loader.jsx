import React from 'react';
import "../../src/loading.css"

export default function Loader() {
    return (
        <div className='container'>
            <div className='loading'>
                <div className='loading_letter'>L</div>
                <div className='loading_letter'>o</div>
                <div className='loading_letter'>a</div>
                <div className='loading_letter'>d</div>
                <div className='loading_letter'>i</div>
                <div className='loading_letter'>n</div>
                <div className='loading_letter'>g</div>
                <div className='loading_letter'>.</div>
                <div className='loading_letter'>.</div>
                <div className='loading_letter'>.</div>
            </div>
        </div>
    )
}
