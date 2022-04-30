import React, { useEffect } from 'react';
import { Skeleton, Card, Avatar, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addFriend, removeFriend } from '../store/actions/friend.action';

const PeopleCard = ({ peoples, loading }) => {

  const dispatch = useDispatch();
  const userState = useSelector(state => state.user);
  const { myProfile: { user } } = userState;

  const handleAddFriend = (id, name) => {
    dispatch(addFriend(id));
    message.success(`${name} added to friend list`);
  }

  const handleRemoveFriend = (id, name) => {
    dispatch(
      removeFriend(id)
    )
    message.success(`${name} removed from friend list`);
  }

  return (
    <>
      {peoples && peoples.map((people) => (
        <Card
          key={people._id}
          className='my-4 rounded-lg shadow-md'
          actions={[
            // if the userId is same as peopled._id hidding the add friend button, then show the add friend button
            user?._id === people?._id ? null : people?.isFriend ? <button onClick={() => handleRemoveFriend(people._id, people.name)}>Remove Friend</button> : <button onClick={() => handleAddFriend(people._id, people.name)}>Add Friend</button>
          ]}
        >
          <Skeleton loading={loading} avatar active>
            <Card.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={people.name}
              description={people.email}
            />
          </Skeleton>
        </Card>
      ))}
    </>
  )
}

export default PeopleCard