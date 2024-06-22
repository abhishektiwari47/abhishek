import React from 'react';

const Projects = () => {
  const projectData = [
    {
      name: 'BidHub',
      try: 'https://bidhub.netlify.app/',
      github: 'https://github.com/abhishektiwari47/bidhub',
      image: '/projects/bidhubss.png',
      des:
        'Facilitated the successful resale of 50+ items across four hostels, with the highest bid reaching 1500 rupees. Implemented major features including authentication, bidding, dark mode, in-built wallet (test mode), confirmation emails. Developed with Typescript, React.js, Tailwind CSS, Recoil, AWS EC2, Stripe API, Axios, MongoDB, Node.js, Express.js, JWT Authentication, Netlify, Git, GitHub, and Node Mailer.',
    },
    {
      name: 'SnypUp',
      try: 'https://github.com/abhishektiwari47/snypupV2/releases',
      github: 'https://github.com/abhishektiwari47/SnypupV2',
      image: '/projects/snypupss.png',
      des:
        'Created a browser extension that speeds up DSA practice by 30% by effortlessly storing and accessing common code snippets. Achieved over 100 downloads on Chrome store with over 150 code snippets uploaded to date. Developed using HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, Git, GitHub, JWT, Manifest V2, and Postman.',
    },
  ];

  return (
    <div className='border-2 border-gradient p-4 rounded-lg shadow-md m-9'>
      <div className="text-xl font-bold mb-4">My Latest Work</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-gray-700 p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-500 ease-in-out transform hover:bg-gradient"
          >
            <h2 className="text-xl font-bold mb-2 text-white">{project.name}</h2>
            <div className="aspect-w-16 aspect-h-9">
              <img src={project.image} alt={`${project.name} Screenshot`} className="w-full h-full" />
            </div>
            <p className="text-gray-300 mt-2">{project.des}</p>
            <a href={project.try} className="text-blue-400 hover:underline block mt-2">
              Try
            </a>
            <a href={project.github} className="text-blue-400 hover:underline block">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
