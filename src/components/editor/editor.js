import React from 'react';
import './editor.css';

const Editor = ({makrdownValue,handleChange}) => {
    return(
        <form>
            <textarea id="editor" rows="8" name="markdonwValue" value={makrdownValue} onChange={handleChange}/>
        </form>
    )
};

export default Editor;