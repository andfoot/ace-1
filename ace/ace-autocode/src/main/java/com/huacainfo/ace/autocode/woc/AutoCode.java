package com.huacainfo.ace.autocode.woc;

import com.huacainfo.ace.autocode.base.AutoCodeUtils;

public class AutoCode {

    public static void main(String[] args) throws Exception {
//        AutoCodeUtils autoCodeUtils = new AutoCodeUtils("woc", "道路档案", "Arvin",
//                "C:\\Users\\Arvin\\IdeaProjects\\ace\\ace");
        AutoCodeUtils autoCodeUtils = new AutoCodeUtils("woc", "道路档案", "Arvin");
        Class<?> c = com.huacainfo.ace.woc.model.Road.class;
        autoCodeUtils.init(c);
        autoCodeUtils.createVO(c);
        autoCodeUtils.createQVO(c);
        autoCodeUtils.createDAO(c);
        autoCodeUtils.createService(c);
        autoCodeUtils.createServiceImpl(c);
        autoCodeUtils.createAction(c);
        autoCodeUtils.createJsp(c);
        autoCodeUtils.createJsConfig(c);
        autoCodeUtils.createJsView(c);
        autoCodeUtils.createJsController(c);
        autoCodeUtils.createModel(c);
    }

}
