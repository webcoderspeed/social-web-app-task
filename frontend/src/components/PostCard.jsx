import React, { useEffect } from 'react';
import { Skeleton, Card, Avatar } from 'antd';

const PostCard = ({ posts }) => {

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])

  return (
    <>
      {posts.map(post => (
        <Card
          key={post.id}
          className='my-4'
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