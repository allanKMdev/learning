
import React from 'react';
import TicketBox from './TicketBox';

const ticketData = [
  {
    imageUrl: "/img/Ticket.jpeg",
    date: '2024-08-10',
    cost: 2500,
    description: 'Workshop on web development', 
  },
  {
    imageUrl: "/img/Ticket.jpeg",
    date: '2024-08-15',
    cost: 1200,
    description: 'Art exhibit', 
  },
  {
    imageUrl: "/img/Ticket1.jpeg",
    date: '2025-08-25',
    cost: 1500,
    description: 'Summer Music Festival', 
  },
  {
    imageUrl: "/img/Ticket1.jpeg",
    date: '2024-08-20',
    cost: 1800,
    description: "Learn React", 
  },
];

function TicketsPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">Available Tickets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {ticketData.map((ticket, index) => (
          <TicketBox key={index} {...ticket} />
        ))}
      </div>
    </div>
  );
}

export default TicketsPage;
