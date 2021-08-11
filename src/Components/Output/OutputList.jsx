export const OutputList = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.username);
  };

  return (
    <div className="flex items-center justify-center mt-5">
      <button
        onClick={deleteHandler}
        className="h-auto w-1/2 bg-sky-300 rounded-md shadow-2xl p-2 hover:bg-gray-400 focus:ring-2 focus:ring-gray-900"
      >
        <div className="grid grid-cols-2">
          <div className="ml-3 text-center text-lg font-semibold">
            {props.username}
          </div>
          <div className="ml-3 text-center font-semibold">
            {props.age} Years
          </div>
        </div>
      </button>
    </div>
  );
};
