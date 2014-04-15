$(document).ready(
		function() {
			var MyBrowserProfileApp = {};
			MyBrowserProfileApp.myProfileData = data;
			/* creating vertical tab menu */
			MyBrowserProfileApp.createTabs = function() {
				/*
				 * format <div id="tabs"> <ul id="bio-navlist"> <li><a
				 * href="#id"> 1</a></li> </ul> <div id="id"> <h2> heading 1</h2>
				 * <img src="images/01.jpg"> </img> <p>Proin elit arcu, rutrum
				 * commodo, vehicula tempus, commodo a, risus. Curabitur nec
				 * arcu. Donec sollicitudin mi sit amet mauris. Nam elementum
				 * quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris
				 * dapibus lacus auctor risus. Aenean tempor ullamcorper leo.
				 * Vivamus sed magna quis ligula eleifend adipiscing. Duis orci.
				 * Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis
				 * aliquam molestie erat. Ut et mauris vel pede varius
				 * sollicitudin. Sed ut dolor nec orci tincidunt interdum.
				 * Phasellus ipsum. Nunc tristique tempus lectus.</p> </div>
				 */
				for ( var i in this.myProfileData) {
					var fullName = this.myProfileData[i].firstName + " "
							+ this.myProfileData[i].lastName + "    ";
					var imgPath = this.myProfileData[i].picture;
					var biodataText = this.myProfileData[i].bio;
					var biodataId = this.myProfileData[i].id;
					/* add to ul */
					$("#bio-navlist").append(
							" <li> <a href=#" + biodataId + "> " + fullName
									+ "</a> </li>");

					/* creat a new div with subheading, img and content */
					$("#tabs").append(
							" <div id=" + biodataId + ">  <img src=" + imgPath
									+ "> </img> <h2> " + fullName
									+ "</h2> <p> " + biodataText
									+ "</p> </div> ");
				}
				$("#tabs").tabs().addClass(
						"ui-tabs-vertical ui-tabs-nav ui-helper-clearfix");
				// $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass(
				// "ui-corner-left" );

			}
			/*
			 * Creating accordion menu and populating the content dynamically
			 * Following is the format of each menu item. <h3>Section 1</h3>
			 * <div> <h6> sub heading </h6> <img src= "images/01.jpg"> </img>
			 * <p> </p> </div>
			 */
			MyBrowserProfileApp.createAccordion = function() {
				for ( var i in this.myProfileData) {
					var fullname = this.myProfileData[i].firstName
							+ this.myProfileData[i].lastName;
					var imgPath = this.myProfileData[i].picture;
					var biodataText = this.myProfileData[i].bio;
					$("#accordion").append(" <h3> " + fullname + "</h3>")
							.append(
									"<div> <h3> " + fullname
											+ "</h3> <img src=" + imgPath
											+ " </img> <p>" + biodataText
											+ " </p> </div>");
				}
				$("#accordion").accordion();
				$("#accordion").css("display","none");
			}
			MyBrowserProfileApp.createAccordion();
			MyBrowserProfileApp.createTabs();

			enquire.register(
					"screen and (max-width: 1120px)",
					{
						// OPTIONAL
						// If supplied, triggered when a media query matches.
						match : function() {
							// alert("Match called ");
							$("#accordion").css("display", "inline-block");
							$("#tabs").css("display", "none");
						},

						// OPTIONAL
						// If supplied, triggered when the media query
						// transitions
						// *from a matched state to an unmatched state*.
						unmatch : function() {
							$("#tabs").css("display", "inline-block");
							$("#accordion").css("display", "none");

						},

						// OPTIONAL
						// If supplied, triggered once, when the handler is
						// registered.
						setup : function() {
							// MyBrowserProfileApp.createTabs();
							// alert("setup called ");
						},

						// OPTIONAL, defaults to false
						// If set to true, defers execution of the setup
						// function
						// until the first time the media query is matched
						deferSetup : true,

						// OPTIONAL
						// If supplied, triggered when handler is unregistered.
						// Place cleanup code here
						destroy : function() {

							// alert("destroy called ");
						}
					});
		});