import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    key: "m1",
    id: "m1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/New_national_stadium_tokyo_1.jpg/1920px-New_national_stadium_tokyo_1.jpg",
    title: "First Meetup",
    address: "Location 1",
    description: "This is the first meetup",
  },
  {
    key: "m2",
    id: "m2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/New_national_stadium_tokyo_1.jpg/1920px-New_national_stadium_tokyo_1.jpg",
    title: "Secons Meetup",
    address: "Location 2",
    description: "This is the second meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_DATA} />;
};

export default HomePage;
