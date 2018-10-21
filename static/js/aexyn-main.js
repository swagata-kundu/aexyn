/* eslint-disable */
// Tabber
$(document).ready(() => {
    $('ul.custom-tabs li').each(function (i) {
        $(this).find('a').attr('href', '#tab' + (i + 1) + '');
    });
    $('.custom-sidebar-tab').each(function (b) {
        $(this).attr('id', 'tab' + (b + 1) + '');
    });
    $('ul.custom-tabs li a').click(function (e) {
        $('ul.custom-tabs li').removeClass('active');
        var getHref = $(this).attr('href');
        $(getHref).show();
        e.preventDefault();
        $(this).parent().addClass('active');
    });



    // Header Height
    function getSidebarHeight() {
        $('.custom-header-container').css('min-height', $('.header-group').outerHeight());
    }
    getSidebarHeight();
    $(window).on('resize', getSidebarHeight);

    function getSidebarWidth() {
        $('.custom-body-container-wrapper, .footer-container-wrapper').css('padding-left', $('.sidebar-group').width());
    }
    getSidebarWidth();
    $(window).on('resize', getSidebarWidth);


    //add Class
    $('.custom-ques-btn').click(function () {
        $('body').toggleClass('show-ques');
    });



    //add Field
    $('.selected').click(function () {
        $(this).next().slideToggle();
    });
    $('.additional-input').click(function () {
        $('.custom-form-type').show();
    });
    $('.custom-option').click(function (e) {
        e.preventDefault();
        var getValue = $(this).text()
        var getDataVal = $(this).attr('data-value');
        var getLink = $(this).attr('href');
        $(this).parent().parent().find('.selected').html(getValue);
        $('body').addClass('ad-fld');
        $('.add-field').attr('href', getLink)
        $(this).parent().hide();
    });

    $('.add-field').click(function (e) {
        e.preventDefault();
        var datafatch = $(this).attr('href');
        $(datafatch).detach().appendTo('.input-column');
    });


});


$(document).ready(() => {

    $('.additional-input').click(function () {
        var cloneForm = $(this).prev().clone();
        $(this).before(cloneForm)
    });

    $('.custom-data-table tr').each(function (b) {
        $(this).attr('id', 'val-' + (b + 1) + '');
    });
    $('.select-option .custom-option').each(function (b) {
        $(this).attr('href', '#val-' + (b + 1) + '');
    });
    $('.ad-field').click(function () {
        $("#data-form")[0].reset();
        $("#table2")[0].reset();
        $(this).addClass('ready-for-ad-val');
        $('body').addClass('show-add-form');
        $('.custom-add-form-field-dropdown-grp').show();
    });


    $('.select-option .custom-option').click(function () {
        var getval1 = $(this).attr('href')
        $('.add-value').attr('href', getval1)
    });

    $('.add-value').click(function (e) {
        e.preventDefault();
        var getInputsValue = $(".search-input input").val();
        $('.type-value').html(getInputsValue);
        $('.custom-add-form-field-dropdown-grp').hide();
    });


    $('.add-value').click(function () {
        var getHref = $(this).attr('href');
        var a = $(getHref).clone()
        $('.ad-field').closest('tr').before(a);
        $('.form-edit-group tr').removeAttr('id');
        $('.form-edit-group tr td, .form-edit-group tr td input').removeAttr('class');
    });



    $('.include-check').change(function () {
        if ($(this).is(":checked")) {
            $('.include').prop("checked", true);
        } else {
            $('.include').prop("checked", false);
        }
    });

    $('.requare-check').change(function () {
        if ($(this).is(":checked")) {
            $('.required').prop("checked", true);
        } else {
            $('.required').prop("checked", false);
        }
    });

    $('.ad-field').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $('.action-drop-down i').click(function () {
        $(this).parent().toggleClass('active');
        $(this).next().slideToggle();
    });

    $('.projects-tab-link li').each(function (i) {
        $(this).find('a').attr('href', '#projtab' + (i + 1) + '');
    });

    $('.custom-custom-project-tabber-item').each(function (b) {
        $(this).attr('id', 'projtab' + (b + 1) + '');
    });

    $('.projects-tab-link li a').click(function (e) {
        $('.projects-tab-link li').removeClass('active');
        e.preventDefault();
        var getHref = $(this).attr('href');
        $(getHref).show();
        $(this).parent().addClass('active');
        $(getHref).siblings('.custom-custom-project-tabber-item').hide();

    });


    $('.tab-content').each(function () {
        var getTitle = $(this).find('.name').text();
        $(this).find('.name').children().attr('title', getTitle);
        var str = $(this).find('.name').text();
        var matches = str.match(/\b(\w)/g);
        var acronym = matches.join('');
        $(this).find('.name a').text(acronym);
    });


    $('.office-selection ul li a').parent().addClass('menu-has-child');

});