var _colNames = ['会议编码', '会议名称', '会议时间', ' 会议描述', '会议地点', '会议部门', '主持人', '状态',		'会议名称拼音码', '注意事项', '说明', '创建人编码', '创建人姓名', '入库日期', '最后更新人编码',		'最后更新人姓名', '最后更新时间', '操作'];var _colModel = function() {	return [			{				name : 'id',				editable : false,				hidden : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				},				formoptions : {					elmprefix : "",					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"				},				editrules : {					required : true				}			},			{				name : 'name',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				},				formoptions : {					elmprefix : "",					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"				},				editrules : {					required : true				}			},			{				name : 'meetingDate',				editable : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				},				formoptions : {					elmprefix : "",					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"				},				editrules : {					required : true				},				edittype : "datetimebox",				editoptions : {					style : 'height:25px'				},				renderer : function(value) {					return value.substr(0, 16);				}			},			{				name : 'discribtion',				editable : true,				hidden : true,				width : 100,				edittype : "textarea",				editoptions : {					colspan : true,					size : "20",					maxlength : "250",					style : 'width:82%;height: 50px;'				}			},			{				name : 'site',				editable : true,				hidden : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				},				formoptions : {					elmprefix : "",					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"				},				editrules : {					required : true				}			},			{				name : 'division',				hidden : false,				editable : true,				width : 100,				edittype : "combotree",				dataoptions : {					url : portalPath							+ '/system/selectDepartmentTreeList.do?id=01',					animate : true,					lines : false				},				editoptions : {					style : 'line-height: 25px;height: 25px;'				},				renderer : function(value, cur) {					return $.jgrid.getAccessor(cur, 'divisionName');				},				formoptions : {					elmprefix : "",					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"				},				editrules : {					required : true				}			},			{				name : 'owner',				editable : true,				width : 100,				edittype : "combogrid",				dataoptions : {					panelWidth : 400,					idField : 'USER_ID',					textField : 'NAME',					url : portalPath + '/system/selectUsers.do',					mode : 'remote',					fitColumns : true,					method : 'get',					columns : [[{						field : 'USER_ID',						title : '用户编号',						width : 100					}, {						field : 'NAME',						title : '姓名',						width : 100					}, {						field : 'DEPARTMENT_NAME',						title : '部门',						width : 100					}]]				},				editoptions : {					style : 'height:25px'				},				renderer : function(value, cur) {					return $.jgrid.getAccessor(cur, 'ownerName');				},				formoptions : {					elmprefix : "",					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"				},				editrules : {					required : true				}			}, {				name : 'status',				editable : true,				width : 50,				editoptions : {				},				edittype : "checkbox",				editoptions : {					value : "1:0"				},				unformat : aceSwitch,				renderer : function(value) {					var rst = "";					switch (value) {						case '1' :							rst = "准备中";							break;						case '2' :							rst = "打开";							break;						default :							rst = "关闭";					}					return rst;				}			}, {				name : 'pcode',				editable : false,				hidden : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'note',				editable : true,				hidden : true,				width : 100,				edittype : "textarea",				editoptions : {					colspan : true,					size : "20",					maxlength : "250",					style : 'width:82%;height: 50px;'				}			}, {				name : 'comment',				editable : true,				hidden : true,				width : 100,				edittype : "textarea",				editoptions : {					colspan : true,					size : "20",					maxlength : "250",					style : 'width:82%;height: 50px;'				}			}, {				name : 'createUserId',				hidden : true,				editable : false,				width : 100			}, {				name : 'createUserName',				hidden : true,				editable : false,				width : 100			}, {				name : 'createDate',				hidden : true,				editable : false,				width : 100			}, {				name : 'lastModifyUserId',				hidden : true,				editable : false,				width : 100			}, {				name : 'lastModifyUserName',				hidden : true,				editable : false,				width : 100			}, {				name : 'lastModifyDate',				hidden : true,				editable : false,				width : 100			}, {				name : 'opt',				width : 60,				hidden : false,				editable : false,				sortable : false,				renderer : function(value, cur) {					return renderBtn(cur);				}			}];}function aceSwitch(cellvalue, options, cell) {	console.log('aceSwitch');	setTimeout(function() {		$(cell).find('input[type=checkbox]').addClass(				'ace ace-switch ace-switch-5').after(				'<span class="lbl"></span>');	}, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {	setTimeout(function() {		$(cell).find('input[type=text]').datepicker({			format : 'yyyy-mm-dd',			autoclose : true		});	}, 0);}function renderBtn(cur) {	var id = $.jgrid.getAccessor(cur, 'id');	var title = $.jgrid.getAccessor(cur, 'name');	var html = [];	html.push('<div class="hidden-sm hidden-xs action-buttons"><a class="blue" target="_blank" href="');	html.push('javascript:preview(\'' + id + '\',\'' + title + '\')');	html.push('"');	html.push(' data-rel="tooltip" data-placement="top" title="会议详情"><i class="ace-icon fa fa-play bigger-130"></i></a>');	/*html.push('<a data-rel="tooltip" data-placement="top" title="议题" class="blue" target="_blank" href="');        	html.push('javascript:topicCfg(\'' + id + '\',\'' + title + '\')');        	html.push('"');        	html.push('><i class="ace-icon fa fa-gear bigger-130"></i></a>');    html.push('<a data-rel="tooltip" data-placement="top" title="与会人员" class="blue" target="_blank" href="');            	html.push('javascript:attendanceCfg(\'' + id + '\',\'' + title + '\')');            	html.push('"');            	html.push('><i class="ace-icon fa fa-user bigger-130"></i></a>');*/     html.push('<a data-rel="tooltip" data-placement="top" title="数据导入" class="blue" target="_blank" href="');                 	html.push('javascript:upload1(\'' + id + '\')');                 	html.push('"');                 	html.push('><i class="ace-icon fa fa-upload bigger-130"></i></a>');    html.push('<a data-rel="tooltip" data-placement="top" title="数据导出" class="blue" target="_blank" href="');                 	html.push('javascript:export1(\'' + id + '\')');                 	html.push('"');                 	html.push('><i class="ace-icon fa fa-download bigger-130"></i></a></div>');	return html.join(' ');}