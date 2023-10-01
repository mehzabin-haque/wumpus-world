import React, { useState, useEffect } from 'react';
type Props = {
  item: number;
}

function ListItem({ item }: Props) {
  return <div>{item}</div>;
}

function MyComponent() {
  const [items, setItems] = useState([1, 2, 3]);

  useEffect(() => {
    // Function to update the list of items
    const updateItems = () => {
      setItems([...items, items.length + 1]);
    };

    // Set up an interval to update the list every 5 seconds (5000 milliseconds)
    const intervalId = setInterval(updateItems, 5000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [items]);

  return (
    <div>
      <h1>List Items</h1>
      <div>
        {items.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MyComponent;
