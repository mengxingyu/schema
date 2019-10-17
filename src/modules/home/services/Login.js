import request from "../../common/request";


export  function checkInfo(info) {

  return request(' http://localhost:8888/Login',{
    method: 'POST',
    headers: {
      //'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Content-Type': 'application/json',
    },
    body: {
      studentID: "11"

    },

  });
}
