define(function () {
    return {
        type: "line",
        height: 400,
        width: 1000,
        rows: [
            {
                view: "button",
                id: "my_button",
                value: "Main",
                click: function () {
                    routie('');
                }
            }, {
                view: 'list',
                data: [
                    'audi q7',
                    'bmw x7',
                    'uaz patriot'
                ]
            }]

    };
});