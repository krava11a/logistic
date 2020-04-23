define(function () {
    return {
        type: "line",
        height: 400,
        width: 600,
        rows: [
            {
                view:"button",
                value:"Cars",
                click:function () {
                    routie('cars');
                }
            },
            {template: "Row 1"},
            {template: "Row 1"},
            {
                cols: [
                    {template: "Row 1"},
                    {template: "Row 1"}
                ]
            }
        ]
    }
});