import React, { useEffect } from 'react'
import { Form, Input, Button, PageHeader, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  signUp
} from '../store/actions/user.action'
import { Link } from 'react-router-dom'

const Register = () => {

  const dispatch = useDispatch();


  const userState = useSelector(state => state.user);
  const { myProfile: { user } } = userState;
  const { signIn: { loading, error } } = userState;

  const onFinish = (values) => {
    dispatch(
      signUp({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    )
  };

  useEffect(() => {
    if (user) {
      dispatch({
        type: 'SIGN_UP_RESET',
      })
      window.location.href = '/';
    }
  }, [user, dispatch])

  return (
    <div className='flex flex-col items-center justify-center p-4'>
      {
        loading && <Tag color='blue'>Loading...</Tag>
      }
      <PageHeader title='Register' className='text-2xl font-semibold' />
      <Form
        name="Register"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name!' }]}
          className='grid grid-cols-2 gap-4'
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please enter your email!' }]}
          className='grid grid-cols-2 gap-4'
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
          className='grid grid-cols-2 gap-4'

        >
          <Input.Password />
        </Form.Item>


        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          className='grid grid-cols-2 gap-4'

          rules={
            [
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('The two passwords that you entered do not match!');
                }
              }),
              {
                required: true,
                message: 'Please confirm your password!'
              }
            ]
          }
        >
          <Input.Password />
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

      <Link to='/login'>
        <Tag className='mt-4'
          color='blue'>
          Already have an account?
        </Tag>
      </Link>
      {
        error &&
        <Tag color='red' className='mt-4'>{error}</Tag>
      }
    </div>
  )
}

export default Register