define(function () {
   return function (tableId, url, columns) {
       return{
           rows: [
               {
                   view: "toolbar",
                   cols: [
                       {
                           view: "button",
                           label: "Add",
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
                   view: "datatable",
                   columns: columns,
                   datafetch:3,
                   url: url,
                   save: url,
                   editable: true,
                   autoWidth: true,
                   autoHeigth: true,
                   pager: "pagerMarkDT",


               },
               {
                   view: "pager",
                   id:"pagerMarkDT",
                   size: 3,
                   group: 3,
                   template: "{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}"

               }
           ]
       }
   }
});