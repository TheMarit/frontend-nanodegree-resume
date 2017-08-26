

var bio = {
	"name": "Marit Oliemans",
	"role": "Web Developer",
	"contacts": {
		"mobile": "0611481252",
		"email": "maritoliemans@hotmail.com",
		"github": "TheMarit",
		"loc": "Amsterdam"
	},
	"bioPic": "images/me.jpg",
	"welcomeMessage": "Welcome to my resume",
	"skills": ["Javascript", "HTML", "CSS"]
	
};

var education = {
	"schools":[
	{
		"name": "Antonius",
		"city": "kudelstaart",
		"dates": 2005,
		"url": "https://rkantonius.nl/"
	},
	{
		"name": "Alkwin",
		"city": "Uithoorn",
		"dates": 2011,
		"url": "https://alkwin.mwp.nl/"
	}
	],
	"onlineCourses": [
	{
		"title": "The Webdeveloper Bootcamp",
		"school": "Udemy",
		"dates": 2017,
		"url": "https://www.udemy.com/the-web-developer-bootcamp"
	},
	{
		"title": "Front edn Nanodegree",
		"school": "Udacity",
		"dates": 2017,
		"url": "https://www.udacity.com"
	}
	]
}


var work = {
	"jobs": [
		{
			"employer": "cad2reality",
			"title": "3D-printing specialist",
			"dates": "April 2015 - Future",
			"loc": "Kudelstaart",
			"description": "Cad2reality is a Full-Color 3D printing company in the Netherlands, specialized in complex structures like offshore platforms. I work as a 3D modeller and 3d printer operator."
		},
		{
			"employer": "AuPair in America",
			"title": "AuPair for bradbury family",
			"dates": "March 2013 - March 2015",
			"loc": "Beverly, MA",
			"description": "I lived in the United States for two years while working as a nanny for two kids. I studied part time in the US with courses in photography and google sketchup."
		}
	]
};

var projects = {
	"projects": [
		{
		"title": "sample project 1",
		"dates": "2014",
		"description": "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
		"images": ["images/2.jpg","images/1.jpg"]
		},
		{
		"title": "sample project 2",
		"dates": "2015",
		"description": "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
		"images": ["images/2.jpg","images/1.jpg"]
		}
	]	
}



var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(bioPic);
var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(welcomeMessage);



if (bio.skills) {
	$("#header").append(HTMLskillsStart);
	for(var i = 0; i < bio.skills.length; i++){
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

function displayWork(){

for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var empl = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var loc = HTMLworkLocation.replace("%data%", work.jobs[job].loc);
	var desc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(empl + title);
	$(".work-entry:last").append(dates + loc + desc);
}

}

displayWork();

var mobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
$("#topContacts").prepend(mobile);
var github = HTMLgithub.replace('%data%', bio.contacts.github);
$("#topContacts").prepend(github);
var email = HTMLemail.replace('%data%', bio.contacts.email);
$("#topContacts").prepend(email);
var loc = HTMLlocation.replace('%data%', bio.contacts.loc);
$("#topContacts").prepend(loc);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

$("#main").append(internationalizeButton);


projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var title = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var dates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var desc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(title + dates + desc);
		
		for (img in projects.projects[project].images) {
			var image = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
			$(".project-entry:last").append(image)
		}
	}
}

projects.display()
