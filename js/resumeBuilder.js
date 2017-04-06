const bio = {
    name: 'Richard Kalehoff',
    role: 'Senior Content Developer',
    contacts: {
        mobile: '954-123-4567',
        email: 'richardkalehoff@gmail.com',
        github: 'richardkalehoff',
        twitter: '@richardkalehoff',
        location: 'Mountain View',
    },
    welcomeMessage: 'Howdy',
    skills: ['HTML', 'CSS', 'JavaScript'],
    biopic: '../images/fry.jpg',
    display: function () {
        $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
        $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));
        $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
        $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

        $('#topContacts, #footerContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
        $('#topContacts, #footerContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
        $('#topContacts, #footerContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
        $('#topContacts, #footerContacts').append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
        $('#topContacts, #footerContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));


        if (bio.skills) {
            $('#header').append(HTMLskillsStart);
            $('#skills').append(bio.skills.map(skill => HTMLskills.replace('%data%', skill)));
        }
    },
};

const education = {
    schools: [
        {
            name: 'Belhaven University',
            location: 'Jackson, MS',
            degree: 'Bachelor of Science',
            majors: ['Computer Science'],
            dates: '2003-2007',
            url: 'http://www.belhaven.edu/',
        },
        {
            name: 'University of Florida',
            location: 'Gainesville, FL',
            degree: 'Master of Arts',
            majors: ['Mass Communications'],
            dates: '2013-2014',
            url: 'http://www.ufl.edu/'
        },
    ],
    onlineCourses: [
        {
            title: 'Front-End Web Developer Nanodegree',
            school: 'Udacity',
            dates: '2016-2017',
            url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
        }
    ],
    display: function () {},
};

const work = {
    jobs: [
        {
            employer: 'EE International',
            title: 'Senior Web Engineer',
            location: 'Fort Lauderdale, FL',
            dates: '2008-2015',
            description: 'Cupcake ipsum dolor. Sit amet candy canes chupa chups apple pie tart oat cake lollipop. Croissant tiramisu cupcake.'
        },
        {
            employer: 'Udacity',
            title: 'Course Developer',
            location: 'Mountain View, CA',
            dates: '2015-2016',
            description: 'Powder soufflé sesame snaps cookie cheesecake macaroon muffin marzipan. Dessert gummies sesame snaps muffin donut cupcake jelly sweet lollipop. Pastry jelly-o gingerbread cake marzipan donut cake cheesecake. Sesame snaps soufflé bonbon pie.'
        },
        {
            employer: 'Udacity',
            title: 'Senior Content Developer',
            location: 'Mountain View, CA',
            dates: '2016-present',
            description: 'Gummies tootsie roll candy canes donut. Tart tiramisu pie apple pie. Biscuit pie candy cotton candy sweet sugar plum bear claw. Fruitcake candy dessert marshmallow gummi bears.'
        },
    ],
    display: function () {},
};

const projects = {
    projects: [
        {
            title: 'Sample Project 1',
            dates: '2009-2009',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            images: ['../images/197x148.gif']
        },
        {
            title: '2nd Project',
            dates: '2013-2014',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            images: ['../images/197x148.gif']
        }
    ],
    display: function () {},
};

bio.display();
