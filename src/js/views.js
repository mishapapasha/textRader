function getView(controller, params, data){
    util.control(
        controller,
        params
    );
}

views.home = getView;

views.settings = getView;

views.textArea = getView;

