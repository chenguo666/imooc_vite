export const validateUsername = (val) => {
  if (!val) {
    return '用户名必填'
  }
  if (val.length < 3 || val.length > 12) {
    return '用户名需要3到12位之间'
  }

  return true
}
export const validatePassword = (val) => {
  if (!val) {
    return '密码必填'
  }
  if (val.length < 6 || val.length > 12) {
    return '密码6到12位之间'
  }

  return true
}
