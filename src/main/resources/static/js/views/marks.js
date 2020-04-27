define(function () {
   return {
       rows:[
           {
               view:"toolbar",
               cols:[
                   {
                       view: "button",
                       label:"Add",
                       click:function () {
                            var markDT = $$("markDatatable");
                            var id = markDT.add({});
                            markDT.editRow(id);
                       }
                   }
               ]
           },
           {
               id:"markDatatable",
               view:"datatable",
               columns:[
                   { id:"name",editor:"text"}
               ],
               url:"resource->/api/mark",
               save:"resource->/api/mark",
               editable:true,
               autoWidth:true,
               autoHeigth:true
           }
       ]


   }
});