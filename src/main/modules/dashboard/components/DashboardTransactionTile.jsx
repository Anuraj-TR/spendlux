export const DashboardTransactionTile = ({ expense }) => {
  return (
    <>
      <div className="flex w-full bg-secondry border border-secondry p-3 shadow shadow-secondry items-center justify-between rounded-md mb-4" onClick={()=>console.log(expense.id)}>
        <div className="flex flex-col items-start justify-start w-2/3">
          <div className="w-full text-lg text-black font-medium mb-1">
            {expense.name}
          </div>
          <div className="w-full text-sm text-black font-medium">
            <span className="inline-block w-[10px] h-[10px] bg-primary rounded-full mr-1"></span>
            {expense.category}
          </div>
        </div>
        <div className="flex flex-col items-end justify-start w-1/3">
          <div className="w-full text-xs text-right text-black font-normal mb-1">
            02:12
          </div>
          <div className="w-full text-orange text-lg text-right font-medium">
            {-expense.amount}
          </div>
        </div>
      </div>
    </>
  );
}
