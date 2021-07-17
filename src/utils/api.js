import { get, post, put, patch, del } from './http'


//用户登录
export const login = (params) => post("/api/user/query", params);
//用户注册
export const register = (params) => post("/api/user/save", params);
//查询用户列表
export const queryUserList = (params) => post("/api/user/query/all", params);
//查询task任务列表
export const queryCommTask = (params) => post("/api/task/query/all", params);
//更新task任务
export const updateCommTask = (params) => patch("/api/task/update", params);


//设置默认export
export default login