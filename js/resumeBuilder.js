var bio = {
  "name": "Craig Zeise",
  "role": "Software Engineer",
  "contacts": {
    "mobile": "555-555-5555",
    "email": "craig.zeise@gmail.com",
    "github": "czeise",
    "location": "Minneapolis, MN"
  },
  "biopic": "images/gravatar.jpeg",
  "welcomeMessage": "Hello!",
  "skills": [
    "Software Engineering", "Object Oriented Design", "Ruby", "HTML", "CSS",
    "Javascript", "Git"
  ],
  "display": function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedPic);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);

      bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#header").append(formattedSkill);
      });
    }
  }
};

bio.display();

var work = {
  "jobs": [
    {
      "employer": "Medicom Health Interactive",
      "title": "Quality Assurance Manager",
      "location": "Minneapolis, MN",
      "dates": "November 2014 - Present",
      "description": "As MHI grows, my QA Manager role has expanded. I am responsible for QA policies and direction along with influencing our content, creative, and development processes to maximize efficiency while maintaining a high level of quality. I define our test automation strategy and oversee its implementation. Additionally, I manage our QA staff and testing schedule, and oversee our launch process."
    },
    {
      "employer": "Medicom Health Interactive",
      "title": "Technical Designer & Quality Assurance Manager",
      "location": "Minneapolis, MN",
      "dates": "November 2011 - November 2014",
      "description": "I collaborate with the content team, the creative team and the developers to develop a technical design to be implemented by the developers.  This part of my job is like that of a Software Architect for small scale projects.  The other part of my job is managing our QA process.  With these two roles I find myself involved with the development process from start to finish and responsible for both the technical specifications of the program and verifying that they've been met."
    },
    {
      "employer": "General Dynamics",
      "title": "Senior Software Engineer",
      "location": "Bloomington, MN",
      "dates": "May 2006 - November 2011",
      "description": "I worked on the Multi-INT Analysis and Archive System (MAAS).  This system is a suite of software that takes the plethora of data collected by unmanned aerial vehicles and turns it into useful multimedia reports that can be utilized by the decision makers of the US military.  I was primarily responsible for adding features and fixing issues with the program.  Additionally I provided technical support to our user base."
    }
  ],
  "display": function() {
    work.jobs.forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;

      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);

      $(".work-entry:last").append(formattedWorkDates);
      $(".work-entry:last").append(formattedWorkLocation);

      var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);

      $(".work-entry:last").append(formattedWorkDescription);
    });
  }
};

work.display();

var projects = {
  "projects": [
    {
      "title": "Survivr",
      "dates": "March 2016",
      "description": "The Survivr project simulates a \"Survivor\" like game with many contestants, tribes, and challenges. I used test driven development to ensure that my project met all of the project requirements. The colorization of the terminal text is handled by a \"Colorizr\" gem that I created using metaprogramming to add methods to the <code>String</code> class that change the displayed color of text in the terminal. This project required a solid understanding of object oriented design to complete. I used Ruby's \"duck typing\" ability to easily handle objects from different classes that behaved the same at times.",
      "images": ["images/197x148.gif", "images/197x148.gif"]
    },
    {
      "title": "Portfolio Site",
      "dates": "October 2016",
      "description": "",
      "images": []
    }
  ],
  "display": function() {
    projects.projects.forEach(function(project) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
      var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

      $(".project-entry:last").append(formattedTitle);
      $(".project-entry:last").append(formattedDates);
      $(".project-entry:last").append(formattedDescription);

      project.images.forEach(function(image) {
        var formattedImage = HTMLprojectImage.replace("%data%", image);

        $(".project-entry:last").append(formattedImage);
      });
    });
  }
};

projects.display();

var education = {
  "schools": [
    {
      "name": "University of Minnesota",
      "location": "Twin Cities, MN",
      "degree": "M.S.",
      "majors": ["Computer Science"],
      "dates": "2009",
      "url": "https://www.cs.umn.edu/academics/graduate/ms-mcs"
    },
    {
      "name": "Buena Vista University",
      "location": "Storm Lake, IA",
      "degree": "B.S.",
      "majors": ["Computer Science", "Mathematics"],
      "dates": "2003",
      "url": "http://www.bvu.edu/academics/science/computer-science/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Ruby Programming Nanodegree",
      "school": "Udacity",
      "dates": "2016",
      "url": "https://www.udacity.com/"
    }
  ],
  "display": function() {
    education.schools.forEach(function(school) {
      $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", school.name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
      var formattedGraduationYear = HTMLschoolDates.replace("%data%", school.dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);

      $(".education-entry:last").append(formattedName + formattedDegree);
      $(".education-entry:last").append(formattedGraduationYear);
      $(".education-entry:last").append(formattedLocation);

      if (school.majors.length > 0) {
        // I'm joining my majors on " & " because I know I've got 2 at most in
        // my data. I could have this behave differently based on the length
        // of the array or something...but this is nice clean code :)
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors.join(" & "));
        $(".education-entry:last").append(formattedMajor);
      }

    });
  }
};

education.display();

$("#mapDiv").append(googleMap);
