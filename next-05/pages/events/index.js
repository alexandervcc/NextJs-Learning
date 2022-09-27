import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEventsFromFirebase } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

function AllEventsPage({ events }) {
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }
  console.log("e: ",events)
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;

export const getStaticProps = async () => {
  const events = await getAllEventsFromFirebase();
  
  return {
    props: { events: events },
    revalidate: 60,
  };
};
