export interface Req_Signup {
  username: string
  password: string
  password_check: string
  role_id: number
  name: string
  type: string
  brand_name?: string
  gender: string
  email: string
  phone: number
  address: string
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
  access_token: string
  refresh_token: string
}

export interface Res_IsUser {
  profile_image_url: string
  password: string
  userId: string
  name: string
  role: string
  gender: string
  email: string
  phone: string
  address: string
}

export interface Req_IsUser {
  username?: string
  password?: string
  name?: string
  gender?: string
  email?: string
  phone?: string
  address?: string
}

export interface Req_UserImg {
  image_string: string
  file_name: string
}
