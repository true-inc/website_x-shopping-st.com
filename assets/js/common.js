
$(function() {
	var isOpen = false;

	$(".sp_menu_btn").click(function() {
			if (isOpen) {
					$(".sp_menu_box").fadeOut();
					$(".sp_menu_btn .btn_img_open").show();
					$(".sp_menu_btn .btn_img_close").hide();
					$("body").removeClass("menu-open");
			} else {
					$(".sp_menu_box").fadeIn();
					$(".sp_menu_btn .btn_img_open").hide();
					$(".sp_menu_btn .btn_img_close").show();
					$("body").addClass("menu-open");
			}
			isOpen = !isOpen;
	});
});