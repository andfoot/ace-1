var _colNames = [ '流程编号', '名称', '描述', '所属企业&单位', '类别', '地区编码', '备注', '状态',
		'创建日期' ];
var _colModel = function() {
	return [
			{
				name : 'id',
				width : 100,
				editable : true,
				edittype : "combogrid",
				dataoptions : {
					panelWidth : 400,
					idField : 'id',
					textField : 'name',
					url : contextPath + '/actProdefCustom/selectGridList.do',
					mode : 'remote',
					fitColumns : true,
					method : 'get',
					columns : [ [ {
						field : 'id',
						title : '编号',
						width : 80
					}, {
						field : 'name',
						title : '名称',
						width : 100
					}, {
						field : 'description',
						title : '描述',
						width : 100,
						align : 'right'
					} ] ]
				},
				editoptions : {
					style : 'width:175px;height:25px'
				},
				formoptions : {
					elmprefix : "",
					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"
				},
				editrules : {
					required : true
				}
			},
			{
				name : 'name',
				width : 150,
				editable : false
			},
			{
				name : 'description',
				hidden : true,
				width : 100,
				editable : false
			},
			{
				name : 'deptId',
				width : 150,
				editable : true,
				
				edittype : "combotree",
				dataoptions : {
					url : portalPath
							+ '/system/selectDepartmentTreeList.do?id=01',
					animate : true,
					lines : false
				},
				editoptions : {
					style : 'width:175px;'
				},
				renderer : function(value, cur) {
					return $.jgrid.getAccessor(cur, 'deptName');
				},
				formoptions : {
					elmprefix : "",
					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"
				},
				editrules : {
					required : true
				}
			},
			{
				name : 'categoryId',
				width : 100,
				hidden : true,
				editable : true,
				edittype : "combotree",
				editoptions : {
					style : 'width:175px;height:25px'
				},
				dataoptions : {
					url : contextPath + '/actProdefCategory/selectTreeList.do',
					required : false
				},
				formoptions : {
					elmprefix : "",
					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"
				},
				editrules : {
					required : true
				},
				renderer : function(value, cur) {
					return $.jgrid.getAccessor(cur, 'categoryName');
				}
			},
			{
				name : 'areaCode',
				width : 100,
				hidden : true,
				editable : true,
				edittype : "combotree",
				editoptions : {
					style : 'width:175px'
				},
				dataoptions : {
					url : portalPath + '/system/selectProvinceTreeList.do',
					required : false
				},
				renderer : function(value, cur) {
					return $.jgrid.getAccessor(cur, 'areaName');
				},
				formoptions : {
					elmprefix : "",
					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"
				},
				editrules : {
					required : true
				}
			}, {
				name : 'remark',
				width : 100,
				editable : true,
				hidden : true,
				editoptions : {
					style : 'width:175px;height:25px'
				}

			}, {
				name : 'status',
				width : 50,
				editable : true,
				edittype : "checkbox",
				editoptions : {
					value : "1:0"
				},
				unformat : aceSwitch,
				renderer : function(value) {
					var rst = "";
					switch (value) {
					case '1':
						rst = "YES";
						break;
					case '0':
						rst = "NO";
						break;
					default:
						rst = "N/A";
					}
					return rst;
				}
			}, {
				name : 'createDate',
				width : 100,
				editable : false
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
