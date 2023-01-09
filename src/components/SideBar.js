import React from 'react';
import './SideBar.css'

const SideBar = () => {
    const subReddits = [
        'Home',
        'AskReddit',
        'facepalm',
        'pics',
        'NewZealand',
        'Tesla',
        'Music',
    ]
    return ( 
        <div className='sidebar'>
            <ul>
                {subReddits.map(subReddit => (
                    <li>
                        <a href={`/r/${subReddit}`}>{subReddit}</a>
                        </li>
                ))}
            </ul>
        </div>
     );
}
 
export default SideBar;