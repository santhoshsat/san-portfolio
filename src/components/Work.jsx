import React from 'react'
import ProjectCard from './ProjectCard'
const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/santhoshsat/san-portfolio'
  },
  {
    imgSrc: '/images/project-2.png',
    title: 'Movies List app',
    tags: ['API', 'Development'],
    projectLink: 'https://github.com/santhoshsat/movies-list-app'
  },
  {
    imgSrc: '/images/project-3.png',
    title: 'Blogspot website',
    tags: ['Development', 'MVC','Prisma'],
    projectLink: 'https://github.com/santhoshsat/Blogspot-website'
  },
  
  {
    imgSrc: '/images/project-4.jpg',
    title: 'Job Portal Website',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/santhoshsat/Job_Portal-FrontEnd'
  },
  {
    imgSrc: '/images/project-5.jpeg',
    title: 'Image Grading System',
    tags: ['Development', 'Canny algorithm'],
    projectLink: 'https://github.com/santhoshsat/automated_image_based_grading_system_using_optimal_mark_recogntion'
  },
  {
    imgSrc: '/images/project-6.jpeg',
    title: ' Face Login Recognition',
    tags: ['Flask', 'Development'],
    projectLink: 'https://github.com/santhoshsat/face_login'
  },
  
];
const Work = () => {
  return ( 
    <section
    id='work'
    className="section">
    <div className="container">
        <h2 className="headline-2 mb-8">
            My portfolio highlights
        </h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({imgSrc,title,tags,projectLink},key)=>(
           <ProjectCard
           key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes='reveal-up'
                />
            ))}
        </div>
    </div>
    </section>
  )
}

export default Work