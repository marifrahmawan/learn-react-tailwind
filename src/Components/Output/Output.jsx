import { OutputList } from './OutputList';

const Output = (props) => {
  const deleteHandler = (user) => {
    props.deletedUser(user);
  };

  return (
    <div>
      {props.user.map((u) => {
        return (
          <OutputList
            key={u.username}
            username={u.username}
            age={u.age}
            onDelete={deleteHandler}
          />
        );
      })}
    </div>
  );
};

export default Output;
