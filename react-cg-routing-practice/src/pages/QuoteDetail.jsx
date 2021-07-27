import { Link, Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Max",
    text: "Learning React is fun!",
  },
  {
    id: "q2",
    author: "Maximilian",
    text: "Learning React is great!",
  },
];

const QuoteDetail = () => {
  const { quoteId } = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);
  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route exact path={`/quotes/${quoteId}`}>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
