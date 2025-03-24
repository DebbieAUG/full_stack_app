import { useEffect, useState } from "react";
import { fetchData, postData } from "./api"; // Import the functions

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData).catch(console.error);
  }, []);

  const handleSubmit = async () => {
    const newData = { name: "New Item" };
    await postData(newData);
  };

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={handleSubmit}>Submit Data</button>
    </div>
  );
};

export default MyComponent;
