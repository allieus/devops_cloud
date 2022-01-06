import { useState } from 'react';
import Rating from './Rating';

function Review({ review, handleEdit, handleDelete }) {
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  return (
    <div
      className="p-2 pt-3 mt-3 bg-white border-2 border-green-600 hover:bg-green-200 relative"
      onMouseEnter={() => setShowDeleteButton(true)}
      onMouseLeave={() => setShowDeleteButton(false)}
    >
      <div className="mb-1">{review.content}</div>
      <Rating score={review.score} />
      {showDeleteButton && (
        <div className="absolute h-4 right-1 top-0 text-xs text-center">
          <span
            className="mr-1 cursor-pointer hover:text-purple-500"
            onClick={() => handleEdit()}
          >
            수정
          </span>
          <span
            className="cursor-pointer hover:text-red-500"
            onClick={() => handleDelete()}
          >
            삭제
          </span>
        </div>
      )}
    </div>
  );
}

export default Review;
