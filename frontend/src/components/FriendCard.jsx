import React from 'react';
import { Skeleton, Card, Avatar, message } from 'antd';
import { MinusSquareOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { removeFriend } from '../store/actions/friend.action';

const FriendCard = ({ friends, loading }) => {

  const dispatch = useDispatch();

  const handleRemoveFriend = (id, name) => {
    dispatch(
      removeFriend(id)
    )
    message.success(`${name} removed from friend list`);
  }

  return (
    <>
      {friends && friends.map(({ friend }) => (
        <Card
          key={friend._id}
          className='my-4 rounded-lg shadow-md'
          actions={[
            <MinusSquareOutlined
              key='add'
              onClick={() => handleRemoveFriend(friend._id, friend.name)}
            />
          ]}
        >
          <Skeleton loading={loading} avatar active>
            <Card.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={friend.name}
              description={friend.email}

            />
          </Skeleton>
        </Card>
      ))}
    </>
  )
}

export default FriendCard