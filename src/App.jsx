import { useState, useEffect } from "react";

function App() {
  const [events, setEvents] = useState(null);

  async function getEvents() {
    const response = await fetch("https://polisen.se/api/events");
    const data = await response.json();
    console.log(data);
    setEvents(data);
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="App">
      {events ? (
        events.map((event) => (
          <div>
            <h1>{event.name}</h1> <p>{event.type} </p>{" "}
          </div>
        ))
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default App;
