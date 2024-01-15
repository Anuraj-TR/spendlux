const ExpenseTile = ({data}) => {
  return (
    <>
      <div className="w-full flex items-center justify-between mb-2">
        <div className="w-4/5 flex items-center justify-start">
          <div className="w-2/5 lg:w-1/4 flex items-center justify-start lg:justify-start">
            <span className="text-sm lg:text-base font-medium text-body text-opacity-60 lg:text-left">
              {data.category}
            </span>
          </div>
          <div className="flex-1 flex flex-col items-start justify-between px-1">
            <div className="w-full text-base lg:text-lg font-medium text-body">
              {data.name}
            </div>
            <div className="w-full flex items-center justify-start">
              <span className="text-sm font-medium text-body text-opacity-60">
                {data.notes}
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 text-xs lg:text-sm font-medium text-orange text-right">
          {data.amount}
        </div>
      </div>
    </>
  );
}

export default ExpenseTile;
