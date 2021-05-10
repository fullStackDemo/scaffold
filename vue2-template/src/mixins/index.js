// 消息提醒 封装统一方法
import {
  SSOURL
} from "@util/consts"
export default {
  methods: {
    // 信息提示
    $showMessage(params) {
      const {
        type,
        message
      } = params;
      
      this.$message({
        type,
        message,
        offset: 200,
        center: true,
        customClass: 'popup_message'
      });
    },

  }
};
