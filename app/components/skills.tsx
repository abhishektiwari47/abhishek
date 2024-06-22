

const Skills = () => {
  const skillData = [
    { alt: 'HTML Logo', src: '/skills/html.png' },
    { alt: 'CSS3 Logo', src: '/skills/css.png' },
    { alt: 'TypeScript Logo', src: '/skills/ts.png' },
    { alt: 'React Logo', src: '/skills/react.png' },
    { alt: 'C++ Logo', src: '/skills/c++.png' },
    { alt: 'Git Logo', src: '/skills/git.png' },
    { alt: 'GitHub Logo', src: '/skills/github.png' },
    { alt: 'Dart Logo', src: '/skills/dart.png' },
    { alt: 'Flutter Logo', src: '/skills/flutter.png' },
    { alt: 'Express Logo', src: '/skills/express.png' },
    { alt: 'MongoDB Logo', src: '/skills/mongodb.png' },
    { alt: 'MySQL Logo', src: '/skills/mysql.png' },
    { alt: 'JavaScript Logo', src: '/skills/javascript.png' },
    { alt: 'Node.js Logo', src: '/skills/nodejs.png' },
    { alt: 'Next.js Logo', src: '/skills/nextjs.png' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md m-9">
      <div className="text-xl font-bold mb-2 text-cyan-950">Technical Skills</div>
      <div className="flex flex-wrap ">
        {skillData.map((skill, index) => (
          <Skill key={index} alt={skill.alt} src={skill.src} />
        ))}
      </div>
    </div>
  );
};

function Skill(props: { alt: string; src: string }) {
  return (
    <div className="w-1/8 p-2 border-2 m-1 border-black rounded-md">
      <img src={props.src} alt={props.alt} className="w-16 h-16 mx-auto" />
    </div>
  );
}

export default Skills;
