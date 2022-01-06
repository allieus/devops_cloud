import Review from './Review';
import useFieldValues from 'hooks/useFieldValues';
import { useState } from 'react';
import ReviewForm from './ReviewForm';

const INITIAL_STATE = [
  {
    id: 1,
    content: '스파이더맨 1 부터 본 사람이면 재미없을 수가 없다',
    score: 5,
  },
  {
    id: 2,
    content:
      '전 스파이더맨 두명이 자책했던 일들이 여기서 어느정도 구원받았다는거에 감사드립니다',
    score: 4,
  },
  {
    id: 3,
    content:
      '엔드게임을 뛰어넘는 영화가 죽기전에 나올까 생각했었는데.. 2년만에 나왔습니다',
    score: 5,
  },
];

function ReviewList() {
  const [reviewList, setReviewList] = useState(INITIAL_STATE);
  const [fieldValues, handleChange, clearFieldValues, setFieldValues] =
    useFieldValues({
      content: '',
      score: 5,
    });
  const [isShowReviewForm, setIsShowReviewForm] = useState(false);

  const saveReview = (savingFieldValues) => {
    let { id: reviewId } = savingFieldValues;

    // 생성
    if (!reviewId) {
      // DB에 저장할 경우, DB에서 식별자(pk)를 제공해줍니다.
      reviewId = `review-${new Date().getTime()}`;

      const savingReview = { ...savingFieldValues, id: reviewId };
      setReviewList((prevReviewList) => [...prevReviewList, savingReview]);
    }
    // 수정
    else {
      const savingReview = { ...savingFieldValues };

      setReviewList((prevReviewList) =>
        prevReviewList.map((review) => {
          if (review.id === reviewId) {
            return savingReview;
          }
          return review;
        }),
      );
    }

    clearFieldValues();
    setIsShowReviewForm(false);
  };

  const deleteReview = (deletingReview) => {
    // TODO: 유저에게 확인 받기

    // review에 유일한 식별자 id 속성이 있습니다.
    setReviewList((prevReviewList) =>
      prevReviewList.filter((review) => {
        return review.id !== deletingReview.id;
      }),
    );
  };

  const editReview = (editingReview) => {
    console.log('editing', editingReview);
    setFieldValues(editingReview);
    setIsShowReviewForm(true);
  };

  return (
    <div>
      <h2 className="text-xl mt-3 mb-2 border-b-2 border-orange-500">
        ReviewList
      </h2>

      {!isShowReviewForm && (
        <button
          onClick={() => setIsShowReviewForm(true)}
          className="bg-orange-200 hover:bg-orange-400 p-1 rounded text-sm hover:-translate-y-1"
        >
          New Review
        </button>
      )}
      {isShowReviewForm && (
        <ReviewForm
          fieldValues={fieldValues}
          handleChange={handleChange}
          handleSubmit={saveReview}
        />
      )}

      {reviewList.length === 0 && (
        <div className="bg-red-100 p-1 my-1 rounded border-2 border-red-200">
          등록된 리뷰가 없습니다.
        </div>
      )}
      {reviewList.map((review) => (
        <Review
          review={review}
          handleEdit={() => editReview(review)}
          handleDelete={() => deleteReview(review)}
        />
      ))}
    </div>
  );
}

export default ReviewList;
