package com.huacainfo.ace.woc.service.impl;


import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.huacainfo.ace.common.model.UserProp;
import com.huacainfo.ace.common.result.MessageResponse;
import com.huacainfo.ace.common.result.PageResult;
import com.huacainfo.ace.common.result.SingleResult;
import com.huacainfo.ace.common.tools.CommonUtils;
import com.huacainfo.ace.woc.dao.RoadDao;
import com.huacainfo.ace.woc.model.Road;
import com.huacainfo.ace.portal.service.DataBaseLogService;
import com.huacainfo.ace.woc.service.RoadService;
import com.huacainfo.ace.woc.vo.RoadVo;
import com.huacainfo.ace.woc.vo.RoadQVo;

@Service("roadService")
/**
 * @author: Arvin
 * @version: 2018-03-09
 * @Description: TODO(道路档案)
 */
public class RoadServiceImpl implements RoadService {
    Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private RoadDao roadDao;
    @Autowired
    private DataBaseLogService dataBaseLogService;

    /**
     * @throws
     * @Title:find!{bean.name}List
     * @Description: TODO(道路档案分页查询)
     * @param: @param condition
     * @param: @param start
     * @param: @param limit
     * @param: @param orderBy
     * @param: @throws Exception
     * @return: PageResult<RoadVo>
     * @author: Arvin
     * @version: 2018-03-09
     */
    @Override
    public PageResult<RoadVo> findRoadList(RoadQVo condition, int start,
                                           int limit, String orderBy) throws Exception {
        PageResult<RoadVo> rst = new PageResult<RoadVo>();
        List<RoadVo> list = this.roadDao.findList(condition,
                start, start + limit, orderBy);
        rst.setRows(list);
        if (start <= 1) {
            int allRows = this.roadDao.findCount(condition);
            rst.setTotal(allRows);
        }
        return rst;
    }

    /**
     * @throws
     * @Title:insertRoad
     * @Description: TODO(添加道路档案)
     * @param: @param o
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: Arvin
     * @version: 2018-03-09
     */
    @Override
    public MessageResponse insertRoad(Road o, UserProp userProp)
            throws Exception {
        o.setId(UUID.randomUUID().toString());
        //o.setId(String.valueOf(new Date().getTime()));
        if (CommonUtils.isBlank(o.getId())) {
            return new MessageResponse(1, "主键不能为空！");
        }
        if (CommonUtils.isBlank(o.getRoadName())) {
            return new MessageResponse(1, "道路名称不能为空！");
        }
        if (CommonUtils.isBlank(o.getRoadCode())) {
            return new MessageResponse(1, "道路国标不能为空！");
        }
        if (CommonUtils.isBlank(o.getAreaCode())) {
            return new MessageResponse(1, "所在地区不能为空！");
        }
        if (CommonUtils.isBlank(o.getRoadStatus())) {
            return new MessageResponse(1, "道路运行状态不能为空！");
        }
        if (CommonUtils.isBlank(o.getStatus())) {
            return new MessageResponse(1, "状态不能为空！");
        }
        if (CommonUtils.isBlank(o.getLastModifyDate())) {
            return new MessageResponse(1, "最后更新时间不能为空！");
        }

        int temp = this.roadDao.isExit(o);
        if (temp > 0) {
            return new MessageResponse(1, "道路档案名称重复！");
        }
        o.setCreateDate(new Date());
        o.setStatus("1");
        o.setCreateUserName(userProp.getName());
        o.setCreateUserId(userProp.getUserId());
        this.roadDao.insert(o);
        this.dataBaseLogService.log("添加道路档案", "道路档案", "", o.getRoadName(), o.getRoadName(), userProp);
        return new MessageResponse(0, "添加道路档案完成！");
    }

    /**
     * @throws
     * @Title:updateRoad
     * @Description: TODO(更新道路档案)
     * @param: @param o
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: Arvin
     * @version: 2018-03-09
     */
    @Override
    public MessageResponse updateRoad(Road o, UserProp userProp)
            throws Exception {
        if (CommonUtils.isBlank(o.getId())) {
            return new MessageResponse(1, "主键不能为空！");
        }
        if (CommonUtils.isBlank(o.getRoadName())) {
            return new MessageResponse(1, "道路名称不能为空！");
        }
        if (CommonUtils.isBlank(o.getRoadCode())) {
            return new MessageResponse(1, "道路国标不能为空！");
        }
        if (CommonUtils.isBlank(o.getAreaCode())) {
            return new MessageResponse(1, "所在地区不能为空！");
        }
        if (CommonUtils.isBlank(o.getRoadStatus())) {
            return new MessageResponse(1, "道路运行状态不能为空！");
        }
        if (CommonUtils.isBlank(o.getStatus())) {
            return new MessageResponse(1, "状态不能为空！");
        }
        if (CommonUtils.isBlank(o.getLastModifyDate())) {
            return new MessageResponse(1, "最后更新时间不能为空！");
        }


        o.setLastModifyDate(new Date());
        o.setLastModifyUserName(userProp.getName());
        o.setLastModifyUserId(userProp.getUserId());
        this.roadDao.updateByPrimaryKey(o);
        this.dataBaseLogService.log("变更道路档案", "道路档案", "", o.getRoadName(),
                o.getRoadName(), userProp);
        return new MessageResponse(0, "变更道路档案完成！");
    }

    /**
     * @throws
     * @Title:selectRoadByPrimaryKey
     * @Description: TODO(获取道路档案)
     * @param: @param id
     * @param: @throws Exception
     * @return: SingleResult<Road>
     * @author: Arvin
     * @version: 2018-03-09
     */
    @Override
    public SingleResult<RoadVo> selectRoadByPrimaryKey(String id) throws Exception {
        SingleResult<RoadVo> rst = new SingleResult<RoadVo>();
        rst.setValue(this.roadDao.selectByPrimaryKey(id));
        return rst;
    }

    /**
     * @throws
     * @Title:deleteRoadByRoadId
     * @Description: TODO(删除道路档案)
     * @param: @param id
     * @param: @param userProp
     * @param: @throws Exception
     * @return: MessageResponse
     * @author: Arvin
     * @version: 2018-03-09
     */
    @Override
    public MessageResponse deleteRoadByRoadId(String id,
                                              UserProp userProp) throws Exception {
        this.roadDao.deleteByPrimaryKey(id);
        this.dataBaseLogService.log("删除道路档案", "道路档案", String.valueOf(id),
                String.valueOf(id), "道路档案", userProp);
        return new MessageResponse(0, "道路档案删除完成！");
    }
}