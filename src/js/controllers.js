controllers.home = function(template, data, params){
    var content = templates[template]();
    util.render(
        'main-content',
        content
    );    
};

controllers.settings = function(template, data, params){
    var content = templates[template]();
    util.render(
        'main-content',
        content
    );    
};

controllers.textArea = function(template, data, params){
    var content = templates[template]();
    util.render(
        'main-content',
        content
    );    
};