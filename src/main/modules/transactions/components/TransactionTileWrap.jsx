import TransactionTile from "./TransactionTile";

const TransactionTileWrap = () => {
  return (
    <>
      <div className="w-full bg-tertiary p-3 rounded-md mb-2">
        <div className="w-full flex items-center justify-between py-2">
          <div className="w-1/2 flex items-center justify-start">
            <div className="inline-block mr-2 text-xl font-semibold text-white text-center">
              09
            </div>
            <div className="inline-block mr-2 text-xs font-medium text-white text-center bg-orange rounded-sm min-w-[37px] py-1 px-2">
              Sun
            </div>
            <div className="inline-block text-xs font-normal text-white text-center">
              11.2023
            </div>
          </div>
          <div className="w-1/4 text-sm font-medium text-primary text-right">
            20000
          </div>
          <div className="w-1/4 text-sm font-medium text-orange text-right">
            2000
          </div>
        </div>
        <TransactionTile />
        <TransactionTile />
        <TransactionTile />
        <TransactionTile />
      </div>

      <div className="w-full bg-tertiary p-3 rounded-md mb-2">
        <div className="w-full flex items-center justify-between py-2">
          <div className="w-1/2 flex items-center justify-start">
            <div className="inline-block mr-2 text-xl font-semibold text-white text-center">
              08
            </div>
            <div className="inline-block mr-2 text-xs font-medium text-white text-center bg-grey rounded-sm min-w-[37px] py-1 px-2">
              Sat
            </div>
            <div className="inline-block text-xs font-normal text-white text-center">
              11.2023
            </div>
          </div>
          <div className="w-1/4 text-sm font-medium text-primary text-right">
            20000
          </div>
          <div className="w-1/4 text-sm font-medium text-orange text-right">
            2000
          </div>
        </div>
        <TransactionTile />
      </div>

      <div className="w-full bg-tertiary p-3 rounded-md mb-2">
        <div className="w-full flex items-center justify-between py-2">
          <div className="w-1/2 flex items-center justify-start">
            <div className="inline-block mr-2 text-xl font-semibold text-white text-center">
              06
            </div>
            <div className="inline-block mr-2 text-xs font-medium text-white text-center bg-body bg-opacity-60 rounded-sm min-w-[37px] py-1 px-2">
              Tue
            </div>
            <div className="inline-block text-xs font-normal text-white text-center">
              11.2023
            </div>
          </div>
          <div className="w-1/4 text-sm font-medium text-primary text-right">
            20000
          </div>
          <div className="w-1/4 text-sm font-medium text-orange text-right">
            2000
          </div>
        </div>
        <TransactionTile />
        <TransactionTile />
        <TransactionTile />
      </div>

      <div className="w-full bg-tertiary p-3 rounded-md mb-2">
        <div className="w-full flex items-center justify-between py-2">
          <div className="w-1/2 flex items-center justify-start">
            <div className="inline-block mr-2 text-xl font-semibold text-white text-center">
              05
            </div>
            <div className="inline-block mr-2 text-xs font-medium text-white text-center bg-body bg-opacity-60 rounded-sm min-w-[37px] py-1 px-2">
              Mon
            </div>
            <div className="inline-block text-xs font-normal text-white text-center">
              11.2023
            </div>
          </div>
          <div className="w-1/4 text-sm font-medium text-primary text-right">
            20000
          </div>
          <div className="w-1/4 text-sm font-medium text-orange text-right">
            2000
          </div>
        </div>
        <TransactionTile />
        <TransactionTile />
        <TransactionTile />
      </div>
    </>
  );
};

export default TransactionTileWrap;
