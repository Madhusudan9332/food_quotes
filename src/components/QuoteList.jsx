import React from "react";

const QuoteList = ({ quotes }) => {
  return (
    <ul className="px-10 py-20 space-y-6">
      {quotes.map((quote, index) => (
        <li key={index} className="rounded-lg shadow-md overflow-hidden bg-white">
          <div className="p-4 flex flex-col">
            <img
              src={quote.profilePic}
              alt="User"
              className="w-100 h-auto object-cover rounded-lg mb-4"
              style={{ maxWidth: "50px" }}
            />
            <div>
              <p className="text-lg font-semibold">{quote.quote}</p>
              <p className="text-sm text-gray-500">{quote.author}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default QuoteList;
