import { useState, useEffect } from 'react';

const Message = () => {
  const [data, setData] = useState<{ message: string; title: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
        <h1>Данные:</h1>
        <h2>{data.title}</h2>
        <h2>{data.message}</h2>
    </div>
  );
};

export default Message;