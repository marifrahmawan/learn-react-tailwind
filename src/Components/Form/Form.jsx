import { useState } from 'react';

import { ModalError } from '../Error/ModalError';

const Form = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  const addUser = (event) => {
    event.preventDefault();
    if (username.length === 0 || age.length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid Input',
      });

      return;
    }

    if (age <= 0) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid Age',
      });

      return;
    }

    const enteredUser = {
      id: Math.random().toString(),
      username: username,
      age: age,
    };

    props.addNewUser(enteredUser);
    setUsername('');
    setAge('');
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const onCloseModalHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ModalError
          title={error.title}
          message={error.message}
          onCloseModal={onCloseModalHandler}
        />
      )}
      <form onSubmit={addUser} className="m-5">
        <div className="block mt-2">
          <label htmlFor="Username" className="font-semibold">
            Username
          </label>
        </div>
        <div className="block mt-2">
          <input
            type="text"
            value={username}
            onChange={usernameHandler}
            placeholder="Enter Username"
            className="w-full h-8 rounded pt-4 pb-4 pl-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          />
        </div>
        <div className="block mt-2">
          <label htmlFor="Age" className="font-semibold">
            Age
          </label>
        </div>
        <div className="block mt-2">
          <input
            type="number"
            step="1"
            value={age}
            onChange={ageHandler}
            placeholder="Enter Age (Years)"
            className="w-full h-8 rounded pt-4 pb-4 pl-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-5 bg-gray-400 p-2 rounded-md font-semibold hover:bg-sky-300 focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          >
            Add User
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
