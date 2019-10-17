import React from 'react';
import { connect } from 'dva';
import { Button, Form, Input, Icon, } from 'antd';

class StudentLogin extends React.Component{

  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.dispatch({type:'Login/checkInfo',payload:{values}})
      }
  })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return(
      <React.Fragment>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('studentId', {
            rules: [
              {
                required: true,
                message: 'Please input your studentId!'
              }
              ],
          })(
            <Input size="large"
              prefix={<Icon type="user"  />}
              placeholder="Student Id"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your Password!'
              }
              ],
          })(
            <Input
              size="large"
              prefix={<Icon type="lock"  />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <div>
          <Form.Item>
            {getFieldDecorator('captcha', {
              rules: [
                {
                  message: '请输入验证码'
                }
              ]
            })(
              <Input
                size="large"
                prefix={<Icon type="picture" />}
                placeholder="请输入验证码"
                style={{width:"75%"}}
              />
            )}
          </Form.Item>
            <div>
            </div>
        </div>
        <div>
          <Button type="primary" size="large" style={{width:"100%"}} htmlType="submit">学生登录</Button>
          <Button type="dashed" size="large" style={{marginTop:10,display:"inline-block",width:"100%"}} >
            忘记密码
          </Button>
        </div>
      </Form>

      </React.Fragment>
    )
  }
}

export default connect(({ Login,global}) => ({...Login,...global}))(Form.create()(StudentLogin));
