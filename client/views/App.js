/**
 * 声明整个页面的内容
 */
import { create } from '../utils/dva';

import './test.less';

export default ({ history, initialState }) => create({
  history,
  initialState,
  models: [require('../models/example')],
  routes: require('../routes/index'),
});
