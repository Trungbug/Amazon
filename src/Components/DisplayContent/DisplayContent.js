import React from 'react';
import LeftSidePanel from './LeftSide/LeftSidePannel';
import RightSidePanel from './RightSide/RightSidePannel';

const DisplayContent = (props) => {
    return (
        <div style={{ display: 'flex' }}>
            <div>
                <LeftSidePanel />
            </div>
            <div>
                <RightSidePanel />
            </div>
        </div>
    )
}

export default DisplayContent