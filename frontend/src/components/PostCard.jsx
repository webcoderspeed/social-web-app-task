import React, { useEffect } from 'react';
import { Skeleton, Card, Avatar } from 'antd';

const PostCard = ({ posts, loading }) => {


  return (
    <>
      {posts && posts.map(post => (
        <Card
          key={post._id}
          className='my-4 rounded-lg shadow-md'
        >
          <Skeleton loading={loading} avatar active>
            <Card.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={post.title}
              description={post.content}

            />
          </Skeleton>
        </Card>
      ))}
    </>
  )
}

export default PostCard