import { useNavigate, useLoaderData, useLocation } from "react-router-dom";
const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const navigate = useNavigate();
  const { pageCount, page } = meta.pagination;
  const { pathname, search } = useLocation();
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  const handleChange = (page) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", page);
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  if (pageCount < 2) return null;
  return (
    <div className="flex  justify-end mt-16">
      <div className="join ">
        <button
          className="join-item btn"
          onClick={() => {
            let pre = page - 1;
            if (pre < 1) pre = pageCount;
            handleChange(pre);
          }}
        >
          PREV
        </button>
        {pages.map((pagenum) => {
          return (
            <button
              key={pagenum}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                page === pagenum ? "bg-base-300" : "border-base-300"
              }`}
              onClick={() => handleChange(pagenum)}
            >
              {pagenum}
            </button>
          );
        })}
        <button
          className="join-item btn"
          onClick={() => {
            let next = page + 1;
            if (next > pageCount) pre = 1;
            handleChange(next);
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};
export default PaginationContainer;
