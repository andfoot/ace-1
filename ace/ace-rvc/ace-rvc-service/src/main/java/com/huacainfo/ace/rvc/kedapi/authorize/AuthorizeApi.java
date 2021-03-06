package com.huacainfo.ace.rvc.kedapi.authorize;

import com.huacainfo.ace.common.tools.DateUtil;
import com.huacainfo.ace.common.tools.HttpSend;
import com.huacainfo.ace.common.tools.JsonUtil;
import com.huacainfo.ace.rvc.kedapi.common.kits.HttpKit;
import org.apache.log4j.Logger;

import java.util.Map;

/**
 * @description: 科达视讯平台API
 * @author: ArvinZou
 * @create: 2017-11-15 14:52
 */
public class AuthorizeApi {

    private static Logger logger = Logger.getLogger(AuthorizeApi.class);

    public static final String HTTP = "http://";
    public static final String HTTPS = "https://";
    public static final String IP_PORT = "192.168.20.240";
    public static final String SEPARATOR = "/";
    public static final String URI = "http://192.168.20.240";
    public static final String VRS_URI = "http://192.168.20.243";

    public static final String APP_KEY = "PLmCgniw0Ihj";
    public static final String APP_SECRET = "lxrQj5TqjX8J";
    public static final String APP_NAME = "lcjt_cdsdj";

    public static final String ADMIN_USER_NAME = "admin1";
    public static final String ADMIN_PWD = "888888";

    public static final String VRS_ACCOUNT = "admin";
    public static final String VRS_PWD = "admin";

    /**
     * token 地址
     */
    private static final String TOKEN_URL = "/api/v1/system/token?";
    /**
     * login 地址
     */
    private static final String LOGIN_URL = "/api/v1/system/login?";
    /**
     * 保持用户心跳
     */
    private static final String HEAR_BEAT_URL = "/api/v1/system/heartbeat?";

    private AuthorizeApi() {

    }

    /**
     *
     */
    public static String ACCOUNT_TOKEN;
    /**
     *
     */
    public static String SSO_COOKIE_KEY;

    /**
     * 初始化数据,缓存在内存中
     */
    public static void init() {
        //
        login();
    }

    private static void login() {
        ACCOUNT_TOKEN = AuthorizeApi.getToken(APP_KEY, APP_SECRET);
        logger.debug("login() get token [" + ACCOUNT_TOKEN + "],at time :" + DateUtil.getNow());
        Map<String, String> map = AuthorizeApi.login(ADMIN_USER_NAME, ADMIN_PWD, ACCOUNT_TOKEN);
        SSO_COOKIE_KEY = map.get("cookies");
        logger.debug("login() get SSO_COOKIE_KEY [" + SSO_COOKIE_KEY + "],at time :" + DateUtil.getNow());
    }

    /**
     * token获取
     * <p>
     * 平台为二次开发提供一个软件key+密钥，需申请。
     * 通过软件key+密钥向平台注册获取account_token
     *
     * @param key    key
     * @param secret 密钥
     * @return account_token / ""
     */
    public static String getToken(String key, String secret) {
        String url = URI + TOKEN_URL;

        String respStr = HttpSend.postSend(url, "oauth_consumer_key=" + key + "&oauth_consumer_secret=" + secret);
        logger.debug("key<" + key + "> AuthorizeApi.getToken:" + respStr);

//        {"success": 1, "account_token": "6567e24b425db665a3044db69f0c6fe4"}
        Map<String, Object> respMap = JsonUtil.toMap(respStr);
        if (respMap.get("success") == 1) {
            return (String) respMap.get("account_token");
        } else {
            return "";
        }
    }

    /**
     * 登陆
     * <p>
     * 二次开发通过 account_token + 帐号 + 密码登录
     * 平台回复会将登录信息写入cookies中。
     * 后续请求，二次开发者需要在每次请求的时候携带account_token+cookies来进行操作。
     * 对于客户端无法自动处理cookie的，需要将登录的cookie保存起来，后续请求通过设置Http的Cookie字段，手动设置
     * 平台会验证开发者权限以及用户权限。
     * 每次请求会刷新token存活时间，若无操作，开发者需要自行调用接口刷新token存活时间。
     *
     * @param username     帐号
     * @param password     密码
     * @param accountToken account_token
     * @return success/fail
     */
    public static Map<String, String> login(String username, String password, String accountToken) {
        String url = URI + LOGIN_URL;
        Map<String, String> rtnMap = HttpKit.doPost(url,
                "password=" + password + "&username=" + username + "&account_token=" + accountToken, "");
        logger.debug("username<" + username + "> AuthorizeApi.login:" + rtnMap.toString());

        Map<String, Object> respMap = JsonUtil.toMap(rtnMap.get("resp"));
        if (respMap.get("success") == 1) {
            return rtnMap;
        } else {
            return null;
        }
//        {"success": 1, "username": "0512110001003"}
    }

    /**
     * 保持用户心跳
     * 成功登陆后，用户有效期为30m，若30m内无操作，则需手动调用该接口保持心跳
     *
     * @param accountToken account_token
     * @param cookies      登录成功后，获取的携带信息
     * @return success/fail
     */
    public static String hearBeat(String accountToken, String cookies) {
//        {
//            "success": 1
//        }
        Map<String, String> rtnMap = HttpKit.doPost(URI + HEAR_BEAT_URL
                , "account_token=" + accountToken
                , cookies);
        logger.debug("AuthorizeApi.hearBeat:" + rtnMap.toString());

        Map<String, Object> respMap = JsonUtil.toMap(rtnMap.get("resp"));
        if (respMap.get("success") == 1) {
            return "success";
        } else {
            return "fail";
        }
    }
}
