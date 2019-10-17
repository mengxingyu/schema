import React from 'react';
import { connect } from 'dva';
import { Button, Form, Input, Icon } from 'antd';

class TeacherLogin extends React.Component{

  render() {
    const { getFieldDecorator } = this.props.form;
    return(
      <React.Fragment>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('teacherId', {
              rules: [
                {
                  required: true,
                  message: 'Please input your teacherId!'
                }
              ],
            })(
              <Input size="large"
                     prefix={<Icon type="user"  />}
                     placeholder="Teacher Id"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true,
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
                    required: true,
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
        </Form>
        <div>
          <Button type="primary" size="large" style={{width:"100%"}}>教师登录</Button>
        </div>
        <div>
          <Button type="dashed" size="large" style={{marginTop:10,display:"inline-block",width:"48%",float:"left"}} onClick={this.handleRegister}>
            院系登录
          </Button>
          <Button type="dashed" size="large" style={{marginTop:10,display:"inline-block",width:"48%",float:"right"}} onClick={this.handleForget}>
            忘记密码
          </Button>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(({ Login,global}) => ({...Login,...global}))(Form.create()(TeacherLogin));
