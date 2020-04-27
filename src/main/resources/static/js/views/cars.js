define(['component/listPage'], function (listPage) {
    return listPage(
        "carsDatatable",
        "resource->/api/car",
        [{id: "name", editor: "text"}]
    );
});