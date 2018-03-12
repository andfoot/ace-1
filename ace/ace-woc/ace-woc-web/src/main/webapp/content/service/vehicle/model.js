var _colNames = ['主键', '车牌号', '车辆颜色', '所属人', '所属企业',
    '行驶证号', '轴数', '车辆类型', '车辆品牌', '发动机号码', '车辆识别代码',
    '行驶证注册日期', '行驶证发证日期', '领证单位', '总质量', '整备质量',
    '核定载质量', '外廓尺寸', '准牵引总量', '备注', '状态', '创建人编号',
    '创建人姓名', '入库日期', '最后更新人编号', '最后更新人姓名', '最后更新时间', '操作'];
var _colModel = function () {
    return [
        /*主键*/
        {
            name: 'id',//表格列的名称
            editable: false,//定义字段是否可编辑
            hidden: true,//在初始化表格时是否要隐藏此列
            width: 100,//默认列的宽度，只能是象素值
            editoptions: {
                size: "20",
                maxlength: "50"
            },
        },
        /*车牌号*/
        {
            name: 'name',
            editable: true,
            width: 200,
            editoptions: {
                maxlength: "50"
            },
            formoptions: {
                elmprefix: "",
                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"
            },
            editrules: {
                required: true
            }
        },
        /*车辆颜色*/
        {
            name: 'vehicleColor',
            editable: true,
            hidden: true,
            width: 200,
            editoptions: {
                maxlength: "50"
            },
        },
        /*所属人ID*/
        {
            name: 'ownerId',
            editable: true,
            width: 200,
            editoptions: {
                maxlength: "50"
            },
            formoptions: {
                elmprefix: "",
                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"
            },
            editrules: {
                required: true
            }
        },
        /*所属企业*/
        {
            name: 'ownerCompanyId',
            editable: true,
            hidden: true,
            width: 200,
            editoptions: {
                maxlength: "50"
            },
        },
        /*行驶证号*/
        {
            name: 'fileNo',
            editable: true,
            width: 200,
            editoptions: {
                maxlength: "50"
            },
            formoptions: {
                elmprefix: "",
                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"
            },
            editrules: {
                required: true
            }
        },
        /*轴数*/
        {
            name: 'ownerCompanyId',
            editable: true,
            hidden: true,
            width: 200,
            editoptions: {
                maxlength: "11",
            },
            editrules: {
                number: true,
                required: false,
            }
        },
        /*车辆类型*/
        {
            name: 'vehicleType',
            editable: true,
            hidden: true,
            width: 200,
            editoptions: {
                maxlength: "50"
            },
        },
        /*车辆品牌*/
        {
            name: 'model',
            editable: true,
            hidden: true,
            width: 200,
            editoptions: {
                maxlength: "50"
            },
        },
        /*发动机编号*/
        {
            name: 'engineNo',
            editable: true,
            hidden: true,
            width: 200,
            editoptions: {
                maxlength: "50"
            },
        },
        /*车辆识别代码*/
        {
            name: 'VIN',
            editable: true,
            hidden: true,
            width: 200,
            editoptions: {
                maxlength: "50"
            },
        },
        /*行驶证注册日期*/
        {
            name: 'RegisterDate',
            editable: true,
            hidden: true,
            width: 100,
            edittype: "datebox",
            editoptions: {
                maxlength: "20"
            },
            dataoptions: {
                formatter: function (date) {
                    var y = date.getFullYear();
                    var m = date.getMonth() + 1;
                    var d = date.getDate();
                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'
                        + (d < 10 ? ('0' + d) : d);
                },
                parser: function (s) {
                    if (!s)
                        return new Date();
                    var ss = (s.split('-'));
                    var y = parseInt(ss[0], 10);
                    var m = parseInt(ss[1], 10);
                    var d = parseInt(ss[2], 10);
                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
                        return new Date(y, m - 1, d);
                    } else {
                        return new Date();
                    }
                }
            },
            renderer: function (value) {
                return value == null ? "" : value.substring(0, 8);
            },
        },
        /*行驶证发证日期*/
        {
            name: 'IssueDate',
            editable: true,
            hidden: true,
            width: 100,
            edittype: "datebox",
            editoptions: {
                maxlength: "20"
            },
            dataoptions: {
                formatter: function (date) {
                    var y = date.getFullYear();
                    var m = date.getMonth() + 1;
                    var d = date.getDate();
                    return y + '-' + (m < 10 ? ('0' + m) : m) + '-'
                        + (d < 10 ? ('0' + d) : d);
                },
                parser: function (s) {
                    if (!s)
                        return new Date();
                    var ss = (s.split('-'));
                    var y = parseInt(ss[0], 10);
                    var m = parseInt(ss[1], 10);
                    var d = parseInt(ss[2], 10);
                    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
                        return new Date(y, m - 1, d);
                    } else {
                        return new Date();
                    }
                }
            },
            renderer: function (value) {
                return value == null ? "" : value.substring(0, 8);
            },
        },
        /*领证单位*/
        {
            name: 'licenceIssuingAuthority',
            editable: true,
            hidden: true,
            width: 200,
            editoptions: {
                maxlength: "50"
            },
        },
        /*总质量*/
        {
            name: 'totalMass',
            editable: true,
            hidden: true,
            width: 200,
            editoptions: {
                maxlength: "11"
            },
            editrules: {required: true, number: true, custom: true, custom_func: ValidateTvalue},

        },
        /*整备质量*/
        {
            name: 'unladedMass',
            editable: true,
            hidden: true,
            width: 200,
            editoptions: {
                maxlength: "11"
            },
            editrules: {required: true, number: true, custom: true, custom_func: ValidateTvalue},

        },
        /*核定载质量*/
        {
            name: 'approvedMass',
            editable: true,
            hidden: true,
            width: 200,
            editoptions: {
                maxlength: "11"
            },
            editrules: {required: true, number: true, custom: true, custom_func: ValidateTvalue},

        },
        /*外廓尺寸*/
        {
            name: 'containerInsideSize',
            editable: true,
            hidden: true,
            width: 200,
            editoptions: {
                maxlength: "50"
            },
        },
        /*牵引总质量*/
        {
            name: 'tractionMass',
            editable: true,
            hidden: true,
            width: 200,
            editoptions: {
                maxlength: "11"
            },
            editrules: {required: true, number: true, custom: true, custom_func: ValidateTvalue},
        },
        /*备注*/
        {
            name: 'remark',
            editable: true,
            hidden: true,
            width: 100,
            editoptions: {
                style: 'width:600px;',
                colspan: true,
                size: "200",
                maxlength: "200"
            }
        },
        /*状态*/
        {
            name: 'status',
            editable: true,
            hidden: true,
            width: 100,
            edittype: "checkbox",
            editoptions: {
                value: "1:0"
            },
            unformat: aceSwitch,
            renderer: function (value) {
                var rst = "";
                switch (value) {
                    case '1' :
                        rst = "ON";
                        break;
                    case '0' :
                        rst = "OFF";
                        break;
                    default :
                        rst = "N/A";
                }
                return rst;
            }
        },

        {
            name: 'createUserId',
            hidden: true,
            editable: false,
            width: 100
        }, {
            name: 'createUserName',
            hidden: true,
            editable: false,
            width: 100
        }, {
            name: 'createDate',
            hidden: true,
            editable: false,
            width: 100
        }, {
            name: 'lastModifyUserId',
            hidden: true,
            editable: false,
            width: 100
        }, {
            name: 'lastModifyUserName',
            hidden: true,
            editable: false,
            width: 100
        }, {
            name: 'lastModifyDate',
            hidden: true,
            editable: false,
            width: 100
        },
        {
            name: 'opt',
            width: 100,
            hidden: false,
            editable: false,
            sortable: false,
            renderer: function (value, cur) {
                return renderBtn(cur);
            }
        }
    ];
}

function aceSwitch(cellvalue, options, cell) {
    console.log('aceSwitch');
    setTimeout(function () {
        $(cell).find('input[type=checkbox]').addClass(
            'ace ace-switch ace-switch-5').after(
            '<span class="lbl"></span>');
    }, 0);
}

// enable datepicker
function pickDate(cellvalue, options, cell) {
    setTimeout(function () {
        $(cell).find('input[type=text]').datepicker({
            format: 'yyyy-mm-dd',
            autoclose: true
        });
    }, 0);
}

function renderBtn(cur) {
    var id = $.jgrid.getAccessor(cur, 'id');
    var title = $.jgrid.getAccessor(cur, 'name');
    var html = [];
    html.push('<a target="_blank" href="');
    html.push('javascript:preview(\'' + id + '\',\'' + title + '\')');
    html.push('"');
    html.push('><span class="badge badge-info">查看</span></a>');
    return html.join(' ');
}

function ValidateTvalue(value, name) {
    //#region 验证分数是否为数值
    var regu = "^[0-9]+(.[0-9]{2})?$";
    //var regu = "/^\+?(\d*\.\d{2})$/";
    var re = new RegExp(regu);
    if (re.test(value)) {
        return [true, ""];
    }
    else {
        return [false, "分数【" + rowDatas.MarkScore + "】错误，请输入数值型.如：12或12.23"];
    }
    //#endregion
}