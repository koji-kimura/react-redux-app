// 操作しやすい配列にするために修正
import _ from 'lodash';
import { READ_EVENTS } from '../actions';

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id');
    default:
      return events;
  }
};
