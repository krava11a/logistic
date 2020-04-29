define(['component/listPage'], function (listPage) {
    return listPage(
        'markDatatable',
        'resource->/api/mark',
        [{id: 'name', editor: 'text'}]
    );
});