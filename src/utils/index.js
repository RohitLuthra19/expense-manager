const filterByMonth = (data, month) => {
  return data?.filter((item) => {
    // eslint-disable-next-line
    let [yearPart, monthPart] = item.date.split("-");
    return monthPart === month; // '09'
  });
};

const sumOfValue = (data, field) => {
  let sum = 0;
  data?.forEach((item) => {
    sum += Number(item[field]) ?? 0;
  });
  return sum;
};

const URL = "/api/v1/expenses";

export { filterByMonth, sumOfValue, URL };
