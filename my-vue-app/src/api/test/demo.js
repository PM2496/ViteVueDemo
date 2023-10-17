import request from '@/utils/request';

export default {
  time() {
    return request({
      url: '/file_info/selectAll',
      method: 'get',
    });
  },
};
