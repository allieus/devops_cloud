function ReviewForm({ fieldValues, handleChange, handleSubmit }) {
  // handleSubmit 함수 내 에서 직접 fieldValues 상탯값에 접근하기보다
  // handleSubmit 함수를 호출할 때 인자로 넘겨주는 것이
  // handleSubmit 함수 최적화에 도움이 됩니다.

  const handleClickedSubmitButton = () => {
    handleSubmit(fieldValues);
  };

  return (
    <div className="rounded border-2 border-gray-300 p-3 my-3">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          평점
        </label>
        <select
          onChange={handleChange}
          name="score"
          value={fieldValues.score}
          className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        >
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          리뷰
        </label>
        <textarea
          className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          name="content"
          value={fieldValues.content}
        />
      </div>

      <div className="mb-4">
        <button
          className="shadow border bg-blue-100 hover:bg-blue-300 border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
          onClick={handleClickedSubmitButton}
        >
          저장하기
        </button>
      </div>
    </div>
  );
}

export default ReviewForm;
