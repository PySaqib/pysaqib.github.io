// Stores all the classnames for all specific routes

let routes = {};

routes['HOME'] = '.home-panel';
routes['PROJECTS'] = '.projects-panel';
routes['TESTIMONIALS'] = '.testimonial-panel';
routes['CONTACT'] = '.contact-panel';


// Entry point for the script
$(document).ready(()=>{
    
    // Setting trigger for nav-link
    $('.nav-link').on('click', (e)=> {
        setView(e.target.innerHTML);
    });

});

// Toggles screen on the right hand side
const setView = (view)=> {

    
    for (key in routes) {
        $(routes[key]).addClass('hide');
    }

    $(routes[view]).removeClass('hide');

}