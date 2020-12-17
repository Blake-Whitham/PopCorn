/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Err from './error';

const stringHash = require('string-hash');
const pepper = require('../../../../pepper.js');
// import Styled from 'styled-components';

export default function Form(props) {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const [error, setError] = useState(false);
  const onSubmit = (data) => {
    // eslint-disable-next-line no-param-reassign
    data.password = stringHash(`${data.password + pepper + data.userName}`);
    axios
      .post('/check', data)
      .then(() => props.setUser(data.userName))
      .catch(() => setError(true));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="userNameInput">
        <input
          id="userNameInput"
          name="userName"
          ref={register({ required: true })}
          type="text"
        />
        {error ? <Err /> : <slot />}
      </label>
      <br />
      <label htmlFor="passwordInput">
        <input
          id="passwordInput"
          name="password"
          ref={register}
          type="password"
        />
        {errors.password && 'Password is required.'}
      </label>
      <br />
      <button type="button">New User</button>
      <button type="submit">Submit</button>
    </form>
  );
}
