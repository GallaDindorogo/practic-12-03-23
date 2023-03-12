import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { selectCurrent } from 'redux/users/usersSelector';

import { getUserById } from 'redux/users/usersOperations';

import { deleteUser } from 'redux/users/usersOperations';

export const UserDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  const user = useSelector(selectCurrent);
  const navigate = useNavigate();

  const onDeleteUser = id => {
    dispatch(deleteUser(id));
    navigate('/users');
  };

  return (
    <>
      {user && (
        <div>
          <img src={user.avatar} alt="" />
          <p>{user.name}</p>
          <p>{user.phone}</p>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <button onClick={() => onDeleteUser(id)} type="button">
            Delete
          </button>
        </div>
      )}
    </>
  );
};
