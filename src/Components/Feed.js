import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    
    const[prevs, setting] = useState([]);
    const colorful = (color) => {setting([color, ...prevs]);};

    const posts = prevs.map((block) => {return <Block color={block}/>;});

    return (
        <div>
            <Menu vivid={colorful}></Menu>
            {posts}
        </div>
    );
}

export default Feed;