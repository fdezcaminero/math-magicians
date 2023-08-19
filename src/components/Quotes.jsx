import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('Quotes on the way');
  const [loading, setLoading] = useState('Quotes on the way');
  const [anError, setAnError] = useState('Quotes on the way');

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
      method: 'GET',
      headers: { 'X-Api-Key': '3s1gY8Y2vgsXaMbdA2XPOQ==1eF023msf2QQRimr' },
      contentType: 'application/json',
    })
      .then((response) => response.json())
      .then((data) => {
        const fetchedQuote = data[0] || 'No quotes available';
        setQuote(fetchedQuote);
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  }, []);

  return (
    <div className="borderStyles">
      <p>{quote.quote}</p>
      <p>{quote.author}</p>
    </div>
  );
};

export default Quotes;
