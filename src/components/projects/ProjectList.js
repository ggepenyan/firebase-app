import React from 'react';
import ProjectSummary from './ProjectSummary';

export default () => {
  return (
    <div className="project-list section">
      {[0,1,2].map((project, index) => {
        return <ProjectSummary key={'project-' + index} />;
      })}
    </div>
  );
}
