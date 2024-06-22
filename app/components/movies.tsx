// Movies.js

import React from 'react';

const Movies = () => {
  const movieData = [
    { name: 'Tumbbad', trailerLink: 'https://www.youtube.com/embed/YGIcZrUBY0k' },
    { name: 'Andhadhun', trailerLink: 'https://www.youtube.com/embed/2iVYI99VGaw' },
    { name: 'Parasite', trailerLink: 'https://www.youtube.com/embed/SWSDQfJQhUg' },
    { name: 'Oldboy', trailerLink: 'https://www.youtube.com/embed/tAaBkFChaRg' },
    { name: 'Pather Panchali', trailerLink: 'https://www.youtube.com/embed/f2B7dpPFuiY' },
    
  ];

  return (
    <div className="border-2 border-gradient p-4 rounded-lg shadow-md m-9">
      <h1 className="text-xl font-bold mb-4">Movies I Love</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movieData.map((movie, index) => (
         <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-500 ease-in-out transform hover:bg-gradient">
            <h2 className="text-xl font-bold mb-2">{movie.name}</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                title={`${movie.name} Trailer`}
                src={movie.trailerLink}
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
