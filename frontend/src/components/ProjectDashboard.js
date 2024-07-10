import React, { useState } from 'react';
import Project from './Project'; // Assume you have a Project component

const ProjectDashboard = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const sampleProjects = [
        { id: 1, name: "24015-237 WHC - Delaware Ranch, TX - 40MW", status: "Active" },
        { id: 2, name: "24015-254 WHC - Green Mallard", status: "Active" },
        { id: 3, name: "24015-145 WHC - Hillsboro-1", status: "Draft" },
        // Add more sample projects
    ];
    const [projects, setProjects] = useState(sampleProjects);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search projects..." />
            <div>
                {filteredProjects.map(project => (
                    <Project key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectDashboard;
