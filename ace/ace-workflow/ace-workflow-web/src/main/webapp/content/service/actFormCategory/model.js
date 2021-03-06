var _colNames = [ '编号', '父编号', '名称', '创建日期' ];
var _colModel = function() {
	return [
			{
				name : 'id',
				width : 150,
				editable : true,
				editoptions : {
					size : "20",
					maxlength : "50",
					readOnly:true
				}
			},
			{
				name : 'pid',
				width : 100,
				hidden:true,
				editable : true,
				editoptions : {
					size : "20",
					maxlength : "50",
					readOnly:true
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
				width : 100,
				editable : true,
				editoptions : {
					size : "20",
					maxlength : "50"
				},
				formoptions : {
					elmprefix : "",
					elmsuffix : "<span style='color:red;font-size:16px;font-weight:800'>*</span>"
				},
				editrules : {
					required : true
				}
			}, {
				name : 'createDate',
				width : 100,
				editable : false
			} ];
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