var _colNames = ['主键', '姓名', '所属辖区', '所属单位', '人士类别', '职业类别', '性别', '出生年月',		'籍贯', '民族', '学历学位', '职称', '职级', '党派', '加入时间', '行政职务', '现任职务时间',		'现任职级时间', '移动电话', '办公电话', '状态', '照片', '二维码', '简历', '备注', '姓名拼音码',		'维度', '经度', '创建人编号', '创建人姓名', '入库日期', '最后更新人编号', '最后更新人姓名', '最后更新时间',		'操作'];var _colModel = function() {	return [			{				name : 'id',				editable : false,				hidden : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				},				formoptions : {					elmprefix : "",					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"				},				editrules : {					required : true				}			},			{				name : 'name',				editable : true,				width : 400,				editoptions : {					maxlength : "20"				},				formoptions : {					elmprefix : "",					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"				},				editrules : {					required : true				}			},			{				name : 'areaCode',				editable : true,				hidden : true,				edittype : "combotree",				editoptions : {					style : 'width:200px;',				},				dataoptions : {					url : portalPath + '/system/selectProvinceTreeList.do',					required : false				},				renderer : function(value, cur) {					return $.jgrid.getAccessor(cur, 'areaName');				},				width : 100,				formoptions : {					elmprefix : "",					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"				},				editrules : {					required : true				}			},			{				name : 'deptId',				editable : true,				width : 100,				editoptions : {					style : 'width:200px;'				}			},			{				name : 'category',				editable : true,				hidden : true,				width : 100,				edittype : "combotree",				dataoptions : {					url : portalPath							+ '/dict/selectDictAllTreeByCategoryId.do?id=98',					animate : true,					lines : false				},				editoptions : {					style : 'width:200px;'				},				renderer : function(value) {					return rsd(value, "98");				}			},			{				name : 'careerType',				editable : false,				hidden : true,				width : 100,				edittype : "select",				renderer : function(value) {					return rsd(value, "102");				},				editoptions : {					value : odparse("102")				},				formoptions : {					elmprefix : "",					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'></span>"				},				editrules : {					required : false				}			},			{				name : 'sex',				editable : true,				width : 100,				edittype : "select",				renderer : function(value) {					return rsd(value, "01");				},				editoptions : {					value : odparse("01")				},				formoptions : {					elmprefix : "",					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"				},				editrules : {					required : true				}			},			{				name : 'birthday',				editable : true,				hidden : true,				width : 100,				edittype : "datebox",				editoptions : {					maxlength : "20"				},				dataoptions : {					formatter : function(date) {						var y = date.getFullYear();						var m = date.getMonth() + 1;						var d = date.getDate();						return y + '-' + (m < 10 ? ('0' + m) : m) + '-'								+ (d < 10 ? ('0' + d) : d);					},					parser : function(s) {						if (!s)							return new Date();						var ss = (s.split('-'));						var y = parseInt(ss[0], 10);						var m = parseInt(ss[1], 10);						var d = parseInt(ss[2], 10);						if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {							return new Date(y, m - 1, d);						} else {							return new Date();						}					}				},				renderer : function(value) {					return value == null ? "" : value.substring(0, 8);				},				formoptions : {					elmprefix : "",					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"				},				editrules : {					required : true				}			},			{				name : 'placeOfOrigin',				editable : true,				hidden : true,				width : 100,				edittype : "combotree",				editoptions : {					style : 'width:200px;',				},				dataoptions : {					url : portalPath							+ '/system/selectProvinceTreeList.do?level=3&&id=00',					required : false				},				renderer : function(value, cur) {					return $.jgrid.getAccessor(cur, 'areaName');				},				formoptions : {					elmprefix : "",					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"				},				editrules : {					required : true				}			},			{				name : 'nation',				editable : true,				hidden : true,				edittype : "select",				renderer : function(value) {					return rsd(value, "09");				},				editoptions : {					value : odparse("09")				},				width : 100,				formoptions : {					elmprefix : "",					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"				},				editrules : {					required : true				}			},			{				name : 'degreee',				editable : true,				hidden : true,				edittype : "select",				renderer : function(value) {					return rsd(value, "10");				},				editoptions : {					value : odparse("10")				},				width : 100			},			{				name : 'academicTitle',				editable : true,				hidden : true,				edittype : "select",				renderer : function(value) {					return rsd(value, "99");				},				editoptions : {					value : odparse("99")				},				width : 100			},			{				name : 'rank',				editable : true,				hidden : true,				edittype : "select",				renderer : function(value) {					return rsd(value, "100");				},				editoptions : {					value : odparse("100")				},				width : 100			},			{				name : 'party',				editable : true,				hidden : true,				edittype : "select",				renderer : function(value) {					return rsd(value, "101");				},				editoptions : {					value : odparse("101")				},				width : 100			},			{				name : 'joinDate',				editable : true,				hidden : true,				edittype : "datebox",				editoptions : {					maxlength : "20"				},				dataoptions : {					formatter : function(date) {						var y = date.getFullYear();						var m = date.getMonth() + 1;						var d = date.getDate();						return y + '-' + (m < 10 ? ('0' + m) : m) + '-'								+ (d < 10 ? ('0' + d) : d);					},					parser : function(s) {						if (!s)							return new Date();						var ss = (s.split('-'));						var y = parseInt(ss[0], 10);						var m = parseInt(ss[1], 10);						var d = parseInt(ss[2], 10);						if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {							return new Date(y, m - 1, d);						} else {							return new Date();						}					}				},				renderer : function(value) {					return value == null ? "" : value.substring(0, 10);				},				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			},			{				name : 'administrativeDuty',				editable : true,				hidden : true,				width : 100,				editoptions : {					maxlength : "30"				}			},			{				name : 'currentPostDate',				editable : true,				hidden : true,				edittype : "datebox",				editoptions : {					maxlength : "20"				},				dataoptions : {					formatter : function(date) {						var y = date.getFullYear();						var m = date.getMonth() + 1;						var d = date.getDate();						return y + '-' + (m < 10 ? ('0' + m) : m) + '-'								+ (d < 10 ? ('0' + d) : d);					},					parser : function(s) {						if (!s)							return new Date();						var ss = (s.split('-'));						var y = parseInt(ss[0], 10);						var m = parseInt(ss[1], 10);						var d = parseInt(ss[2], 10);						if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {							return new Date(y, m - 1, d);						} else {							return new Date();						}					}				},				renderer : function(value) {					return value == null ? "" : value.substring(0, 10);				},				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			},			{				name : 'currentRankDate',				editable : true,				hidden : true,				edittype : "datebox",				dataoptions : {					formatter : function(date) {						var y = date.getFullYear();						var m = date.getMonth() + 1;						var d = date.getDate();						return y + '-' + (m < 10 ? ('0' + m) : m) + '-'								+ (d < 10 ? ('0' + d) : d);					},					parser : function(s) {						if (!s)							return new Date();						var ss = (s.split('-'));						var y = parseInt(ss[0], 10);						var m = parseInt(ss[1], 10);						var d = parseInt(ss[2], 10);						if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {							return new Date(y, m - 1, d);						} else {							return new Date();						}					}				},				renderer : function(value) {					return value == null ? "" : value.substring(0, 10);				},				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			},			{				name : 'mobile',				editable : true,				hidden : true,				width : 100,				editoptions : {					maxlength : "11"				},				formoptions : {					elmprefix : "",					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'></span>"				},				editrules : {					required : false				}			},			{				name : 'tel',				editable : true,				hidden : true,				width : 100,				editoptions : {					maxlength : "20"				}			},			{				name : 'status',				editable : true,				hidden : true,				width : 100,				edittype : "checkbox",				editoptions : {					value : "1:0"				},				unformat : aceSwitch,				renderer : function(value) {					var rst = "";					switch (value) {						case '1' :							rst = "ON";							break;						case '0' :							rst = "OFF";							break;						default :							rst = "N/A";					}					return rst;				}			},			{				name : 'photo',				editable : true,				hidden : true,				width : 100,				editoptions : {					style : 'width:600px;',					colspan : true,					size : "200",					maxlength : "200"				}			},			{				name : 'qrcode',				editable : true,				hidden : true,				width : 100,				editoptions : {					style : 'width:600px;',					colspan : true,					size : "200",					maxlength : "200"				}			},			{				name : 'intro',				editable : true,				hidden : true,				width : 100,				edittype : "textarea",				editoptions : {					style : 'width:600px;height:200px',					colspan : true,					maxlength : "200"				}			},			{				name : 'remark',				editable : true,				hidden : true,				width : 100,				editoptions : {					style : 'width:600px;',					colspan : true,					size : "200",					maxlength : "200"				}			},			{				name : 'pcode',				editable : false,				hidden : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				},				formoptions : {					elmprefix : "",					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"				},				editrules : {					required : true				}			}, {				name : 'latitude',				hidden : true,				editable : false,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'longitude',				editable : false,				hidden : true,				width : 100,				editoptions : {					size : "20",					maxlength : "50"				}			}, {				name : 'createUserId',				hidden : true,				editable : false,				width : 100			}, {				name : 'createUserName',				hidden : true,				editable : false,				width : 100			}, {				name : 'createDate',				hidden : true,				editable : false,				width : 100			}, {				name : 'lastModifyUserId',				hidden : true,				editable : false,				width : 100			}, {				name : 'lastModifyUserName',				hidden : true,				editable : false,				width : 100			}, {				name : 'lastModifyDate',				hidden : true,				editable : false,				width : 100			}, {				name : 'opt',				width : 50,				hidden : false,				editable : false,				sortable : false,				renderer : function(value, cur) {					return renderBtn(cur);				}			}];}function aceSwitch(cellvalue, options, cell) {	console.log('aceSwitch');	setTimeout(function() {		$(cell).find('input[type=checkbox]').addClass(				'ace ace-switch ace-switch-5').after(				'<span class="lbl"></span>');	}, 0);}// enable datepickerfunction pickDate(cellvalue, options, cell) {	setTimeout(function() {		$(cell).find('input[type=text]').datepicker({			format : 'yyyy-mm-dd',			autoclose : true		});	}, 0);}function renderBtn(cur) {	var id = $.jgrid.getAccessor(cur, 'id');	var title = $.jgrid.getAccessor(cur, 'name');	var html = [];	html.push('<a target="_blank" href="');	html.push('javascript:preview(\'' + id + '\',\'' + title + '\')');	html.push('"');	html.push('><span class="badge badge-info">查看</span></a>');	return html.join(' ');}