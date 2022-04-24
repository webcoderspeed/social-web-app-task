import React from 'react'
import { Form, Input, Button, PageHeader, } from 'antd';

const Login = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };


  return (
    <div className='flex flex-col items-center justify-center p-4'>
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
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
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
    </div>
  )
}

export default Login