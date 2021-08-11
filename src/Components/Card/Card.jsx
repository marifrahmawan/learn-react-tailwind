const Card = (props) => {
  return (
    <div className="flex items-center justify-center mt-12">
      <div className="h-auto w-1/2 bg-fuchsia-300 rounded-md shadow-2xl">
        <div className="ml-3">{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
