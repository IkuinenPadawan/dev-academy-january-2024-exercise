import { useRouteError, useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="flex flex-col gap-2 m-3">
      <h1 className="font-2xl font-bold">Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button
        className="font-bold rounded-r py-2 bg-blue-400 hover:bg-blue-300 px-2 disabled:bg-slate-400"
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default Error;
