(function ( window, document, $, undefined ) {
	"use strict";

	function setBacktop() {
		var backtop = $( ".c-backtop" );
		if ( backtop.length ) {
			backtop.on( "click", function() {
				$( "body, html" ).animate( { scrollTop: 0 }, 800 );
			} );
			$( window ).on( "scroll", function() {
				if ( $( window ).scrollTop() > 40 ) {
					backtop.fadeIn();
				} else {
					backtop.fadeOut();
				}
			} );
		}
	}
	function setPrism() {
		Prism.plugins.NormalizeWhitespace.setDefaults( {
			'remove-trailing': true,
			'remove-indent': true,
			'left-trim': true,
			'right-trim': true,
		} );
	}
	function setSidebar() {
		var sidebar_nav = $( ".c-sidebar-nav" );
		var sections = $( ".c-section" );

		// Sidebar Scrollspy
		$( "body" ).scrollspy( {
			target: ".c-sidebar-nav"
		} );

		// Sidebar Click Animate
		$( "a", sidebar_nav ).on( "click", function( e ) {
			e.preventDefault();
			var link_object = $( this );
			var link_id = link_object.attr( "href" );
			var link_target = sections.filter( link_id );
			if ( link_target.length ) {
				var link_target_offset = link_target.offset().top;
				$( "body, html" ).animate( { scrollTop: link_target_offset }, 800 );
			}
		} );
	}
	function setTab() {
		var tab_objects = $( ".c-tab" );
		if ( tab_objects.length ) {
			tab_objects.each( function() {
				var tab_object = $( this );
				var nav_items = $( ".c-tab-nav-item", tab_object );
				var body_items = $( ".c-tab-body-item", tab_object );

				// First
				var nav_first = nav_items.filter( ":first" );
				var nav_first_id = $( ".c-tab-nav-link", nav_first ).data( "cursorTabId" );
				var body_first = body_items.filter( ":first" );
				var body_first_id = body_first.data( "cursorTabId" );
				if ( nav_first_id === body_first_id ) {
					nav_first.addClass( "active" );
					body_first.addClass( "active" );
				}

				// Click
				$( ".c-tab-nav-link", nav_items ).on( "click", function( e ) {
					e.preventDefault();
					var link_parent = $( this ).parent( ".c-tab-nav-item" );
					var link_id = $( this ).data( "cursorTabId" );
					var link_target = body_items.filter( "[data-cursor-tab-id=" + link_id + "]" );
					if ( link_target.length ) {
						nav_items.removeClass( "active" );
						body_items.removeClass( "active" );
						link_parent.addClass( "active" );
						link_target.addClass( "active" );
					}
				} );
			} );
		}
	}
	function setAccordion() {
		var accordion_objects = $( ".c-accordion" );
		if ( accordion_objects.length ) {
			accordion_objects.each( function() {
				var accordion_object = $( this );
				var accordion_items = $( ".c-accordion-item", accordion_object );

				// First
				var accordion_first = accordion_items.filter( ":first" );
				if ( accordion_first.length ) {
					accordion_first.addClass( "active" );
				}

				// Click
				$( ".c-accordion-header", accordion_object ).on( "click", function( e ) {
					e.preventDefault();
					var parent = $( this ).parent( ".c-accordion-item" );
					if ( parent.hasClass( "active" ) ) {
						parent.removeClass( "active" );
					} else {
						accordion_items.removeClass( "active" );
						parent.addClass( "active" );
					}
				} );
			} );
		}
	}

	$( document ).ready( function() {
		setBacktop();
		setPrism();
		setSidebar();
		setTab();
		setAccordion();
	} );

})( window, document, jQuery );
