
const TransactionTile = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <div className="w-4/5 flex items-center justify-start">
          <div className="w-1/4 flex items-center justify-center">
            <span className="text-sm font-medium text-body text-opacity-60">
              Category
            </span>
          </div>
          <div className="flex-1 flex flex-col items-start justify-between px-1">
            <div className="w-full text-base font-medium text-body">Name</div>
            <div className="w-full flex items-center justify-start">
              <span className="text-xs font-medium text-body text-opacity-60">
                Notes
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 text-xs font-medium text-orange text-right">
          100.00
        </div>
      </div>
    </>
  );
}

export default TransactionTile;