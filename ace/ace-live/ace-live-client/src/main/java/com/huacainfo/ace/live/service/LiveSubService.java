package com.huacainfo.ace.live.service;

import com.huacainfo.ace.common.model.UserProp;
import com.huacainfo.ace.common.result.MessageResponse;
import com.huacainfo.ace.common.result.PageResult;
import com.huacainfo.ace.common.result.SingleResult;
import com.huacainfo.ace.live.model.LiveSub;
import com.huacainfo.ace.live.vo.LiveSubVo;
import com.huacainfo.ace.live.vo.LiveSubQVo;

/**
 * @author: 陈晓克
 * @version: 2018-01-03
 * @Description: TODO(图文直播)
 */
public interface LiveSubService {
    /**
     * @throws
     * @Title:find!{bean.name}List
     * @Description: TODO(图文直播分页查询)
     * @param: @param condition
     * @param: @param start
     * @param: @param limit
     * @param: @param orderBy
     * @param: @throws Exception
     * @return: PageResult<LiveSubVo>
     * @author: 陈晓克
     * @version: 2018-01-03
     */
    public abstract PageResult<LiveSubVo> findLiveSubList(LiveSubQVo condition, int start, int limit, String orderBy) throws Exception;

    /**
     * @throws
     * @Title:insertLiveSub
     * @Description: TODO(添加图文直播)
     * @param: @param obj
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: 陈晓克
     * @version: 2018-01-03
     */
    public abstract MessageResponse insertLiveSub(LiveSub obj) throws Exception;

    /**
     * @throws
     * @Title:updateLiveSub
     * @Description: TODO(更新图文直播)
     * @param: @param obj
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: 陈晓克
     * @version: 2018-01-03
     */
    public abstract MessageResponse updateLiveSub(LiveSub obj) throws Exception;

    /**
     * @throws
     * @Title:selectLiveSubByPrimaryKey
     * @Description: TODO(获取图文直播)
     * @param: @param id
     * @param: @throws Exception
     * @return: SingleResult<LiveSub>
     * @author: 陈晓克
     * @version: 2018-01-03
     */
    public abstract SingleResult<LiveSubVo> selectLiveSubByPrimaryKey(String id) throws Exception;

    /**
     * @throws
     * @Title:deleteLiveSubByLiveSubId
     * @Description: TODO(删除图文直播)
     * @param: @param id
     * @param: @param  userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: 陈晓克
     * @version: 2018-01-03
     */
    public abstract MessageResponse deleteLiveSubByLiveSubId(String id, UserProp userProp) throws Exception;


    /**
     * @throws
     * @Title:updateSortByPrimaryKey
     * @Description: TODO(更新图文直播顺序)
     * @param: @param id
     * @param: @param sort
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: 陈晓克
     * @version: 2018-01-07
     */
    public abstract MessageResponse updateSortByPrimaryKey(String id, int sort) throws Exception;


    /**
     * @throws
     * @Title:updateLiveSub
     * @Description: TODO(更新图文直播)
     * @param: @param obj
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: 陈晓克
     * @version: 2018-01-03
     */
    public abstract MessageResponse updateLiveSubStatus(String id, String status) throws Exception;


}