define(['component/listPage','collections/marks'], function (listPage, marks) {
    return listPage(
        'mpdelDatatable',
        'resource->/api/model',
        [
            {id: 'name', editor: 'text'},
            {id: 'mark', editor: 'combo', options:marks}

        ]
    );
});