

const Contacts = () => {
  const skillData = [
    { alt: 'Linked In Profile', link: 'https://www.linkedin.com/in/abhishek-tiwari-a812a7216/', src: '/contact/linkedIn.png' },
    { alt: 'Instagram Profile', link: 'https://www.instagram.com/abhishek_nath_tiwari/', src: '/contact/instagram.png' },
    { alt: 'X Profile', link: 'https://x.com/abhinathtiwari', src: '/contact/x.png' },
    { alt: 'GitHub Profile', link: 'https://github.com/abhishektiwari47/', src: '/contact/github.png' },
    { alt: 'LeetCode Profile', link: 'https://leetcode.com/u/abhishektiwari47/', src: '/contact/leetcode.png' },
    { alt: 'Youtube Profile', link: 'https://www.youtube.com/@codingcrush', src: '/contact/youtube.png' },
   
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md m-9">
      <div className="text-xl font-bold mb-2 text-cyan-950">Let's watch together</div>
      <div className="flex flex-wrap">
        {skillData.map((contact, index) => (
          <Contact key={index} link={contact.link} alt={contact.alt} src={contact.src} />
        ))}
      </div>
      
    </div>
  );
};

function Contact(props: { alt: string; src: string; link: string }) {
  return (
    <div className="w-1/8 p-2 border-2 m-1 border-black rounded-md">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img src={props.src} alt={props.alt} className="w-16 h-16 mx-auto" />
      </a>
      
    </div>
  );
}

export default Contacts;
