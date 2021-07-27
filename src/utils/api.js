import { get, post, put, patch, del } from './http'


//用户登录
export const login = (params) => post("/api/user/query", params);
//用户注册
export const register = (params) => post("/api/user/save", params);
//查询用户列表
export const queryUserList = (params) => post("/api/user/query/all", params);
//更新user用户信息
export const updateUser = (params) => patch("/api/user/update", params);
//创建task任务
export const addCommTask = (params) => post("/api/task/save", params);
//查询task任务列表
export const queryCommTask = (params) => post("/api/task/query/all", params);
//查询用户task任务列表
export const queryUserCommTask = (params) => post("/api/task/query/user-task", params);
//更新task任务
export const updateCommTask = (params) => patch("/api/task/update", params);
//任务历史记录查询
export const queryCommTaskHisLog = (params) => post("/api/task/his/query", params);


//设置默认export
export default login