export const REG_USERNAME = new RegExp(/^[A-Za-z0-9]{4,12}$/)
export const REG_PASSWORD = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)
export const REG_EMAIL = new RegExp(
  /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
)
export const REG_NAME = new RegExp(/^[ㄱ-ㅎ|가-힣|]{2,5}$/)
export const REG_PH = new RegExp(/^[0-9]{11}$/)
export const REG_BRAND = new RegExp(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,10}$/)
export const REG_ADDRESS = new RegExp(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{10,30}$/)
