System.register([], function (exports_1, context_1) {
    "use strict";
    var PI1;
    var __moduleName = context_1 && context_1.id;
    function area1(lightning) {
        return lightning * lightning * PI1;
    }
    exports_1("area1", area1);
    return {
        setters: [],
        execute: function () {
            exports_1("PI1", PI1 = 3.14);
        }
    };
});
