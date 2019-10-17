import dva from 'dva';
import './index.css';
import RouterConfig from "./router"
import { message } from 'antd';
// 1. Initialize
const app = dva({
  history: require('history').createHashHistory(),
  onError(err) {
    message.error(err.message);
  }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./modules/home/models/Login').default);

// 4. Router
app.router(RouterConfig);

// 5. Start
app.start('#root');
