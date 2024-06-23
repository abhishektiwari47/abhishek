
const Experiences = () => {
  const experienceData = [
    {
      name: 'ElvDrive',
      visit: 'https://www.linkedin.com/company/elvdrive/posts/?feedView=all',
      time: 'May 2023 – July 2023',
      image: '/experience/elvdrive.png',
      des:
        'Developed the frontend for a client\'s document management application (Right Claim) using React.js. Enhanced loading speed, scalability, and overall performance by implementing the Recoil library for state management. Developed and tested backend APIs for authentication, profile management, and account deletion with Express.js and Postman. Collaborated with cross-team and clients to refine UI designs, resulting in a 20% improvement in the application\'s flow. Integrated backend APIs for authentication, file management, alerts, online/offline user presence, search functionality, and comprehensive user profile management.',
    },
    {
      name: 'Tandemloop',
      visit: 'https://www.linkedin.com/company/tandemloop-technologies/posts/?feedView=all',
      time: 'March 2022 – August 2022',
      image: '/experience/tandemloop.png',
      des:
        'Built and implemented punch-in/out feature according to Figma UI in the company’s employee management app, boosting app speed by 30% with provider state management. Tested RESTful APIs using Postman and significantly improved error handling in Express.js code through targeted suggestions. Mastered Flutter, Node.js, Express, state management, UX/UI, and routing concepts during the internship. Collaborated with team members using Agile methodologies, contributing to sprint planning, and retrospective meetings.',
    },
  ];

  return (
    <div className='border-2 border-gradient p-4 rounded-lg shadow-md m-9'>
      <div className="text-xl font-bold mb-4">The Theater</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experienceData.map((experience, index) => (
          <div
            key={index}
            className="bg-gray-700 p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-700 ease-in-out transform mt-2 mb-2 hover:bg-gradient"
          >
            <h2 className="text-xl font-bold mb-2 text-white">{experience.name}</h2>
            <div className="aspect-w-16 aspect-h-9">
              <img src={experience.image} alt={`${experience.name} Logo`} className="w-full h-full" />
            </div>
            <p className="text-gray-300 mt-2">{experience.des}</p>
            <p className="text-gray-400 mt-2">{experience.time}</p>
            <a href={experience.visit} className="text-blue-400 hover:underline block mt-2">
              Visit LinkedIn
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
