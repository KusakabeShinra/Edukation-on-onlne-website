import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './store/usersSlice';
import { fetchPosts } from './store/postsSlice';

function App() {
  const dispatch = useDispatch();
  const { list: users, status: usersStatus } = useSelector((state) => state.users);
  const { list: posts, status: postsStatus } = useSelector((state) => state.posts);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchPosts());
  }, [dispatch]);

  // Фильтр пользователей по имени (поиск)
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Фильтрация постов по userId (основное требование)
  const userPosts = posts.filter(post => post.userId === selectedUserId);

  if (usersStatus === 'loading' || postsStatus === 'loading') {
    return <div style={{ padding: '2rem' }}>Загрузка...</div>;
  }

  if (usersStatus === 'failed' || postsStatus === 'failed') {
    return <div style={{ padding: '2rem', color: 'red' }}>Ошибка загрузки данных</div>;
  }

  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '1rem' }}>
      {/* Левая панель: список пользователей */}
      <div style={{ flex: 1, borderRight: '1px solid #ccc', paddingRight: '1rem' }}>
        <h2>Пользователи</h2>
        <input
          type="text"
          placeholder="Поиск по имени"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
        />
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredUsers.map(user => (
            <li
              key={user.id}
              onClick={() => setSelectedUserId(user.id)}
              style={{
                padding: '0.75rem',
                marginBottom: '0.5rem',
                backgroundColor: selectedUserId === user.id ? '#e0e0e0' : '#f5f5f5',
                cursor: 'pointer',
                borderRadius: '4px',
              }}
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Правая панель: посты выбранного пользователя */}
      <div style={{ flex: 2 }}>
        <h2>
          {selectedUserId
            ? `Посты пользователя ${users.find(u => u.id === selectedUserId)?.name || ''}`
            : 'Выберите пользователя'}
        </h2>
        {userPosts.length === 0 && selectedUserId && <p>У этого пользователя нет постов</p>}
        <div>
          {userPosts.map(post => (
            <div
              key={post.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '1rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;