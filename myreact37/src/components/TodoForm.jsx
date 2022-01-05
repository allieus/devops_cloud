function TodoForm({ fieldValues, handleChange, handleSubmit }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="rounded border-2 border-gray-300 p-3 my-3">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          색상
        </label>
        <select
          onChange={handleChange}
          name="color"
          value={fieldValues.color}
          className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        >
          <option>Darkgreen</option>
          <option>BlueViolet</option>
          <option>Brown</option>
          <option>Coral</option>
          <option>Crimson</option>
          <option>DarkBlue</option>
          <option>DarkGoldenRod</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          할일
        </label>
        <input
          type="text"
          className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          name="content"
          value={fieldValues.content}
        />
      </div>
    </div>
  );
}

export default TodoForm;
