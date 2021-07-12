import { get, post, put, patch, del } from './http'


//用户登录
export const login = (params) => post("/api/user/query", params);
//用户注册
export const register = (params) => post("/api/user/save", params);



//设置默认export
export default login