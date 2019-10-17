import {checkInfo} from "../services/Login";

export default{
  namespace:'Login',
  state:{

  },
  effects:{
      *checkInfo({payload},{call,put}){
        const p1 = new URLSearchParams();
        p1.append("studentId",payload.values.studentId)
        p1.append("password",payload.values.password)
        const result = yield call(checkInfo,p1);
         console.log(result)
      }
  },
  reducers:{

  }
};
