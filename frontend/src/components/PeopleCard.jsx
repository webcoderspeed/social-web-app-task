import React, { useEffect } from 'react';
import { Skeleton, Card, Avatar, message } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addFriend, getFriendList, } from '../store/actions/friend.action';

const PeopleCard = ({ peoples, loading }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFriendList());
  }, [dispatch]);

  const handleAddFriend = (id, name) => {
    dispatch(addFriend(id));
    message.success(`${name} added to friend list`);
  }


  return (
    <>
      {peoples && peoples.map((people) => (
        <Card
          key={people._id}
          className='my-4 rounded-lg shadow-md'
          actions={[
            <PlusSquareOutlined
              key='add'
              onClick={() => handleAddFriend(people._id, people.name)}
            />
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