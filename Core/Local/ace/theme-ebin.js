define("ace/theme/ebin",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-ebin";
exports.cssText = ".ace-ebin .ace_gutter {\
background: #2F3129;\
color: #8F908A\
}\
.ace-ebin .ace_print-margin {\
width: 3px;\
background: #555651\
}\
.ace-ebin {\
background-color: #272822;\
color: #F8F8F2\
}\
.ace-ebin .ace_cursor {\
color: #F8F8F0\
}\
.ace-ebin .ace_marker-layer .ace_selection {\
background: #49483E\
}\
.ace-ebin.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #272822;\
}\
.ace-ebin .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-ebin .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #49483E\
}\
.ace-ebin .ace_marker-layer .ace_active-line {\
background: #202020\
}\
.ace-ebin .ace_gutter-active-line {\
background-color: #272727\
}\
.ace-ebin .ace_marker-layer .ace_selected-word {\
border: 1px solid #49483E\
}\
.ace-ebin .ace_invisible {\
color: #52524d\
}\
.ace-ebin .ace_entity.ace_name.ace_tag,\
.ace-ebin .ace_keyword,\
.ace-ebin .ace_meta.ace_tag,\
.ace-ebin .ace_storage {\
color: #F92672\
}\
.ace-ebin .ace_punctuation,\
.ace-ebin .ace_punctuation.ace_tag {\
color: #fff\
}\
.ace-ebin .ace_constant.ace_character,\
.ace-ebin .ace_constant.ace_language,\
.ace-ebin .ace_constant.ace_numeric,\
.ace-ebin .ace_constant.ace_other {\
color: #AE81FF\
}\
.ace-ebin .ace_invalid {\
color: #F8F8F0;\
background-color: #F92672\
}\
.ace-ebin .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #AE81FF\
}\
.ace-ebin .ace_support.ace_constant,\
.ace-ebin .ace_support.ace_function {\
color: #66D9EF\
}\
.ace-ebin .ace_fold {\
background-color: #A6E22E;\
border-color: #F8F8F2\
}\
.ace-ebin .ace_storage.ace_type,\
.ace-ebin .ace_support.ace_class,\
.ace-ebin .ace_support.ace_type {\
font-style: italic;\
color: #66D9EF\
}\
.ace-ebin .ace_entity.ace_name.ace_function,\
.ace-ebin .ace_entity.ace_other,\
.ace-ebin .ace_entity.ace_other.ace_attribute-name,\
.ace-ebin .ace_variable {\
color: #A6E22E\
}\
.ace-ebin .ace_variable.ace_parameter {\
font-style: italic;\
color: #FD971F\
}\
.ace-ebin .ace_string {\
color: #E6DB74\
}\
.ace-ebin .ace_comment {\
color: #75715E\
}\
.ace-ebin .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});                (function() {
                    window.require(["ace/theme/ebin"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            