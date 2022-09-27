import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

function HomePage({ featuredEvents }) {
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;

export const getStaticProps = async () => {
  const events = await getFeaturedEvents();
  return {
    props: { featuredEvents: events },
    revalidate: 3600,
  };
};
