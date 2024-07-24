

function TicketBox({ imageUrl, date, cost, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img src={imageUrl} alt="Event Image" className="w-full rounded-lg mb-4" />
      <p className="text-gray-700 font-medium">Date: {date}</p>
      <p className="text-green-500 font-bold">Cost: Ksh{cost}</p>
      <p className="text-green-500 font-bold">Description: {description}</p>
    </div>
  );
}

export default TicketBox;
