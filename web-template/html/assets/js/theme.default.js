(function ( window, document, $, undefined ) {
	"use strict";

	// Functions
	function setElements() {
		var elements_nav = $( ".elements-nav" );
		if ( elements_nav.length ) {
			var sections = $( ".elements-section" );
			var offset_start = $( ".c-header-1.-sticky" ).height() || 0;
			var offset_nav = elements_nav.offset().top;

			// Nav ScrollSpy
			$( "body" ).scrollspy( {
				target: ".elements-nav",
				offset: offset_start
			} );

			// Nav First Active
			$( "> ul > li:first", elements_nav ).each( function() {
				var first = $( this );
				$( "> a", first ).addClass( "active" );
				$( "> ul > li:first > a", first ).addClass( "active" );
			} );

			// Nav Click Animate
			$( "a", elements_nav ).on( "click", function( e ) {
				e.preventDefault();

				var link = $( this );
				var id = link.attr( "href" );
				var target = sections.filter( id );

				if ( target.length ) {
					var offset = target.offset().top - offset_start;
					$( "body, html" ).animate( { scrollTop: offset }, 800 );
				}
			} );

			// Nav Sticky
			var point_1 = new Waypoint( {
				element: sections[0],
				handler: function( direction ) {
					if ( direction === "down" ) {
						elements_nav.addClass( "-sticky" );
						elements_nav.css( "top", offset_start );
					} else {
						elements_nav.removeClass( "-sticky" );
						elements_nav.removeAttr( "style" );
					}
				},
				offset: offset_start
			} );

			var point_2 = new Waypoint( {
				element: $( ".c-footer-1" )[0],
				handler: function( direction ) {
					if ( direction === "down" ) {
						elements_nav.removeClass( "-sticky" ).addClass( "-sticky-bottom" );
						elements_nav.css( "top", function() {
							var offset_footer = $( ".c-footer-1" ).offset().top;
							var nav_height = elements_nav.outerHeight();
							var offset = ( offset_footer - offset_nav ) - nav_height;
							return offset;
						} );
					} else {
						elements_nav.removeClass( "-sticky-bottom" ).addClass( "-sticky" );
						elements_nav.css( "top", offset_start );
					}
				},
				offset: function() {
					return offset_start + elements_nav.outerHeight();
				}
			} );

			// Update Sticky
			$( window ).on( "activate.bs.scrollspy", function () {
				Waypoint.refreshAll();
			});
		}
	}
	function setElementsCharts () {
		var elements_charts = $( ".section-charts" );
		if ( elements_charts.length ) {
			// Line
			var chart_line_ctx = document.getElementById( "example_chart_line" );
			var chart_line = new Chart( chart_line_ctx, {
				type: "line",
				data: {
					labels: [ "January", "February", "March", "April", "May", "June", "July" ],
					datasets: [
						{
							label: "Red",
							data: [ 333, 223, 280, 445, 166, 7, 60 ],
							backgroundColor: "rgba(255, 99, 132, 0.2)",
							borderColor: "rgba(255, 99, 132, 1)",
							borderWidth: 1
						},
						{
							label: "Blue",
							data: [ 279, 439, 379, 268, 211, 288, 442 ],
							backgroundColor: "rgba(54, 162, 235, 0.2)",
							borderColor: "rgba(54, 162, 235, 1)",
							borderWidth: 1
						},
						{
							label: "Yellow",
							data: [ 17, 220, 262, 311, 169, 238, 496 ],
							backgroundColor: "rgba(255, 206, 86, 0.2)",
							borderColor: "rgba(255, 206, 86, 1)",
							borderWidth: 1
						},
						{
							label: "Green",
							data: [ 251, 25, 233, 396, 105, 368, 298 ],
							backgroundColor: "rgba(75, 192, 192, 0.2)",
							borderColor: "rgba(75, 192, 192, 1)",
							borderWidth: 1
						},
						{
							label: "Purple",
							data: [ 360, 53, 80, 69, 35, 463, 134 ],
							backgroundColor: "rgba(153, 102, 255, 0.2)",
							borderColor: "rgba(153, 102, 255, 1)",
							borderWidth: 1
						},
						{
							label: "Orange",
							data: [ 288, 170, 414, 379, 38, 376, 363 ],
							backgroundColor: "rgba(255, 159, 64, 0.2)",
							borderColor: "rgba(255, 159, 64, 1)",
							borderWidth: 1
						}
					]
				},
				options: {
					scales: {
						yAxes: [
							{ ticks: { beginAtZero: true } }
						]
					}
				}
			} );

			// Bar
			var chart_bar_ctx = document.getElementById( "example_chart_bar" );
			var chart_bar = new Chart( chart_bar_ctx, {
				type: "bar",
				data: {
					labels: [ "Red", "Blue", "Yellow", "Green", "Purple", "Orange" ],
					datasets: [
						{
							label: "# of Votes",
							data: [ 12, 19, 3, 5, 2, 3 ],
							backgroundColor: [
								"rgba(255, 99, 132, 0.2)",
								"rgba(54, 162, 235, 0.2)",
								"rgba(255, 206, 86, 0.2)",
								"rgba(75, 192, 192, 0.2)",
								"rgba(153, 102, 255, 0.2)",
								"rgba(255, 159, 64, 0.2)"
							],
							borderColor: [
								"rgba(255, 99, 132, 1)",
								"rgba(54, 162, 235, 1)",
								"rgba(255, 206, 86, 1)",
								"rgba(75, 192, 192, 1)",
								"rgba(153, 102, 255, 1)",
								"rgba(255, 159, 64, 1)"
							],
							borderWidth: 1
						}
					]
				},
				options: {
					scales: {
						yAxes: [
							{ ticks: { beginAtZero: true } }
						]
					}
				}
			} );

			// Radar
			var chart_radar_ctx = document.getElementById( "example_chart_radar" );
			var chart_radar = new Chart( chart_radar_ctx, {
				type: "radar",
				data: {
					labels: [ "Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running" ],
					datasets: [
						{
							label: "First",
							backgroundColor: "rgba(179,181,198,0.2)",
							borderColor: "rgba(179,181,198,1)",
							pointBackgroundColor: "rgba(179,181,198,1)",
							pointBorderColor: "#fff",
							pointHoverBackgroundColor: "#fff",
							pointHoverBorderColor: "rgba(179,181,198,1)",
							data: [ 65, 59, 90, 81, 56, 55, 40 ]
						},
						{
							label: "Second",
							backgroundColor: "rgba(255,99,132,0.2)",
							borderColor: "rgba(255,99,132,1)",
							pointBackgroundColor: "rgba(255,99,132,1)",
							pointBorderColor: "#fff",
							pointHoverBackgroundColor: "#fff",
							pointHoverBorderColor: "rgba(255,99,132,1)",
							data: [ 28, 48, 40, 19, 96, 27, 100 ]
						}
					]
				},
			} );

			// Polar Area
			var chart_polar_ctx = document.getElementById( "example_chart_polar" );
			var chart_polar = new Chart( chart_polar_ctx, {
				type: "polarArea",
				data: {
					labels: [ "Red", "Green", "Yellow", "Grey", "Blue" ],
					datasets: [
						{
							label: "My dataset",
							data: [ 11, 16, 7, 3, 14 ],
							backgroundColor: [ "#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB" ]
						}
					]
				}
			} );

			// Pie
			var chart_pie_ctx = document.getElementById( "example_chart_pie" );
			var chart_pie = new Chart( chart_pie_ctx, {
				type: "pie",
				data: {
					labels: [ "Red", "Blue", "Yellow" ],
					datasets: [
						{
							data: [ 300, 50, 100 ],
							backgroundColor: [ "#FF6384", "#36A2EB", "#FFCE56" ],
							hoverBackgroundColor: [ "#FF6384", "#36A2EB", "#FFCE56" ]
						}
					]
				}
			} );

			// Doughnut
			var chart_doughnut_ctx = document.getElementById( "example_chart_doughnut" );
			var chart_doughnut = new Chart( chart_doughnut_ctx, {
				type: "doughnut",
				data: {
					labels: [ "Red", "Blue", "Yellow" ],
					datasets: [
						{
							data: [ 300, 50, 100 ],
							backgroundColor: [ "#FF6384", "#36A2EB", "#FFCE56" ],
							hoverBackgroundColor: [ "#FF6384", "#36A2EB", "#FFCE56" ]
						}
					]
				}
			} );

			// Bubble
			var chart_bubble_ctx = document.getElementById( "example_chart_bubble" );
			var chart_bubble = new Chart( chart_bubble_ctx, {
				type: "bubble",
				data: {
					datasets: [
						{
							label: "First",
							data: [
								{ x: 20, y: 30, r: 15 },
								{ x: 40, y: 10, r: 10 },
								{ x: 47, y: 27, r: 4 },
								{ x: 48, y: 37, r: 3 },
								{ x: 12, y: 11, r: 13 },
								{ x: 32, y: 12, r: 11 },
								{ x: 45, y: 8, r: 15 },
								{ x: 43, y: 21, r: 13 },
								{ x: 44, y: 23, r: 4 },
								{ x: 15, y: 16, r: 18 }
							],
							backgroundColor: "#FF6384",
							hoverBackgroundColor: "#FF6384"
						}
					]
				}
			} );
		}
	}
	function setElementsAnimations () {
		var elements_animations = $( ".section-animations" );
		if ( elements_animations.length ) {
			$( "#variant-1-1 .row .c-button-1", elements_animations ).on( "click", function( e ) {
				e.preventDefault();
				var element = $( this ).siblings( ".animated" );
				var animation = element.data( "cursorExampleAnimation" ) || "fadeIn";
				element.addClass( animation );
				setTimeout( function() {
					element.removeClass( animation );
				}, 1000 );
			} );
		}
	}
	function setContactForm_1() {
		var contact_form_1 = $( "#contact-form-1" );
		if ( contact_form_1.length ) {
			contact_form_1.on( "submit", function( e ) {
				e.preventDefault();

				// Reset All Errors
				$( ".-is-error", contact_form_1 ).removeClass( "-is-error" );

				// Get Form Data
				var formData = {
					'name' : $( 'input[name="contact-name"]', contact_form_1 ).val(),
					'surname' : $( 'input[name="contact-surname"]', contact_form_1 ).val(),
					'email' : $( 'input[name="contact-email"]', contact_form_1 ).val(),
					'phone' : $( 'input[name="contact-phone"]', contact_form_1 ).val(),
					'message' : $( 'textarea[name="contact-message"]', contact_form_1 ).val()
				};

				// Post Form Data
				$.ajax( {
					type : "POST",
					url  : "includes/contact-form-1.php",
					data : formData,
					dataType : "json",
					encode : true
				} ).done( function ( data ) {
					if ( !data.success ) {
						if ( data.errors.name ) {
							$( 'input[name="contact-name"]', contact_form_1 ).addClass( "-is-error" );
						}
						if ( data.errors.surname ) {
							$( 'input[name="contact-surname"]', contact_form_1 ).addClass( "-is-error" );
						}
						if ( data.errors.email ) {
							$( 'input[name="contact-email"]', contact_form_1 ).addClass( "-is-error" );
						}
						if ( data.errors.phone ) {
							$( 'input[name="contact-phone"]', contact_form_1 ).addClass( "-is-error" );
						}
						if ( data.errors.message ) {
							$( 'textarea[name="contact-message"]', contact_form_1 ).addClass( "-is-error" );
						}
					} else {
						contact_form_1.prepend( '<div class="c-alert-1 -style-default -color-success">' + data.message + '</div>' );
						contact_form_1[0].reset();
						setTimeout( function() {
							$( ".c-alert-1", contact_form_1 ).remove();
						}, 3000 );
					}
				} ).fail( function ( data ) {
					console.log( data );
				} );
			} );
		}
	}

	// Init
	$( document ).ready( function() {
		setElements();
		setElementsCharts();
		setElementsAnimations();
		setContactForm_1();
	} );

})( window, document, jQuery );
