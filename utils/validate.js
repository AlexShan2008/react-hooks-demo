const isNumber = number => {
  if (!number) {
    return false
  }
  const reg = /^\d+$/
  return reg.test(number.trim())
}

const isValidPhone = phone => {
  if (!phone) {
    return false
  }
  const reg = /^1[3456789]\d{9}$/
  return reg.test(phone.trim())
}

const isValidEmail = email => {
  if (!email) {
    return false
  }
  const reg = /^[a-z0-9](\w|\.|-)*@([a-z0-9]+-?[a-z0-9]+\.){1,3}[a-z]{2,4}$/i
  return reg.test(email.trim())
}

const isValidUserName = username => {
  return isValidEmail(username) || isValidPhone(username)
}

const isValidPassword = password => {
  if (!password) {
    return false
  }

  const MIN_LENGTH = 6
  const MAX_LENGTH = 16
  const length = password.length

  if (length < MIN_LENGTH || length > MAX_LENGTH || isNumber(password)) {
    return false
  }

  return true
}

const isValidCaptcha = captcha => {
  const reg = /^\d{6}$/
  return reg.test(captcha.trim())
}

export {
  isValidUserName,
  isValidPassword,
  isValidCaptcha
}
