import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(true);
  const [anError, setAnError] = useState();

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
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setAnError(true);
      });
  }, []);

  let content;

  if (loading) {
    content = <p>Loading...</p>;
  } else if (anError) {
    content = <p>An error occurred while fetching data.</p>;
  } else {
    content = (
      <>
        <p>{quote.quote}</p>
        <p>{quote.author}</p>
      </>
    );
  }

  return <div className="borderStyles">{content}</div>;
};

export default Quotes;
