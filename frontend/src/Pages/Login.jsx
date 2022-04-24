import React, { useEffect } from 'react'
import { Form, Input, Button, PageHeader, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  signIn
} from '../store/actions/user.action'
import { Link } from 'react-router-dom'


const Login = () => {

  const dispatch = useDispatch();

  const userState = useSelector(state => state.user);
  const { signIn: { loading, error } } = userState;
  const { myProfile: { user } } = userState;


  const onFinish = (values) => {
    dispatch(
      signIn({
        email: values.email,
        password: values.password,
      })
    )
  };

  useEffect(() => {
    if (user) {
      dispatch({
        type: 'SIGN_IN_RESET',
      })
      window.location.href = '/';
    }
  }, [user,
    dispatch])


  return (
    <div className='flex flex-col items-center justify-center p-4'>
      {
        loading && <Tag color='blue'>Loading...</Tag>
      }
      <PageHeader title='Login' className='text-2xl font-semibold' />
      <Form
        name="Login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
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

      <Link to='/register'>
        <Tag className='mt-4'
          color='blue' >
          Don't have an account? Sign up
        </Tag>
      </Link>
      {
        error &&
        <Tag color='red' className='mt-4'>{error}</Tag>
      }
    </div>
  )
}

export default Login