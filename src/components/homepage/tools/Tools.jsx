import React, { use } from 'react';
import AvailableTools from '../../availableTools/AvailableTools';

const Tools = ({ toolsPromise }) => {
    console.log(toolsPromise)
    const tools =use(toolsPromise);
    console.log(tools)
    return (
        <div className='container mx-auto'>
            tools: {tools.length}
            <AvailableTools tools={tools} />
        </div>
    );
};

export default Tools;