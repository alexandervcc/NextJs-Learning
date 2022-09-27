//https://nextjs-2c404-default-rtdb.firebaseio.com/

export async function getAllEventsFromFirebase() {
  const res = await fetch(
    `https://nextjs-2c404-default-rtdb.firebaseio.com/events.json`
  );
  const data = await res.json();

  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEventsFromFirebase();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEventsFromFirebase();
  return allEvents.find((event) => event.id === id);
}
