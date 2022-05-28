import React from 'react';
import useTools from '../../hooks/useTools';
import ToolsService from './ToolsService';

const ToolsServices = () => {
    const [tools, setTools] = useTools([]);
    return (
        <div>
        <h1 className="pt-7 text-5xl text-center text-accent font-bold">
        Our Tools
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-7 pt-5 text-center">
        {
        tools.slice(0,3).map((tool) => (
          <ToolsService
            key={tool._id}
            tool={tool}
          ></ToolsService>
        ))}
      </div>
        </div>
    );
};

export default ToolsServices;