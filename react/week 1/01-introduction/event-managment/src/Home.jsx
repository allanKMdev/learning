import EventBox from './EventBox';

const events = [
  {
    title: "Workshop on Web Development",
    date: "2024-08-10",
    description: "Learn the basics of building websites with HTML, CSS, and JavaScript.",
    imageUrl: "./img/workshop.jpeg"
  },
  {
    title: "Art Exhibition: Colors of Nature",
    date: "2024-08-15",
    description: "Immerse yourself in a vibrant display of artwork inspired by the natural world.",
    imageUrl: "./img/Art.jpeg",
  },
  {
    title: "Summer Music Festival",
    date: "2024-08-25",
    description: "Enjoy live performances by your favorite bands under the stars!",
    imageUrl: "./img/Summerevent.jpeg" 
  },
  {
    title: "Introduction to React Development",
    date: "2024-08-20",
    description: "Learn the fundamentals of building user interfaces with React.js",
    imageUrl: "img/React.jpeg", 
  },
];

function Home() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Embark on a journey With Kaleidoscope</h1>
      </div>
      <h2 className="text-2xl font-bold text-center mb-4">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((event) => (
          <EventBox key={event.title} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Home;
