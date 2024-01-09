import TransactionTile from "./TransactionTile";

const TransactionTileWrap = ({ expense, date }) => {
  console.log(date);
  const totalExpence = expense.reduce((acc, cur) => {
    acc += parseInt(cur.amount);
    return acc
  }, 0)
  return (
    <>
      <div className="w-full bg-tertiary p-3 lg:p-6 rounded-md mb-2">
        <div className="w-full flex items-center justify-between py-2">
          <div className="w-1/2 flex items-center justify-start">
            <div className="inline-block mr-2 text-xl lg:text-2xl font-semibold text-white text-center">
              09
            </div>
            <div className="inline-block mr-2 text-xs lg:text-sm font-medium text-white text-center bg-orange rounded-sm min-w-[50px] py-1 px-2">
              Sun
            </div>
            <div className="inline-block text-xs lg:text-sm font-normal text-white text-center">
              11.2023
            </div>
          </div>
          <div className="w-1/4 text-base lg:text-xl font-medium text-primary text-right">
            {
              expense.income && expense.income
            }
          </div>
          <div className="w-1/4 text-sm lg:text-lg font-medium text-orange text-right">
            {totalExpence}
          </div>
        </div>
        {
          expense.map((item, index) => {
            return <TransactionTile data={ item} key={index} />
          })
        }
      </div>
    </>
  );
};

export default TransactionTileWrap;
