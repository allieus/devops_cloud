import { useState } from 'react';
import Rating from './Rating';

function Review({ review, handleDelete }) {
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleClickedDeleteButton = () => {
    if (handleDelete) {
      handleDelete(review);
    } else {
      console.warn('handleDelete 속성값이 없습니다.');
    }
  };

  return (
    <div
      className="p-2 my-3 bg-white border-2 border-green-600 hover:bg-green-200 relative"
      onMouseEnter={() => setShowDeleteButton(true)}
      onMouseLeave={() => setShowDeleteButton(false)}
    >
      {review.content}
      <Rating score={review.score} />
      {showDeleteButton && (
        <div
          className="cursor-pointer absolute h-4 w-4 right-0 top-0 text-xs text-center"
          onClick={() => handleClickedDeleteButton()}
        >
          X
        </div>
      )}
    </div>
  );
}

export default Review;
