
function EventBox({ event }) {
  const { title, date, description, imageUrl } = event; 
  return (
    <div className="event-box bg-white shadow-md rounded overflow-hidden mb-4">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <span className="text-gray-400 text-sm">{new Date(date).toLocaleDateString()}</span>
      </div>
    </div>
  );
}

export default EventBox;
