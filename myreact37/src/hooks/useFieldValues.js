import { useState } from 'react';

function useFieldValues() {
  const [fieldValues, setFieldValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // 함수 안 쓰고, 값 지정
    setFieldValues({
      ...fieldValues,
      [name]: value,
    });
  };

  return [fieldValues, handleChange];
}

export default useFieldValues;
