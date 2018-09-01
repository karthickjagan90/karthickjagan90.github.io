
var bio = {
	"name" : "J karthick",
	"role" : "Front End Developer ",
	"contacts" : {
		"mobile" : "8637421891",
		"email" : "karthick@gmail.com",
		"github" : "https://github.com/karthickjagan90",
		"twitter" : "https://twitter.com/karthick Jagan@karthickjagan04",
		/*"linkedin" : "https://es.linkedin.com/in/josemiguellopezbayona",*/
		"location" : "Chennai"
	},
	"welcomeMessage" : "Welcome to my first Javascript-created page",
	"skills" : [ "C/basics C++", "basics python", "Javascript", "html","css","jquery","awesomeness"],
	"bioPic" : "/home/karthickj/Desktop/final resume project/images/55 001_opt.jpg"
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = addHyperLink(HTMLemail,bio.contacts.email,bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedGitHub = addHyperLink(HTMLgithub,bio.contacts.github,"karthickjagan90");
	$("#topContacts").append(formattedGitHub);
	$("#footerContacts").append(formattedGitHub);

	var formattedTwitter = addHyperLink(HTMLtwitter,bio.contacts.twitter, "Jagan@karthickjagan04");
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

	/*var formattedLinkedIn = addHyperLink(HTMLlinkedIn,bio.contacts.linkedin, "José Miguel López Bayona");
	$("#topContacts").append(formattedLinkedIn);
	$("#footerContacts").append(formattedLinkedIn);*/

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);



	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}


var work = {
	"jobs": [
		{
			"employer" : "Mirror Technologies Pvt Ltd",
			"title" : "Front end web developer",
			"dates" : "Jan 2016 - jan 2019",
			"description" : "I was who create courses inside the platform and I help with technical support"
		},
		{
			"employer" : "TNEB",
			"title" : "Graduate Apprentice",
			"dates" : "July 2014 - July 2015",
			
		}
	],
	display() {
		if (work.jobs.length > 0) {
			for (job in work.jobs) {
				//Div para work experiences
				$("#workExperience").append(HTMLworkStart);
				//Unir el employer y el nombre del trabajo
				var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
				var concattedEmployerTitle = formattedEmployer + formattedTitle;
				$(".work-entry:last").append(concattedEmployerTitle);

				var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				$(".work-entry:last").append(formattedDates);
				
				var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
				$(".work-entry:last").append(formattedDescription);
			}
		}
	}
}


var projects = {
	"projects": [
		{
			"title" : "Java script based Resume creation",
			"dates" : "Jan 2017 - February 2018",
			"description" : "",
			"url" : "",
			"images" : ""
		},
		{
			"title" : "Java script using Drumkit and clock",
			"dates" : "may 2018 - Dec 2019",
			"description" : "Personal website like this but by the static way, with HTML5 and CSS only.",
			"url" : "",
			"images" : ""
		}
	],
	display() {
		if (projects.projects.length > 0) {
			for (project in projects.projects) {
				$("#projects").append(HTMLprojectStart);

				//var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				var formattedTitle = addHyperLink(HTMLprojectTitle, projects.projects[project].url, projects.projects[project].title)
				$(".project-entry:last").append(formattedTitle);

				var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				$(".project-entry:last").append(formattedDates);

				var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
				$(".project-entry:last").append(formattedDescription);

				if (projects.projects[project].images.length > 0) {
					for (image in projects.projects[project].images) {
						var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
						$(".project-entry:last").append(formattedImage);
					}
				}		
			}
		}
	}
}


var education = {
	"schools": [
		{
			"name" : "P.A Vidhya Bhavan Hrc.school",
			"location" : "Karur",
			"standard" : "SSLC",
			"board" : ["state board"],
			"dates" : 2006,
			"url" : ""
		},
		{
			"name" : "P.A Vidhya Bhavan Hrc.school",
			"location" : "karur",
			"standard" : "HSC",
			"majors" : ["Computer Science"],
			"dates" : 2008,
			"url" : ""
		},
		{
			"name" : "Sns College of Engineering",
			"location" : "coimbatore",
			"degree" : "Engineer",
			"majors" : ["Electrical Engineer"],
			"dates" : 2012-2016,
			"url" : ""
		}
		
	]
	,
	"onlineCourses": [
		
		{
			"title" : "How to use Git and Github",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "https://www.udacity.com/course/ud775"
		},
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "http://www.udacity.com/course/ud804"
		}
	],
	display() {
		if (education.schools.length > 0) {
			$("#education").append(HTMLschoolStart);

			for (school in education.schools) {
				if (!education.schools[school].url) {
					var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
				}else{
					var formattedName = addHyperLink(HTMLschoolName,education.schools[school].url,education.schools[school].name);
				}				
				$(".education-entry:last").append(formattedName);

				var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				$(".education-entry:last").append(formattedLocation);

				var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				$(".education-entry:last").append(formattedDegree);

				var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				$(".education-entry:last").append(formattedDates);
				
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
				$(".education-entry:last").append(formattedMajor);
			}
		}
		
		if (education.onlineCourses.length > 0) {
			$('#education').append(HTMLonlineClasses);

			for (onlineCourse in education.onlineCourses) {
				$('#education').append(HTMLschoolStart);	

				var formattedOnlineTitle = addHyperLink(HTMLonlineTitle,education.onlineCourses[onlineCourse].url, education.onlineCourses[onlineCourse].title);
				//var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[onlineCourse].title);
				$('.education-entry:last').append(formattedOnlineTitle);

				var formattedonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[onlineCourse].school);
				$('.education-entry:last').append(formattedonlineSchool);

				var formattedonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[onlineCourse].dates);
				$('.education-entry:last').append(formattedonlineDates);

				//var formattedonlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[onlineCourse].url);
				//$('.education-entry:last').append(formattedonlineURL);
			}
		}		
	}
}


bio.display();
work.display();
projects.display();
education.display();


function addHyperLink(html,url,text){
    if (!text) { 
    	text = url; 
    }
    
    var formattedURL = html.replace("#", url);
    formattedURL = formattedURL.replace("%data%",text);
    
    return formattedURL;
}

function inName() {
  var name = bio.name.trim().split(" ");

  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
            name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
