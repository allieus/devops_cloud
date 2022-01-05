import Rating from './Rating';

function Review({ review }) {
  return (
    <div className="bg-white my-1 p-1 border-2 border-green-600 hover:bg-green-200 cursor-pointer">
      {review.content}
      <Rating score={review.score} />
    </div>
  );
}

export default Review;
