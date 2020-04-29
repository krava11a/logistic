define(function () {
    return function (tableId, url, columns) {
        return {
            rows: [
                {
                    view: 'toolbar',
                    cols: [
                        {
                            view: 'button',
                            label: 'Add',
                            click: function () {
                                var markDT = $$(tableId);
                                var id = markDT.add({});
                                markDT.editRow(id);
                            }
                        }
                    ]
                },
                {
                    id: tableId,
                    view: 'datatable',
                    columns: columns,
                    datafetch: 10,
                    url: url,
                    save: url,
                    editable: true,
                    autoWidth: true,
                    autoHeigth: true,
                    pager: tableId + 'Pager',
                    on: {
                        onItemClick: function (id) {
                            var column = this.config.columns.find(function (col) {
                                return col.id === id.column
                            });

                            var parentTable = this;

                            if (column.dialogUrl) {
                                require([column.dialogUrl], function (dialogPage) {
                                    webix.ui({
                                        view: "window",
                                        head: "Choose an item",
                                        width: 400,
                                        height: 400,
                                        position: 'center',
                                        modal: true,
                                        body: dialogPage,
                                        parentTable: parentTable,
                                        cell: id,
                                    }).show();
                                })
                            }


                        }
                    }


                },
                {
                    view: 'pager',
                    id: tableId + 'Pager',
                    size: 10,
                    group: 10,
                    template: '{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}'

                }
            ]
        }
    }
});