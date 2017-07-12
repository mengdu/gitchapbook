/**
* 时间格式化
***/
export const format = (time, format) => {
  var t = new Date(time)
  var tf = function (i) {
    return (i < 10 ? '0' : '') + i
  }
  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
    let str = ''
    switch (a) {
      case 'yyyy':
        str = tf(t.getFullYear())
        break
      case 'MM':
        str = tf(t.getMonth() + 1)
        break
      case 'mm':
        str = tf(t.getMinutes())
        break
      case 'dd':
        str = tf(t.getDate())
        break
      case 'HH':
        str = tf(t.getHours())
        break
      case 'ss':
        str = tf(t.getSeconds())
        break
    }
    return str
  })
}