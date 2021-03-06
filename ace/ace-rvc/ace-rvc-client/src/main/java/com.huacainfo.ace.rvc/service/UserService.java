package com.huacainfo.ace.rvc.service;

import com.huacainfo.ace.rvc.model.RvcBaseUser;

import java.util.List;

/**
 * Created by Arvin on 2017/11/23.
 */
public interface UserService {

    /**
     * 1.	从浪潮方获取登录人员参数（我方提供连接地址）
     * 2.	从指定memcache获取登陆人具体信息
     * 3.	人员信息放入session，同步人员数据入库。
     *
     * @param userId 浪潮 userId
     * @return ok/fail
     */
    RvcBaseUser login(String userId);

    /***
     * 获取所有人员列表
     * @param userId 操作用户ID
     * @return list
     */
    List<RvcBaseUser> getAll(String userId);

    /**
     * redis方式获取用户信息
     *
     * @param userId 用户ID-rvc_base_user.userId
     * @return RvcBaseUser
     */
    RvcBaseUser getByUserIdWithRedis(String userId);
}
