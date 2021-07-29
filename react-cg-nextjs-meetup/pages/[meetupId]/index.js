import { useRouter } from "next/router";

const Meetup = () => {
  const router = useRouter();

  return <h1>Meetup {router.query.meetupId}</h1>;
};

export default Meetup;
