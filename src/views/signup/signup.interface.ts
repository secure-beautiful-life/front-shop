export interface Req_Signup {
  username: string // (id) 4자 이상 13자이하, 영어 숫자만 가능
  password: string // 글자수 8이상 13자 이하 + 특수문자 1개
  name: string // 2자 이상 6자 이하 + 특수문자 불가
  gender: string
  email: string // 이메일 정규식 (20자 이하)
  phoneNumber: string // 핸드폰 정규식 ( 12자 이하 )
  address: string // ~도 ~시 ~구 ~동 ~~
}
export interface Res_Signup {
  userId: number
  userName: string
}

export interface Req_Login {
  username: string
  password: string
}

export interface Res_Login {
  accessToken: string
  refreshToken: string
}

export type Modal_Type = 'success' | 'error' | null
