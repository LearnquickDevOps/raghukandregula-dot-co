(function ( window, document, $, undefined ) {
	"use strict";

	// Functions
	function setFitvids() {
		var fitvids_objects = $( ".fitvids" );
		if ( fitvids_objects.length ) {
			fitvids_objects.fitVids();
		}
	}
	function setCountTo() {
		var count_to_objects = $( ".count-to" );
		if ( count_to_objects.length ) {
			count_to_objects.each( function() {
				var count_to_object = $( this );
				var count_to_isvisible = count_to_object.data( "cursorCountIsvisible" );
				if ( count_to_isvisible === true ) {
					count_to_object.waypoint( function( direction ) {
						if ( direction === "down" ) {
							$( this.element ).countTo();
							this.destroy();
						}
					}, { offset: "90%" } );
				} else {
					count_to_object.countTo();
				}
			} );
		}
	}
	function setCountdown() {
		var countdown_objects = $( ".countdown" );
		if ( countdown_objects.length ) {
			countdown_objects.each( function() {
				var countdown_object = $( this );
				var countdown_date = countdown_object.data( "cursorCountdown" );
				var countdown_target_days = $( ".countdown-value-days", countdown_object );
				var countdown_target_hours = $( ".countdown-value-hours", countdown_object );
				var countdown_target_minutes = $( ".countdown-value-minutes", countdown_object );
				var countdown_target_seconds = $( ".countdown-value-seconds", countdown_object );
				countdown_object.countdown( countdown_date, function( event ) {
					countdown_target_days.html( event.offset.totalDays );
					countdown_target_hours.html( event.offset.hours );
					countdown_target_minutes.html( event.offset.minutes );
					countdown_target_seconds.html( event.offset.seconds );
				} );
			} );
		}
	}
	function setStellar() {
		var stellar_objects = $( "[data-stellar-background-ratio]" );
		if ( stellar_objects.length ) {
			$.stellar( {
				horizontalScrolling: false,
			} );
		}
	}
	function setOwlCarousel() {
		var owl_objects = $( ".owl-carousel" );
		if ( owl_objects.length ) {
			owl_objects.each( function () {
				var owl_object = $( this );
				if ( owl_object.hasClass( "-js-carousel" ) ) {
					var owl_options = owl_object.data();
					owl_object.owlCarousel( {
						items: owl_options.owlItems, // Default: 3
						loop: owl_options.owlLoop,  // Default: false
						center: owl_options.owlCenter,  // Default: false
						rewind: owl_options.owlRewind,  // Default: false
						mouseDrag: owl_options.owlMousedrag,  // Default: true
						touchDrag: owl_options.owlTouchdrag,  // Default: true
						pullDrag: owl_options.owlPulldrag,  // Default: true
						freeDrag: owl_options.owlFreedrag,  // Default: false
						margin: owl_options.owlMargin,  // Default: 0
						stagePadding: owl_options.owlStagepadding,  // Default: 0
						merge: owl_options.owlMerge,  // Default: false
						mergeFit: owl_options.owlMergefit,  // Default: true
						autoWidth: owl_options.owlAutowidth,  // Default: false
						startPosition: owl_options.owlStartposition,  // Default: 0
						rtl: owl_options.owlRtl,  // Default: false
						smartSpeed: owl_options.owlSmartspeed,  // Default: 250
						fluidSpeed: owl_options.owlFluidspeed,  // Default: false
						dragEndSpeed: owl_options.owlDragendspeed,  // Default: false
						responsive: owl_options.owlResponsive,  // Default: {}
						responsiveRefreshRate: owl_options.owlResponsiverefreshrate,  // Default: 200
						responsiveBaseElement: owl_options.owlResponsivebaseelement,  // Default: window
						fallbackEasing: owl_options.owlFallbackeasing,  // Default: "swing"
						info: owl_options.owlInfo,  // Default: false
						nestedItemSelector: owl_options.owlNesteditemselector,  // Default: false
						itemElement: owl_options.owlItemelement,  // Default: "div"
						stageElement: owl_options.owlStageelement,  // Default: "div"
						refreshClass: owl_options.owlRefreshclass,  // Default: "owl-refresh"
						loadedClass: owl_options.owlLoadedclass,  // Default: "owl-loaded"
						loadingClass: owl_options.owlLoadingclass,  // Default: "owl-loading"
						rtlClass: owl_options.owlRtlclass,  // Default: "owl-rtl"
						responsiveClass: owl_options.owlResponsiveclass,  // Default: "owl-responsive"
						dragClass: owl_options.owlDragclass,  // Default: "owl-drag"
						itemClass: owl_options.owlItemclass,  // Default: "owl-item"
						stageClass: owl_options.owlStageclass,  // Default: "owl-stage"
						stageOuterClass: owl_options.owlStageouterclass,  // Default: "owl-stage-outer"
						grabClass: owl_options.owlGrabclass,  // Default: "owl-grab"
						autoRefresh: owl_options.owlAutorefresh, // Default: true
						autoRefreshInterval: owl_options.owlAutorefreshinterval, // Default: 500
						lazyLoad: owl_options.owlLazyload, // Default: false
						autoHeight: owl_options.owlAutoheight, // Default: false
						autoHeightClass: owl_options.owlAutoheightclass, // Default: "owl-height"
						video: owl_options.owlVideo, // Default: false
						videoHeight: owl_options.owlVideoheight, // Default: false
						videoWidth: owl_options.owlVideowidth, // Default: false
						animateOut: owl_options.owlAnimateout, // Default: false
						animateIn: owl_options.owlAnimatein, // Default: false
						autoplay: owl_options.owlAutoplay, // Default: false
						autoplayTimeout: owl_options.owlAutoplaytimeout, // Default: 5000
						autoplayHoverPause: owl_options.owlAutoplayhoverpause, // Default: false
						autoplaySpeed: owl_options.owlAutoplayspeed, // Default: false
						nav: owl_options.owlNav, // Default: false
						navText: owl_options.owlNavtext, // Default: ["prev","next"]
						navSpeed: owl_options.owlNavspeed, // Default: false
						navElement: owl_options.owlNavelement, // Default: "div"
						navContainer: owl_options.owlNavcontainer, // Default: false
						navContainerClass: owl_options.owlNavcontainerclass, // Default: "owl-nav"
						navClass: owl_options.owlNavclass, // Default: [ 'owl-prev', 'owl-next' ]
						slideBy: owl_options.owlSlideby, // Default: 1
						dotClass: owl_options.owlDotclass, // Default: "owl-dot"
						dotsClass: owl_options.owlDotsclass, // Default: "owl-dots"
						dots: owl_options.owlDots, // Default: true
						dotsEach: owl_options.owlDotseach, // Default: false
						dotsData: owl_options.owlDotsdata, // Default: false
						dotsSpeed: owl_options.owlDotsspeed, // Default: false
						dotsContainer: owl_options.owlDotscontainer, // Default: false
						URLhashListener: owl_options.owlUrlhashlistener, // Default: false
					} );
				}
			} );
		}
	}
	function setSweetScroll() {
		var sweetScroll = new SweetScroll();
	}
	function setMagnificPopup() {
		var magnific_photo = $( ".magnific-photo" );
		var magnific_gallery = $( ".magnific-gallery" );
		var magnific_iframe = $( ".magnific-iframe" );
		var magnific_inline = $( ".magnific-inline" );
		var magnific_ajax = $( ".magnific-ajax" );
		if ( magnific_photo.length ) {
			magnific_photo.magnificPopup( {
				type: "image"
			} );
		}
		if ( magnific_gallery.length ) {
			magnific_gallery.each( function() {
				$( this ).magnificPopup( {
					delegate: "a",
					type: "image",
					gallery: {
						enabled: true
					}
				} );
			} );
		}
		if ( magnific_iframe.length ) {
			magnific_iframe.magnificPopup( {
				type: "iframe"
			} );
		}
		if ( magnific_inline.length ) {
			magnific_inline.magnificPopup( {
				type: "inline"
			} );
		}
		if ( magnific_ajax.length ) {
			magnific_ajax.magnificPopup( {
				type: "ajax"
			} );
		}
	}
	function setAnimations() {
		var animation_objects = $( "[data-cursor-animation]" );
		if ( animation_objects.length ) {
			animation_objects.each( function() {
				var animation_object = $( this );
				var animation_css = { "visibility": "hidden" };
				if ( animation_object.attr( "data-cursor-animation-delay" ) ) {
					$.extend( animation_css, {
						"-webkit-animation-delay": animation_object.data( "cursorAnimationDelay" ),
						"animation-delay": animation_object.data( "cursorAnimationDelay" ),
					} );
				}
				if ( animation_object.attr( "data-cursor-animation-duration" ) ) {
					$.extend( animation_css, {
						"-webkit-animation-duration": animation_object.data( "cursorAnimationDuration" ),
						"animation-duration": animation_object.data( "cursorAnimationDuration" ),
					} );
				}
				animation_object.css( animation_css ).addClass( "animated" );
			} );
			animation_objects.waypoint( function( direction ) {
				if ( direction === "down" ) {
					var element = $( this.element );
					var animation = element.data( "cursorAnimation" );
					element.css( "visibility", "visible" ).addClass( animation );
					this.destroy();
				}
			}, { offset: "100%" } );
		}
	}
	function setBackgrounds() {
		var background_image_objects = $( "[data-cursor-bg-img]" );
		if ( background_image_objects.length ) {
			background_image_objects.each( function () {
				var background_image_object = $( this );
				var background_image_src = background_image_object.data( "cursorBgImg" );
				if ( background_image_src ) {
					background_image_object.css( "background-image", "url(" + background_image_src + ")" );
				}
			} );
		}
	}
	function setLoading_1() {
		var loading_1 = $( ".c-loading-1" );
		if ( loading_1.length ) {
			if ( loading_1.hasClass( "-js-loading" ) ) {
				$( window ).on( "load", function() {
					loading_1.delay( 1000 ).fadeOut( "slow" );
				} );
			}
		}
	}
	function setBacktop_1() {
		var backtop_1 = $( ".c-backtop-1" );
		if ( backtop_1.length ) {
			if ( backtop_1.hasClass( "-js-backtop" ) ) {
				backtop_1.on( "click", function() {
					$( "body, html" ).animate( { scrollTop: 0 }, 800 );
				} );

				$( window ).on( "scroll", function() {
					if ( $( window ).scrollTop() > 40 ) {
						backtop_1.fadeIn();
					} else {
						backtop_1.fadeOut();
					}
				} );
			}
		}
	}
	function setHeader_1() {
		var header_1 = $( ".c-header-1" );
		if ( header_1.length ) {
			if ( header_1.hasClass( "-js-header" ) ) {
				var header_1_inner = $( ".c-header-1-inner", header_1 );
				var header_1_searcher = $( ".c-header-1-searcher", header_1 );
				var header_1_spacer = $( ".c-header-1-spacer", header_1 );
				var header_1_nav = $( ".c-header-1-nav", header_1 );
				var header_1_height = header_1_inner.outerHeight();

				// Header Sticky
				if ( header_1.hasClass( "-sticky" ) ) {
					header_1_spacer.height( header_1_height );
					header_1.waypoint( function( direction ) {
						if ( direction === "down" ) {
							setTimeout( function () {
								header_1.addClass( "-sticky-active" );
							}, 400 );
						}
					}, { offset: -header_1_height } );
					header_1.waypoint( function( direction ) {
						if ( direction === "up" ) {
							header_1.removeClass( "-sticky-active" );
						}
					}, { offset: -1 } );
				}

				// Header Search
				$( ".c-header-1-icon-search", header_1 ).on( "click", function() {
					header_1.addClass( "-search-active" );
					$( ".c-header-1-searcher-field", header_1_searcher ).focus();
				} );
				$( ".c-header-1-searcher-close", header_1_searcher ).on( "click", function() {
					header_1.removeClass( "-search-active" );
				} );

				// Header Mobile
				$( "li.sub > a", header_1 ).on( "click", function( e ) {
					if ( $( window ).width() < 992 ) {
						e.preventDefault();
						var link_object = $( this );
						var link_parent = link_object.parent( "li.sub" );
						if ( link_parent.hasClass( "active" ) ) {
							link_parent.removeClass( "active" );
						} else {
							link_parent.siblings( "li" ).removeClass( "active" );
							link_parent.addClass( "active" );
						}
					} else {
						return e;
					}
				} );
				$( "li.mega > a", header_1 ).on( "click", function( e ) {
					if ( $( window ).width() < 992 ) {
						e.preventDefault();
						var link_object = $( this );
						var link_parent = link_object.parent( "li.mega" );
						if ( link_parent.hasClass( "active" ) ) {
							link_parent.removeClass( "active" );
						} else {
							link_parent.siblings( "li" ).removeClass( "active" );
							link_parent.addClass( "active" );
						}
					} else {
						return e;
					}
				} );
				$( ".c-header-1-icon-toggle", header_1 ).on( "click", function() {
					if ( $( this ).hasClass( "active" ) ) {
						$( this ).removeClass( "active" );
						header_1_nav.removeClass( "active" );
					} else {
						$( this ).addClass( "active" );
						header_1_nav.addClass( "active" );
					}
				} );
			}
		}
	}
	function setHeader_2() {
		var header_2 = $( ".c-header-2" );
		if ( header_2.length ) {
			if ( header_2.hasClass( "-js-header" ) ) {
				var header_2_nav = $( ".c-header-2-nav", header_2 );

				// Header Mobile
				$( "li.sub > a", header_2 ).on( "click", function( e ) {
					if ( $( window ).width() < 992 ) {
						e.preventDefault();
						var link_object = $( this );
						var link_parent = link_object.parent( "li.sub" );
						if ( link_parent.hasClass( "active" ) ) {
							link_parent.removeClass( "active" );
						} else {
							link_parent.siblings( "li" ).removeClass( "active" );
							link_parent.addClass( "active" );
						}
					} else {
						return e;
					}
				} );
				$( ".c-header-2-toggle", header_2 ).on( "click", function() {
					if ( $( this ).hasClass( "active" ) ) {
						$( this ).removeClass( "active" );
						header_2_nav.removeClass( "active" );
					} else {
						$( this ).addClass( "active" );
						header_2_nav.addClass( "active" );
					}
				} );
			}
		}
	}
	function setTab_1() {
		var tab_1_objects = $( ".c-tab-1" );
		if ( tab_1_objects.length ) {
			tab_1_objects.each( function() {
				var tab_1_object = $( this );
				if ( tab_1_object.hasClass( "-js-tab" ) ) {
					var items_nav = $( ".c-tab-1-nav-item", tab_1_object );
					var items_body = $( ".c-tab-1-body-item", tab_1_object );

					if ( items_nav.hasClass( "active" ) ) {
						var active_item = items_nav.filter( ".active:first" );
						var active_id = $( ".c-tab-1-nav-link", active_item ).data( "cursorTabId" );
						items_nav.removeClass( "active" );
						items_body.removeClass( "active" );
						active_item.addClass( "active" )
						items_body.filter( "[data-cursor-tab-id=" + active_id + "]" ).addClass( "active" );
					} else {
						var first_item = items_nav.filter( ":first" );
						var first_id = $( ".c-tab-1-nav-link", first_item ).data( "cursorTabId" );
						first_item.addClass( "active" )
						items_body.filter( "[data-cursor-tab-id=" + first_id + "]" ).addClass( "active" );
					}

					$( ".c-tab-1-nav-link", items_nav ).on( "click", function( e ) {
						e.preventDefault();
						var link_object = $( this );
						var link_id = link_object.data( "cursorTabId" );
						var link_parent = link_object.parent( ".c-tab-1-nav-item" );

						// Reset
						items_nav.removeClass( "active" );
						items_body.removeClass( "active" );

						// Current
						link_parent.addClass( "active" );
						items_body.filter( "[data-cursor-tab-id=" + link_id + "]" ).addClass( "active" );
					} );
				}
			} );
		}
	}
	function setTab_2() {
		var tab_2_objects = $( ".c-tab-2" );
		if ( tab_2_objects.length ) {
			tab_2_objects.each( function() {
				var tab_2_object = $( this );
				if ( tab_2_object.hasClass( "-js-tab" ) ) {
					var items_nav = $( ".c-tab-2-nav-item", tab_2_object );
					var items_body = $( ".c-tab-2-body-item", tab_2_object );

					if ( items_nav.hasClass( "active" ) ) {
						var active_item = items_nav.filter( ".active:first" );
						var active_id = $( ".c-tab-2-nav-link", active_item ).data( "cursorTabId" );
						items_nav.removeClass( "active" );
						items_body.removeClass( "active" );
						active_item.addClass( "active" )
						items_body.filter( "[data-cursor-tab-id=" + active_id + "]" ).addClass( "active" );
					} else {
						var first_item = items_nav.filter( ":first" );
						var first_id = $( ".c-tab-2-nav-link", first_item ).data( "cursorTabId" );
						first_item.addClass( "active" )
						items_body.filter( "[data-cursor-tab-id=" + first_id + "]" ).addClass( "active" );
					}

					$( ".c-tab-2-nav-link", items_nav ).on( "click", function( e ) {
						e.preventDefault();
						var link_object = $( this );
						var link_id = link_object.data( "cursorTabId" );
						var link_parent = link_object.parent( ".c-tab-2-nav-item" );

						// Reset
						items_nav.removeClass( "active" );
						items_body.removeClass( "active" );

						// Current
						link_parent.addClass( "active" );
						items_body.filter( "[data-cursor-tab-id=" + link_id + "]" ).addClass( "active" );
					} );
				}
			} );
		}
	}
	function setTab_3() {
		var tab_3_objects = $( ".c-tab-3" );
		if ( tab_3_objects.length ) {
			tab_3_objects.each( function() {
				var tab_3_object = $( this );
				if ( tab_3_object.hasClass( "-js-tab" ) ) {
					var items_nav = $( ".c-tab-3-nav-item", tab_3_object );
					var items_body = $( ".c-tab-3-body-item", tab_3_object );

					if ( items_nav.hasClass( "active" ) ) {
						var active_item = items_nav.filter( ".active:first" );
						var active_id = $( ".c-tab-3-nav-link", active_item ).data( "cursorTabId" );
						items_nav.removeClass( "active" );
						items_body.removeClass( "active" );
						active_item.addClass( "active" )
						items_body.filter( "[data-cursor-tab-id=" + active_id + "]" ).addClass( "active" );
					} else {
						var first_item = items_nav.filter( ":first" );
						var first_id = $( ".c-tab-3-nav-link", first_item ).data( "cursorTabId" );
						first_item.addClass( "active" )
						items_body.filter( "[data-cursor-tab-id=" + first_id + "]" ).addClass( "active" );
					}

					$( ".c-tab-3-nav-link", items_nav ).on( "click", function( e ) {
						e.preventDefault();
						var link_object = $( this );
						var link_id = link_object.data( "cursorTabId" );
						var link_parent = link_object.parent( ".c-tab-3-nav-item" );

						// Reset
						items_nav.removeClass( "active" );
						items_body.removeClass( "active" );

						// Current
						link_parent.addClass( "active" );
						items_body.filter( "[data-cursor-tab-id=" + link_id + "]" ).addClass( "active" );
					} );
				}
			} );
		}
	}
	function setTab_4() {
		var tab_4_objects = $( ".c-tab-4" );
		if ( tab_4_objects.length ) {
			tab_4_objects.each( function() {
				var tab_4_object = $( this );
				if ( tab_4_object.hasClass( "-js-tab" ) ) {
					var items_nav = $( ".c-tab-4-nav-item", tab_4_object );
					var items_body = $( ".c-tab-4-body-item", tab_4_object );

					if ( items_nav.hasClass( "active" ) ) {
						var active_item = items_nav.filter( ".active:first" );
						var active_id = $( ".c-tab-4-nav-link", active_item ).data( "cursorTabId" );
						items_nav.removeClass( "active" );
						items_body.removeClass( "active" );
						active_item.addClass( "active" )
						items_body.filter( "[data-cursor-tab-id=" + active_id + "]" ).addClass( "active" );
					} else {
						var first_item = items_nav.filter( ":first" );
						var first_id = $( ".c-tab-4-nav-link", first_item ).data( "cursorTabId" );
						first_item.addClass( "active" )
						items_body.filter( "[data-cursor-tab-id=" + first_id + "]" ).addClass( "active" );
					}

					$( ".c-tab-4-nav-link", items_nav ).on( "click", function( e ) {
						e.preventDefault();
						var link_object = $( this );
						var link_id = link_object.data( "cursorTabId" );
						var link_parent = link_object.parent( ".c-tab-4-nav-item" );

						// Reset
						items_nav.removeClass( "active" );
						items_body.removeClass( "active" );

						// Current
						link_parent.addClass( "active" );
						items_body.filter( "[data-cursor-tab-id=" + link_id + "]" ).addClass( "active" );
					} );
				}
			} );
		}
	}
	function setTab_5() {
		var tab_5_objects = $( ".c-tab-5" );
		if ( tab_5_objects.length ) {
			tab_5_objects.each( function() {
				var tab_5_object = $( this );
				if ( tab_5_object.hasClass( "-js-tab" ) ) {
					var items_nav = $( ".c-tab-5-nav-item", tab_5_object );
					var items_body = $( ".c-tab-5-body-item", tab_5_object );

					if ( items_nav.hasClass( "active" ) ) {
						var active_item = items_nav.filter( ".active:first" );
						var active_id = $( ".c-tab-5-nav-link", active_item ).data( "cursorTabId" );
						items_nav.removeClass( "active" );
						items_body.removeClass( "active" );
						active_item.addClass( "active" )
						items_body.filter( "[data-cursor-tab-id=" + active_id + "]" ).addClass( "active" );
					} else {
						var first_item = items_nav.filter( ":first" );
						var first_id = $( ".c-tab-5-nav-link", first_item ).data( "cursorTabId" );
						first_item.addClass( "active" )
						items_body.filter( "[data-cursor-tab-id=" + first_id + "]" ).addClass( "active" );
					}

					$( ".c-tab-5-nav-link", items_nav ).on( "click", function( e ) {
						e.preventDefault();
						var link_object = $( this );
						var link_id = link_object.data( "cursorTabId" );
						var link_parent = link_object.parent( ".c-tab-5-nav-item" );

						// Reset
						items_nav.removeClass( "active" );
						items_body.removeClass( "active" );

						// Current
						link_parent.addClass( "active" );
						items_body.filter( "[data-cursor-tab-id=" + link_id + "]" ).addClass( "active" );
					} );
				}
			} );
		}
	}
	function setNav_1() {
		var nav_1_objects = $( ".c-nav-1" );
		if ( nav_1_objects.length ) {
			nav_1_objects.each( function() {
				var nav_1_object = $( this );
				if ( nav_1_object.hasClass( "-js-toggle" ) ) {
					var nav_1_toggle = $( ".c-nav-1-toggle", nav_1_object );
					var nav_1_category = $( ".c-nav-1-category", nav_1_object );

					nav_1_toggle.on( "click", function() {
						if ( nav_1_category.hasClass( "active" ) ) {
							nav_1_category.removeClass( "active" );
						} else {
							nav_1_category.addClass( "active" );
						}
					} );
				}
			} );
		}
	}
	function setMap_1() {
		var map_1_objects = $( ".c-map-1" );
		if ( map_1_objects.length ) {
			map_1_objects.each( function() {
				var map_1_object = $( this );
				if ( map_1_object.hasClass( "-js-map" ) ) {
					if ( typeof google === "object" && typeof google.maps === "object" ) {

						// Map Styles - Light
						var map_1_style_light = new google.maps.StyledMapType( [
						{ featureType: "water", elementType: "geometry", stylers: [ { color: "#e9e9e9" }, { lightness: 17 } ] },
						{ featureType: "landscape", elementType: "geometry", stylers: [ { color: "#f5f5f5" }, { lightness: 20 } ] },
						{ featureType: "road.highway", elementType: "geometry.fill", stylers: [ { color: "#ffffff" }, { lightness: 17 } ] },
						{ featureType: "road.highway", elementType: "geometry.stroke", stylers: [ { color: "#ffffff" }, { lightness: 29 }, { weight: .2 } ] },
						{ featureType: "road.arterial", elementType: "geometry", stylers: [ { color: "#ffffff" }, { lightness: 18 } ] },
						{ featureType: "road.local", elementType: "geometry", stylers: [ { color: "#ffffff" }, { lightness: 16 } ] },
						{ featureType: "poi", elementType: "geometry", stylers: [ { color: "#f5f5f5" }, { lightness: 21 } ] },
						{ featureType: "poi.park", elementType: "geometry", stylers: [ { color: "#dedede" }, { lightness: 21 } ] },
						{ elementType: "labels.text.stroke", stylers: [ { visibility: "on" }, { color: "#ffffff" }, { lightness: 16 } ] },
						{ elementType: "labels.text.fill", stylers: [ { saturation: 36 }, { color: "#333333" }, { lightness: 40 } ] },
						{ elementType: "labels.icon", stylers: [ { visibility: "off" } ] },
						{ featureType: "transit", elementType: "geometry", stylers: [ { color: "#f2f2f2" }, { lightness: 19 } ] },
						{ featureType: "administrative", elementType: "geometry.fill", stylers: [ { color: "#fefefe" }, { lightness: 20 } ] },
						{ featureType: "administrative", elementType: "geometry.stroke", stylers: [ { color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 } ] }
						], { name: "Light" } );

						// Map Styles - Dark
						var map_1_style_dark = new google.maps.StyledMapType( [
						{ featureType: "all", elementType: "labels.text.fill", stylers: [ { saturation:36 }, { color: "#000000" }, { lightness: 40 } ] },
						{ featureType: "all", elementType: "labels.text.stroke", stylers: [ { visibility: "on" }, { color: "#000000" }, { lightness: 16 } ] },
						{ featureType: "all", elementType: "labels.icon", stylers: [ { visibility: "off" } ] },
						{ featureType: "administrative", elementType: "geometry.fill", stylers: [ { color: "#000000" }, { lightness: 20 } ] },
						{ featureType: "administrative", elementType: "geometry.stroke", stylers: [ { color: "#000000" }, { lightness: 17 }, { weight: 1.2 } ] },
						{ featureType: "landscape", elementType: "geometry", stylers: [ { color: "#000000" }, { lightness: 20 } ] },
						{ featureType: "poi", elementType: "geometry", stylers: [ { color: "#000000" }, { lightness: 21 } ] },
						{ featureType: "road.highway", elementType: "geometry.fill", stylers: [ { color: "#000000" }, { lightness: 17 } ] },
						{ featureType: "road.highway", elementType: "geometry.stroke", stylers: [ { color: "#000000" }, { lightness: 29 }, { weight: 0.2 } ] },
						{ featureType: "road.arterial", elementType: "geometry", stylers: [ { color: "#000000" }, { lightness: 18 } ] },
						{ featureType: "road.local", elementType: "geometry", stylers: [ { color: "#000000" }, { lightness: 16 } ] },
						{ featureType: "transit", elementType: "geometry", stylers: [ { color: "#000000" }, { lightness: 19 } ] },
						{ featureType: "water", elementType: "geometry", stylers: [ { color: "#000000" }, { lightness: 17 } ] }
						], { name: "Dark" } );

						// Map Data
						var map_1_data = map_1_object.data();

						// Map Options
						var map_1_options = {
							zoom: map_1_data.cursorMapZoom || 7,
							center: new google.maps.LatLng( map_1_data.cursorMapLat, map_1_data.cursorMapLng ),
							disableDefaultUI: map_1_data.cursorMapHideControls || false,
							scrollwheel: false,
							mapTypeControlOptions: {
								mapTypeIds: [ "roadmap", "satellite", "hybrid", "terrain", "style_light", "style_dark" ]
							}
						};

						// Map Init
						var map = new google.maps.Map( this, map_1_options );

						// Map Style Register
						map.mapTypes.set( "style_light", map_1_style_light );
						map.mapTypes.set( "style_dark", map_1_style_dark );

						// Map Style Set
						var map_1_style = map_1_data.cursorMapStyle || "roadmap";
						if ( map_1_style === "style_light" ) {
							map.setMapTypeId( "style_light" );
						} else if ( map_1_style === "style_dark" ) {
							map.setMapTypeId( "style_dark" );
						} else {
							map.setMapTypeId( map_1_style );
						}

						// Map Marker
						if ( map_1_data.cursorMapMarker !== false ) {
							var map_1_icon = {
								url: map_1_data.cursorMapMarker || "assets/img/icon-map-marker-purple.png",
								size: new google.maps.Size( 30, 48 ),
								origin: new google.maps.Point( 0, 0 ),
								anchor: new google.maps.Point( 16, 26 ),
								scaledSize: new google.maps.Size( 25, 40 )
							};
							var map_1_marker = new google.maps.Marker( {
							  position: new google.maps.LatLng( map_1_data.cursorMapLat, map_1_data.cursorMapLng ),
							  map: map,
							  icon: map_1_icon
							} );
						}
					}
				}
			} );
		}
	}
	function setList_1() {
		var list_1_objects = $( ".c-list-1" );
		if ( list_1_objects.length ) {
			list_1_objects.each( function() {
				var list_1_object = $( this );
				if ( list_1_object.hasClass( "-js-icon" ) ) {
					var list_1_icon = list_1_object.data( "cursorListIcon" );
					var list_1_item = $( "> li", list_1_object );
					list_1_item.prepend( '<span class="c-list-1-icon ' + list_1_icon + '"></span>' );
				}
			} );
		}
	}
	function setBlog_1() {
		var blog_1_objects = $( ".c-blog-1" );
		if ( blog_1_objects.length ) {
			blog_1_objects.each( function() {
				var blog_1_object = $( this );
				if ( blog_1_object.hasClass( "-js-isotope" ) ) {
					var blog_1_isotope = $( ".c-blog-1-inner", blog_1_object );
					blog_1_isotope.imagesLoaded( function () {
						blog_1_isotope.isotope( {
							itemSelector: ".c-blog-1-item",
							percentPosition: true,
							masonry: {
								columnWidth: ".c-blog-1-size"
							}
						} );
					} );
				}
			} );
		}
	}
	function setAlert_1() {
		var alert_1_objects = $( ".c-alert-1" );
		if ( alert_1_objects.length ) {
			alert_1_objects.each( function() {
				var alert_1_object = $( this );
				if ( alert_1_object.hasClass( "-js-close" ) ) {
					$( ".c-alert-1-close", alert_1_object ).on( "click", function() {
						alert_1_object.hide();
					} );
				}
			} );
		}
	}
	function setAlert_2() {
		var alert_2_objects = $( ".c-alert-2" );
		if ( alert_2_objects.length ) {
			alert_2_objects.each( function() {
				var alert_2_object = $( this );
				if ( alert_2_object.hasClass( "-js-close" ) ) {
					$( ".c-alert-2-close", alert_2_object ).on( "click", function() {
						alert_2_object.hide();
					} );
				}
			} );
		}
	}
	function setAlert_3() {
		var alert_3_objects = $( ".c-alert-3" );
		if ( alert_3_objects.length ) {
			alert_3_objects.each( function() {
				var alert_3_object = $( this );
				if ( alert_3_object.hasClass( "-js-close" ) ) {
					$( ".c-alert-3-close", alert_3_object ).on( "click", function() {
						alert_3_object.hide();
					} );
				}
			} );
		}
	}
	function setAlert_4() {
		var alert_4_objects = $( ".c-alert-4" );
		if ( alert_4_objects.length ) {
			alert_4_objects.each( function() {
				var alert_4_object = $( this );
				if ( alert_4_object.hasClass( "-js-close" ) ) {
					$( ".c-alert-4-close", alert_4_object ).on( "click", function() {
						alert_4_object.hide();
					} );
				}
			} );
		}
	}
	function setCounter_1() {
		var counter_1_objects = $( ".c-counter-1" );
		if ( counter_1_objects.length ) {
			counter_1_objects.each( function() {
				var counter_1_object = $( this );
				if ( counter_1_object.hasClass( "-js-counter" ) ) {
					counter_1_object.waypoint( function( direction ) {
						if ( direction === "down" ) {
							var counter_1_element = $( this.element );
							var counter_1_value = $( ".c-counter-1-value", counter_1_element );
							counter_1_value.countTo();
							this.destroy();
						}
					}, { offset: "90%" } );
				}
			} );
		}
	}
	function setGallery_1() {
		var gallery_1_objects = $( ".c-gallery-1" );
		if ( gallery_1_objects.length ) {
			gallery_1_objects.each( function() {
				var gallery_1_object = $( this );

				if ( gallery_1_object.hasClass( "-js-popup" ) ) {
					gallery_1_object.magnificPopup( {
						delegate: "a",
						type: "image",
						gallery: {
							enabled: true
						}
					} );
				}

				if ( gallery_1_object.hasClass( "-js-isotope" ) ) {
					var gallery_1_isotope = $( ".c-gallery-1-inner", gallery_1_object );
					gallery_1_isotope.imagesLoaded( function () {
						gallery_1_isotope.isotope( {
							itemSelector: ".c-gallery-1-item",
							percentPosition: true,
							masonry: {
								columnWidth: ".c-gallery-1-size"
							}
						} );
					} );
				}
			} );
		}
	}
	function setProgress_1() {
		var progress_1_objects = $( ".c-progress-1" );
		if ( progress_1_objects.length ) {
			progress_1_objects.each( function() {
				var progress_1_object = $( this );
				if ( progress_1_object.hasClass( "-js-progress" ) ) {
					progress_1_object.waypoint( function( direction ) {
						if ( direction === "down" ) {
							var progress_1_element = $( this.element );
							var progress_1_value = progress_1_element.data( "cursorProgress" ) || 0;
							var progress_1_inner = $( ".c-progress-1-inner", progress_1_element );
							progress_1_inner.width( progress_1_value + "%" );
							this.destroy();
						}
					}, { offset: "90%" } );
				}
			} );
		}
	}
	function setAccordion_1() {
		var accordion_1_objects = $( ".c-accordion-1" );
		if ( accordion_1_objects.length ) {
			accordion_1_objects.each( function() {
				var accordion_1_object = $( this );
				if ( accordion_1_object.hasClass( "-js-accordion" ) ) {
					var accordion_1_multiple = accordion_1_object.data( "cursorAccordionMultiple" );

					// Items Active
					$( ".c-accordion-1-item.active", accordion_1_object ).each( function() {
						$( ".c-accordion-1-body", this ).show();
					} );

					// Items Click
					$( ".c-accordion-1-header", accordion_1_object ).on( "click", function() {
						var accordion_1_item = $( this ).parent( ".c-accordion-1-item" );
						var accordion_1_body = $( ".c-accordion-1-body", accordion_1_item );

						if ( accordion_1_item.hasClass( "active" ) ) {
							accordion_1_body.slideUp();
							accordion_1_item.removeClass( "active" );
						} else {
							if ( accordion_1_multiple !== true ) {
								$( ".c-accordion-1-item.active .c-accordion-1-body", accordion_1_object ).slideUp();
								$( ".c-accordion-1-item.active", accordion_1_object ).removeClass( "active" );
							}
							accordion_1_body.slideDown();
							accordion_1_item.addClass( "active" );
						}
					} );
				}
			} );
		}
	}
	function setCountdown_1() {
		var countdown_1_objects = $( ".c-countdown-1" );
		if ( countdown_1_objects.length ) {
			countdown_1_objects.each( function() {
				var countdown_1_object = $( this );
				if ( countdown_1_object.hasClass( "-js-countdown" ) ) {
					var countdown_1_date = countdown_1_object.data( "cursorCountdown" );
					var countdown_1_target_days = $( ".value-days", countdown_1_object );
					var countdown_1_target_hours = $( ".value-hours", countdown_1_object );
					var countdown_1_target_minutes = $( ".value-minutes", countdown_1_object );
					var countdown_1_target_seconds = $( ".value-seconds", countdown_1_object );
					countdown_1_object.countdown( countdown_1_date, function( event ) {
						countdown_1_target_days.html( event.offset.totalDays );
						countdown_1_target_hours.html( event.offset.hours );
						countdown_1_target_minutes.html( event.offset.minutes );
						countdown_1_target_seconds.html( event.offset.seconds );
					} );
				}
			} );
		}
	}
	function setPortfolio_1() {
		var portfolio_1_objects = $( ".c-portfolio-1" );
		if ( portfolio_1_objects.length ) {
			portfolio_1_objects.each( function() {
				var portfolio_1_object = $( this );
				if ( portfolio_1_object.hasClass( "-js-isotope" ) ) {
					var portfolio_1_isotope = $( ".c-portfolio-1-inner", portfolio_1_object );
					var portfolio_1_filter = $( ".-filter-portfolio" );
					var portfolio_1_layout = "masonry";
					if ( portfolio_1_object.data( "cursorPortfolioLayout" ) === "grid" ) {
						portfolio_1_layout = "fitRows";
					}

					// Isotope Init
					portfolio_1_isotope.imagesLoaded( function () {
						portfolio_1_isotope.isotope( {
							layoutMode: portfolio_1_layout,
							itemSelector: ".c-portfolio-1-item",
							percentPosition: true,
							masonry: {
								columnWidth: ".c-portfolio-1-size"
							}
						} );
					} );

					// Isotope Filter
					if ( portfolio_1_filter.length ) {
						$( "a[data-cursor-portfolio-filter]", portfolio_1_filter ).on( "click", function ( e ) {
							e.preventDefault();
							var link_object = $( this );
							var link_value = link_object.data( "cursorPortfolioFilter" );
							var link_parent = link_object.parent( "li" );
							var link_nav = link_object.closest( "ul" );
							if ( link_value ) {
								portfolio_1_isotope.isotope( { filter: link_value } );
								$( "li", link_nav ).removeClass( "active" );
								link_parent.addClass( "active" );
							}
						});
					}
				}

				if ( portfolio_1_object.hasClass( "-js-popup" ) ) {
					$( ".c-portfolio-1-zoom", portfolio_1_object ).each( function() {
						var zoom_object = $( this );
						zoom_object.magnificPopup({
							type: 'image'
						});
					} );
				}
			} );
		}
	}

	// Init
	$( document ).ready( function() {
		setFitvids();
		setCountTo();
		setCountdown();
		setStellar();
		setOwlCarousel();
		setSweetScroll();
		setMagnificPopup();
		setAnimations();
		setBackgrounds();
		setLoading_1();
		setBacktop_1();
		setHeader_1();
		setHeader_2();
		setTab_1();
		setTab_2();
		setTab_3();
		setTab_4();
		setTab_5();
		setNav_1();
		setMap_1();
		setList_1();
		setBlog_1();
		setAlert_1();
		setAlert_2();
		setAlert_3();
		setAlert_4();
		setCounter_1();
		setGallery_1();
		setProgress_1();
		setAccordion_1();
		setCountdown_1();
		setPortfolio_1();
	} );

})( window, document, jQuery );
