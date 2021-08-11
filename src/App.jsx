import { useState } from 'react';
import Card from './Components/Card/Card';
import { NoUserFound } from './Components/Error/NoUserFound';
import Form from './Components/Form/Form';
import Output from './Components/Output/Output';

const DUMMY_USER = [
  {
    username: 'arif2',
    age: 23,
  },
  {
    username: 'adi12',
    age: 35,
  },
  {
    username: 'adi122',
    age: 35,
  },
];

function App() {
  const [user, setUser] = useState(DUMMY_USER);

  const newUserHandler = (newUser) => {
    console.log(newUser);
    setUser((prevState) => {
      return [newUser, ...prevState];
    });
  };

  const deleteHandler = (deletedUser) => {
    setUser((prevState) => {
      const updatedUser = prevState.filter(
        (user) => user.username !== deletedUser
      );

      return updatedUser;
    });
  };

  return (
    <div>
      <Card>
        <Form addNewUser={newUserHandler} />
      </Card>
      {!user.length && <NoUserFound />}
      {user.length > 0 && <Output user={user} deletedUser={deleteHandler} />}
    </div>
  );
}

export default App;
