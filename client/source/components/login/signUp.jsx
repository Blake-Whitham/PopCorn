import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function SignUp() {
  const { register, handleSubmit, errors } = useForm();
  const [userName, setUserName] = useState('');
  const [psw, setPsw] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <form onSubmit={}>
        <label htmlFor="userNameInput">
          <input
            id="createNameInput"
            name="userName"
            ref={register({ required: true })}
            type="text"
          />
          {errors ? <Err /> : <slot />}
        </label>
        <br />
        <label htmlFor="password1">
          <input
            id="password1"
            name="password1"
            ref={register}
            type="password"
          />
          {errors.password && 'Password is required.'}
        </label>
        <br />
        <label htmlFor="password2">
          <input
            id="password2"
            name="password2"
            ref={register}
            type="password"
          />
          {errors.password && 'Password is required.'}
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
