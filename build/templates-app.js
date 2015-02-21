angular.module('templates-app', ['store/create.tpl.html', 'store/store.tpl.html']);

angular.module("store/create.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("store/create.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"modal-header texst-center\">\n" +
    "        <h3>Create New Store</h3>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body\">\n" +
    "        <div class=\"modal-body\">\n" +
    "            <form action=\"#\" class=\"form-horizontal\" name=\"createStore\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"col-sm-3 control-label\">Keyword</label>\n" +
    "                    <div class=\"col-sm-8\">\n" +
    "                        <input type=\"text\" class=\"form-control\" ng-model=\"store.data.keyword\" required>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"col-sm-3 control-label\">Name</label>\n" +
    "                    <div class=\"col-sm-8\">\n" +
    "                        <input type=\"text\" class=\"form-control\" ng-model=\"store.name\" required>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button class=\"btn btn-white\" ng-click=\"back()\" ng-disabled=\"isDisabled\"><i class=\"fa fa-angle-double-left\"></i></button>\n" +
    "        <button class=\"btn btn-primary\" ng-click=\"save()\" ng-disabled=\"createStore.$invalid\">Create</button>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("store/store.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("store/store.tpl.html",
    "<div class=\"col-lg-12\">\n" +
    "    <div class=\"modal-header text-center\">\n" +
    "        <h1>Welcome to Store Admin</h1>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"modal-body\">\n" +
    "        <h4 class=\"control-lable\">You can create new store</h4>\n" +
    "\n" +
    "        <div class=\"\">\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"create()\"><i class=\"fa fa-plus\"> Add New Store</i></button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
