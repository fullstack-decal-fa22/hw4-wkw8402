import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {

    const [prevs, setPost] = useState([]);

    const create = (post) => {
      setPost([post, ...prevs]);
    };
  
    return (
        <div>
            <Menu create = {create}></Menu>
            {prevs.map((current) => (
                <Block color = {current} />
            ))}
        </div>
    );
}

export default Feed;