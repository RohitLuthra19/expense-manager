const URL = "/api/v1/expenses";
export const getExpenseList = async () => {
  const data = await fetch(URL)
    .then((response) => response.json())
    .then((json) => json);
  return data;
};
