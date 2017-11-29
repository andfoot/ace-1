var _colNames = ['主键'/*,'icon'*/, '文件名称', '备注', '资料类型', '文件', '后缀', '文件大小','创建人编号', '创建人姓名', '入库日期', '最后更新人编号', '最后更新人姓名', '最后更新时间', '操作'];var _colModel = function () {    return [        {            name: 'id',//表格列的名称            editable: false,//定义字段是否可编辑            hidden: true,//在初始化表格时是否要隐藏此列            width: 100,//默认列的宽度，只能是象素值            editoptions: {                size: "20",                maxlength: "50"            },            formoptions: {//对于form进行编辑时的属性设置                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            //必填。            editrules: {                required: true            }        },        {            name: 'name',            editable: false,            width: 100,        },        {            name: 'remark',            editable: false,            //hidden : true,            editoptions: {                style: 'width:200px;'            },            width: 200        },        {            name: 'type',            editable: true,            hidden: true,            edittype: "select",            renderer: function (value) {                return rsd(value, "105");            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editoptions: {                value: odparse("105")            },            width: 100,            editrules: {                required: true            }        },        {            name: 'file',            editable: true,            hidden: true,            width: 100,            editoptions: {                style: 'width:600px;',                colspan: true,                size: "200",                maxlength: "200"            },            formoptions: {                elmprefix: "",                elmsuffix: "<span style='color:red;font-size:16px;font-weight:800'>*</span>"            },            editrules: {                required: true            }        },        {            name: 'suffix',            editable: false,            //hidden : true,            width: 100        },        {            name: 'fileSize',            editable: false,            hidden : true,            width: 100        },        {            name: 'createUserId',            hidden: true,            editable: false,            width: 100        }, {            name: 'createUserName',            hidden: true,            editable: false,            width: 100        }, {            name: 'createDate',            hidden: true,            editable: false,            width: 100        }, {            name: 'lastModifyUserId',            hidden: true,            editable: false,            width: 100        }, {            name: 'lastModifyUserName',            hidden: true,            editable: false,            width: 100        }, {            name: 'lastModifyDate',            hidden: true,            editable: false,            width: 100        }, {            name: 'opt',            width: 50,            hidden: false,            editable: false,            sortable: false,            renderer: function (value, cur) {                return renderBtn(cur);            }        }];};function aceSwitch(cellvalue, options, cell) {    console.log('aceSwitch');    setTimeout(function () {        $(cell).find('input[type=checkbox]').addClass(            'ace ace-switch ace-switch-5').after(            '<span class="lbl"></span>');    }, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {    setTimeout(function () {        $(cell).find('input[type=text]').datepicker({            format: 'yyyy-mm-dd',            autoclose: true        });    }, 0);}function renderBtn(cur) {    var file = $.jgrid.getAccessor(cur, 'file');    var html = [];    html.push('<a target="_blank" href="' + file + '"');    html.push('><span class="badge badge-info">下载</span></a>');    return html.join(' ');}