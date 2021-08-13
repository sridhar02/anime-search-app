import React from 'react';

export default function AnimeCard({ anime }) {
  const { title, image_url, score, synopsis } = anime;

  let cardColor = 'bg-red-400';

  if (score >= 6.9) {
    cardColor = 'bg-yellow-400';
  }

  if (score > 7.9) {
    cardColor = 'bg-green-400';
  }
  return (
    <div className={`border-black ${cardColor} border-2 mb-2 flex rounded-md`}>
      <img className="w-36 " src={image_url} alt="anime logo" />
      <div className="py-16 mx-4 w-full">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold py-2">{title}</h1>
          <div className="flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 my-2 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <div className="border-2 border-black rounded-md p-2 font-bold">
              {score}
            </div>
          </div>
        </div>
        <p className="text-left pt-4">{synopsis}</p>
      </div>
    </div>
  );
}
