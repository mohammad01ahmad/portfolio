'use client';

import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [data, setData] = useState([]);

  // fetch repositories from github api
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://pinned.berrysauce.dev/get/mohammad01ahmad');
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRepos();
  }, []);

  const languagesColors = {
    "JavaScript": "#FFD700",
    "TypeScript": "#3178c6",
    "Jupyter Notebook": "#F37626",
    "Python": "#4B8BBE",
  }
  return (
    <section id="projects" className="px-4 lg:px-4 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="flex justify-between gap-2 w-full">
              <span className="text-[clamp(48px,12vw,200px)] font-bold tracking-tight leading-[0.8] uppercase whitespace-nowrap" aria-label="Work">
                <div
                  className="line-mask line1-mask"
                  aria-hidden="true"
                  style={{ position: 'relative', display: 'block', textAlign: 'start', overflow: 'clip' }}
                >
                  <div
                    className="line line1"
                    aria-hidden="true"
                    style={{ position: 'relative', display: 'block', textAlign: 'start', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }}>
                    MY
                  </div>
                </div>
              </span>
              <span className="text-[clamp(48px,12vw,200px)] font-bold tracking-tight leading-[0.8] uppercase whitespace-nowrap" aria-label="'25">
                <div
                  className="line-mask line1-mask"
                  aria-hidden="true"
                  style={{ position: 'relative', display: 'block', textAlign: 'start', overflow: 'clip' }}
                >
                  <div
                    className="line line1"
                    aria-hidden="true"
                    style={{ position: 'relative', display: 'block', textAlign: 'start', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }}>
                    PROJECTS
                  </div>
                </div>
              </span>
            </h2>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Map all projects from data */}
            {data.map((project, index) => (
              <div key={project.id || index} className="bg-white rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-primary/50 animate-fade-in-up h-full flex flex-col" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex flex-col space-y-1.5 p-6 pb-3 flex-shrink-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold tracking-tight text-lg group-hover:text-primary transition-colors line-clamp-2 leading-tight">{project.name}</h3>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground rounded-md h-8 w-8 p-0 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-4 w-4">
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-6 pt-0 space-y-4 flex-grow flex flex-col">
                  <p className="text-sm text-muted-foreground line-clamp-3 flex-grow">{project.description}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: languagesColors[project.language] }}>
                        </div>
                        <span className="text-xs font-medium">{project.language}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-3 w-3">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <span className="text-xs">{project.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-fork h-3 w-3">
                          <circle cx="12" cy="18" r="3"></circle>
                          <circle cx="6" cy="6" r="3"></circle>
                          <circle cx="18" cy="6" r="3"></circle>
                          <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path>
                          <path d="M12 12v3"></path>
                        </svg>
                        <span className="text-xs">{project.forks_count}</span>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => { window.open(`https://github.com/mohammad01ahmad/${project.name}`) }} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full mt-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code mr-2 h-4 w-4">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    View on GitHub
                  </button>
                </div>
              </div>
            )
            )}
          </div>
        </div>

        {/* View All Projects Button*/}
        <div className="flex justify-center items-center">
          <div className="text-center animate-fade-in-up">
            <a href="/projects" className="bg-white inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code mr-2 h-4 w-4">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform">
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
