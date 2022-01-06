import { useState } from 'react';
import Rating from './Rating';

function Review({ review }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
      className="bg-white my-1 p-1 pt-3 border-2 border-green-600  relative"
    >
      {showMenu && (
        <div className="text-xs absolute top-0 right-0">
          <span className="text-green-700 hover:bg-green-300 cursor-pointer mr-1">
            수정
          </span>
          <span className="text-red-700 hover:bg-red-300 cursor-pointer">
            삭제
          </span>
        </div>
      )}
      {review.content}
      <Rating score={review.score} />
    </div>
  );
}

export default Review;
