var _colNames =['主键','道路名称','道路国标','所在地区','道路全长','建造时间','归属管辖单位编码','道路运行状态','备注','状态','创建人编号','创建人姓名','入库日期','最后更新人编号','最后更新人姓名','最后更新时间','操作'];
var _colModel = function() {
	return [
	{name : 'id',editable : true,width : 100,editoptions : {size : "20",maxlength : "50"},formoptions : {elmprefix : "",elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"},editrules : {required : true}},{name : 'roadName',editable : true,width : 100,editoptions : {size : "20",maxlength : "50"},formoptions : {elmprefix : "",elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"},editrules : {required : true}},{name : 'roadCode',editable : true,width : 100,editoptions : {size : "20",maxlength : "50"},formoptions : {elmprefix : "",elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"},editrules : {required : true}},{name : 'areaCode',editable : true,width : 100,edittype : "combotree",dataoptions : {url : portalPath + '/system/selectProvinceTreeList.do',required : false},renderer : function(value, cur) {return $.jgrid.getAccessor(cur, 'areaName');},formoptions : {elmprefix : "",elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"},editrules : {required : true}},{name : 'roadLength',editable : true,width : 100,editoptions : {size : "20",maxlength : "50"},},{name : 'constructDate',editable : true,width : 100,editoptions : {size : "20",maxlength : "50"},},{name : 'adminDepId',editable : true,width : 100,editoptions : {size : "20",maxlength : "50"},},{name : 'roadStatus',editable : true,width : 100,editoptions : {size : "20",maxlength : "50"},formoptions : {elmprefix : "",elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"},editrules : {required : true}},{name : 'remark',editable : true,width : 100,editoptions : {size : "20",maxlength : "50"},},{name : 'status',editable : true,width : 100,edittype : "checkbox",editoptions : {value : "1:0"},cellattr : function(rowId, val, rawObject, cm, rdata) {if (rawObject.status == '0') {return "style='background:red;color:#fff'";}if (rawObject.status == '1') {return "style='background:#FF9224;color:#000000'";}if (rawObject.status == '2') {return "style='background:green;color:#fff'";}if (rawObject.status == '3') {return "style='background:#F9F900;color:#000000'";}if (rawObject.status == '4') {return "style='background:#FF9224;color:#000000'";}},unformat : aceSwitch,renderer : function(value) {var rst = "";switch (value) {case '1' :rst = "ON";break;case '0' :rst = "OFF";break;default :rst = "N/A";}return rst;},formoptions : {elmprefix : "",elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"},editrules : {required : true}},{name : 'createUserId',hidden : true,editable : false,width : 100},{name : 'createUserName',hidden : true,editable : false,width : 100},{name : 'createDate',hidden : true,editable : false,width : 100},{name : 'lastModifyUserId',hidden : true,editable : false,width : 100},{name : 'lastModifyUserName',hidden : true,editable : false,width : 100},{name : 'lastModifyDate',hidden : true,editable : false,width : 100},
	 {
                name: 'opt',
                width: 100,
                hidden:false,
                editable: false,
                sortable:false,
                renderer:function(value, cur){
                    return renderBtn(cur);
                }
            }
	];
}
function aceSwitch(cellvalue, options, cell) {
	console.log('aceSwitch');
	setTimeout(function() {
		$(cell).find('input[type=checkbox]').addClass(
				'ace ace-switch ace-switch-5').after(
				'<span class="lbl"></span>');
	}, 0);
}
// enable datepicker
function pickDate(cellvalue, options, cell) {
	setTimeout(function() {
		$(cell).find('input[type=text]').datepicker({
			format : 'yyyy-mm-dd',
			autoclose : true
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