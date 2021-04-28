import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";
import Head from "next/head";
import NewsletterRegistration from "../components/input/newsletter-registration";
const HomePage = (props) => {
  return (
    <div className="HomePage">
      <Head>
        <title>NextJS Event</title>
        <meta name="description" content=" Every event of you need ..." />
      </Head>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
