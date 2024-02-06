const PageNotFound = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full max-w-[500px] flex items-center justify-center">
        <img src="/assets/images/404-1.svg" alt="" />
      </div>
      <h2 className="text-2xl font-medium text-center">
        Its looks like Its empty here
      </h2>
    </div>
  );
}

export default PageNotFound;
