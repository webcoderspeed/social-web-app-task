import { Button, Form, Input, Select } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../store/actions/post.action';

const CreatePost = () => {

  const dispatch = useDispatch();

  const postState = useSelector(state => state.post);

  const { createPost: {
    success,
    loading,
    error
  } } = postState;

  const onFinish = (values) => {
    dispatch(createPost(values));
  };

  useEffect(() => {
    if (success) {
      window.location.href = '/';
    }
    dispatch({
      type: 'CREATE_POST_RESET'
    })

  }, [
    dispatch,
    success
  ])


  return (
    <div className='mx-auto my-12 w-full p-4   md:w-1/2'>
      <h1 className='text-2xl font-semibold'>Create Post</h1>
      <Form layout='vertical'
        onFinish={onFinish}
        initialValues={{ remember: true }}
      >
        <Form.Item label='Title' name='title'
          rules={[{ required: true, message: 'Please enter a title!' }]}
        >
          <Input type='text' placeholder='Title' />
        </Form.Item>
        <Form.Item label='Content' name='content'
          rules={[{ required: true, message: 'Please enter some content!' }]}
        >
          <Input.TextArea placeholder='Content' />
        </Form.Item>

        <Form.Item label='Visibility' name='visibility'
          rules={[{ required: true, message: 'Please select a visibility!' }]}
        >
          <Select defaultValue='Select'>
            <Select.Option value='Select'>Select</Select.Option>
            <Select.Option value='public'>Public</Select.Option>
            <Select.Option value='private'>Private</Select.Option>
            <Select.Option value='friends'>Friends</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}
          className='w-full grid justify-center'
        >
          <Button htmlType="submit"
            className='px-4 font-semibold rounded-lg bg-blue-400 hover:bg-blue-600 text-white hover:text-white'
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreatePost;
