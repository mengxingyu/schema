import React from "react";
import { connect } from 'dva';
import {Menu} from "antd"
import StudentLogin from "./StudentLogin";
import TeacherLogin from "./TeacherLogin";
import styles from './Login.css';
@connect(({Login}) => ({Login}))
export default class Login extends React.Component{
  state = {
    currentSelected:"student"
  }
  handleMenuClick = (e) => {
    this.setState({
      currentSelected:e.key
    })
  }
  render(){
    return (
      <div className={styles.background}>
        <div className={styles.titles}>
          <div className={styles.picture}></div>
          <div className={styles.text}>SchemaCourse</div>
        </div>
        <div  className={styles.container}>
          <Menu onClick={this.handleMenuClick} mode="horizontal" selectedKeys={[this.state.currentSelected]}>
            <Menu.Item key="student" style={{width:"50%",textAlign:"center",float:"left"}}>
              学生登录
            </Menu.Item>
            <Menu.Item key="teacher" style={{width:"50%",textAlign:"center",float:"left"}}>
              教师登录
            </Menu.Item>
          </Menu>
          <div style={{marginTop:20}}>
            {
              this.state.currentSelected === "student"
                ? <StudentLogin />
                :<TeacherLogin/>
            }
          </div>
        </div>
      </div>
    )
  }
}
