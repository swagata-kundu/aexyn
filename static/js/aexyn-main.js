
$(document).ready(() => {
  $('ul.custom-tabs li').each(function (i) {
    $(this).find('a').attr('href', `#tab${i + 1}`);
  });
  $('.custom-sidebar-tab').each(function (b) {
	  $(this).attr('id', `tab${b + 1 }`);
  });
  $('ul.custom-tabs li a').click(function (e) {
	  $('ul.custom-tabs li').removeClass('active');
	  const getHref = $(this).attr('href');
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
    $('.custom-body-container-wrapper, .footer-container-wrapper').css('padding-left', $('.custom-sidebar-wrapper').width());
  }
  getSidebarWidth();
  $(window).on('resize', getSidebarWidth);


  // add Class
  $('.custom-ques-btn').click(() => {
    $('body').toggleClass('show-ques');
  });


  // add Field
  $('.selected').click(function () {
    $(this).next().slideToggle();
  });
  $('.additional-input').click(() => {
    $('.custom-form-type').show();
  });
  $('.custom-option').click(function (e) {
    e.preventDefault();
    const getValue = $(this).text();
    const getDataVal = $(this).attr('data-value');
    const getLink = $(this).attr('href');
    $(this).parent().parent().find('.selected')
      .html(getValue);
    $('body').addClass('ad-fld');
    $('.add-field').attr('href', getLink);
    $(this).parent().hide();
  });

  $('.add-field').click(function (e) {
    e.preventDefault();
    const datafatch = $(this).attr('href');
    $(datafatch).detach().appendTo('.input-column');
  });
});


$(document).ready(() => {
  $('.additional-input').click(function () {
    	const cloneForm = $(this).prev().clone();
    	$(this).before(cloneForm);
  });

  $('.custom-data-table tr').each(function (b) {
    $(this).attr('id', `val-${ b + 1 }`);
  });

  $('.select-option .custom-option').each(function (b) {
    $(this).attr('href', `#val-${b + 1}`);
  });

  $('.ad-field').click(function () {
    $('#data-form')[0].reset();
    $('#table2')[0].reset();
    	$(this).addClass('ready-for-ad-val');
    	$('body').addClass('show-add-form');
    	$('.custom-add-form-field-dropdown-grp').show();
  });


  $('.select-option .custom-option').click(function () {
    	const getval1 = $(this).attr('href');
    	$('.add-value').attr('href', getval1);
  });

  $('.add-value').click((e) => {
    	e.preventDefault();
    	let getInputsValue = $('.search-input input').val();
	    $('.type-value').html(getInputsValue);
	    $('.custom-add-form-field-dropdown-grp').hide();
  });


  $('.add-value').click(function () {
    const getHref = $(this).attr('href');
    const a = $(getHref).clone();
    $('.ad-field').closest('tr').before(a);
	    $('.form-edit-group tr').removeAttr('id');
    $('.form-edit-group tr td, .form-edit-group tr td input').removeAttr('class');
  });


  $('.include-check').change(function () {
    if ($(this).is(':checked')) {
      $('.include').prop('checked', true);
    } else {
      $('.include').prop('checked', false);
    }
  });

  $('.requare-check').change(function () {
    if ($(this).is(':checked')) {
      $('.required').prop('checked', true);
    } else {
      $('.required').prop('checked', false);
    }
  });

  $('.ad-field').click(() => {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
  });

  $('.action-drop-down i').click(function () {
    $(this).parent().toggleClass('active');
    $(this).next().slideToggle();
  });

  $('.projects-tab-link li').each(function (i) {
	    $(this).find('a').attr('href', `#projtab${i + 1 }`);
  });

  $('.custom-custom-project-tabber-item').each(function (b) {
	  $(this).attr('id', `projtab${b + 1}`);
  });

  $('.projects-tab-link li a').click(function (e) {
    $('.projects-tab-link li').removeClass('active');
    e.preventDefault();
    const getHref = $(this).attr('href');
    $(getHref).show();
    $(this).parent().addClass('active');
	    $(getHref).siblings('.custom-custom-project-tabber-item').hide();
  });


  $('.office-selection ul li a').parent().addClass('menu-has-child');


  /* ========== Axeyn Tabber ========= */
  $('.custom-axeyn-tabber-list li').each(function (i) {
    $(this).find('a').attr('href', `#aexyn-tab${i + 1 }`);
  });
  $('.custom-axeyn-tabber-item').each(function (b) {
    $(this).attr('id', `aexyn-tab${b + 1}`);
  });
//   $('.custom-axeyn-tabber-list li').first().addClass('active');
//   $('.custom-axeyn-tabber-list li a').click(function (e) {
//     $('.custom-axeyn-tabber-list li').removeClass('active');
//     const getHref = $(this).attr('href');
//     $(getHref).show();
//     e.preventDefault();
//     $(this).parent().addClass('active');
//     $(getHref).siblings('.custom-axeyn-tabber-item').hide();
//   });

  $('.header-group').append('<span class="mobile-trigger"><i></i></span>');
  $('.mobile-trigger').click(() => {
    	$('body').toggleClass('menu-open');
  });


  // Popup

  $('.section-header').wrap('<div class="custom-section-header-main-wrapper"></div>');
  $('.custom-data-invite-pop').before('<span class="custom-pop-overlay"></span>');
  $('.custom-data-invite-pop .custom-search-table').append('<a class="close-pop"><i class="fa fa-times"></i></a');
  $('.custom-more-btn').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).closest('.custom-search-table').addClass('show-pop');
  });
  $('.custom-data-invite-pop .custom-search-table').click((b) => {
    b.stopPropagation();
  });

  $('body, .close-pop').click(() => {
    $('.custom-search-table').removeClass('show-pop');
  });

  function GetSecHeight() {
    $('.custom-section-header-main-wrapper').css('min-height', $('.section-header').outerHeight());
  }
  GetSecHeight();
  $(window).on('resize', GetSecHeight);

  $('.tabber-content-group .tab-content .more-member ul li.view-all').click(function () {
    $(this).toggleClass('active');
  });
  $('.tabber-content-group .tab-content .more-member ul li.view-all ul,.tabber-content-group .tab-content .more-member ul li.view-all').click((e) => {
    e.stopPropagation();
  });
  $('body').click(() => {
    $('.tabber-content-group .tab-content .more-member ul li.view-all').removeClass('active');
  });

  // Hide Sidebar
  if ($('.custom-sidebar-wrapper').length < 1) {
    $('.custom-section-header-main-wrapper .section-header').addClass('no-sidebar');
  }
});


// Tooltip

$(document).ready(() => {
  $('[data-toggle="tooltip"]').tooltip();
});
