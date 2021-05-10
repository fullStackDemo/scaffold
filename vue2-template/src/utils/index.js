/***
 * 公共方法库
 */

// 判断是否是 IE
export const isIE = () => {
  const oldIE = !!window.ActiveXObject || 'ActiveXObject' in window;
  const edge = navigator.userAgent.includes('Edge');
  return oldIE || edge ? true : false;
};


/*
 * 格式化数据
 * 兼容 ie chrome safari
 * 在IE safari中 需要把 2021-07-10 变成 2021/07/10
 **/
export const formatDate = (date = new Date(), formatType = 'yyyy-MM-dd') => {
  const dateType = Object.prototype.toString.call(date);
  if (!date) return;
  if (dateType == "[object Date]") {
    date = date.format('yyyy-MM-dd hh:mm:ss');
  } else if (dateType != '[object String]') {
    return;
  }
  const _date = date.replace(/-/g, '/');
  return new Date(_date).format(formatType);
}


/**
 * debounce 防颤抖函数
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 */

export const debounce = function (func, wait, immediate) {
  let timeout;
  // This is the function that is actually executed when
  // the DOM event is triggered.
  return function executedFunction() {
    // store the context of this and
    // any parameters passed to th executedFunction

    const context = this;
    const args = arguments;

    // The function to be called after the debounce time has elapsed
    const later = () => {
      // null timeout to indicate the debounce ended
      timeout = null;
      if (!immediate) func.apply(context, args);
    }

    // Determine if you should call the function
    const callNow = immediate && !timeout;

    clearTimeout(timeout)

    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  }
}

// 千分位计算
export const thousandNumber = money => {
  const n = 2;
  let str = parseFloat((money + "").replace(/[^\d\.-]/g, '')).toFixed(n) + "";
  let left = str.split('.')[0].split('').reverse(),
    right = str.split('.')[1];
  let result = '';
  for (let i = 0; i < left.length; i++) {
    result += left[i] + ((i + 1) % 3 == 0 && (i + 1) != left.length ? "," : '');
  }
  result = result.split('').reverse().join('') + '.' + right;
  return result;
}

// 格式化数据
export const fixedNumber = (number, unit) => {
  if (number != 0 && !number) return number;
  if (number < 0) return 0;
  let result;
  if (unit == '%2f') {
    result = number + '%';
  } else {
    result = number.toFixed(2);
  }
  return result;
}


/***
 * MD5 加密
 */
import { md5 } from '@/lib/md5.js';
export const generateMd5 = (un, pwd) => {
  if (!un || !pwd) return null;
  const salt = "demo1qaz2wsx@123";
  const asci_str = un + salt + pwd;
  const asci_arr = asci_str.split('');
  const asci_result = [];
  asci_arr.forEach(n => {
    asci_result.push(n.charCodeAt());
  });
  const asci_result_str = asci_result.join('');
  const md5Str = md5(asci_result_str, 32);
  const md5Str_double = md5(md5Str, 32);
  return {
    md5: md5Str,
    md5_double: md5Str_double
  };
}

// 获取cookie
export const getCookie = function (name) {
  var arr,
    reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  if ((arr = document.cookie.match(reg))) {
    return decodeURIComponent(arr[2]);
  } else {
    return null;
  }
};

// 删除cookie
export const delCookie = name => {
  let date = new Date();
  date.setTime(date.getTime() - 1000);
  let cval = name;
  if (cval != null) document.cookie = name + '=' + cval + ';expires=' + date.toGMTString() + ';path=/';
};


