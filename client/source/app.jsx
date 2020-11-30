import React, { useState } from 'react';
import Logo from './components/loading/logo';
import Form from './components/login/form';
import Icon from './static/icon';
import TopRated from './components/movies/topRated';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return (
    <div>
      {user ? (
        <div>
          <Icon />
          <TopRated user={user} />
        </div>
      ) : (
        <div>
          {loading ? <div /> : <Icon />}
          {loading ? <Logo /> : <Form setUser={setUser} />}
        </div>
      )}
    </div>
  );
}
