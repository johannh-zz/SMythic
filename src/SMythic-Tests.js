define("amber-smythic/SMythic-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('SMythic-Tests');
$core.packages["SMythic-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["SMythic-Tests"].transport = {"type":"amd","amdNamespace":"amber-smythic"};

$core.addClass('SMythicTest', $globals.TestCase, [], 'SMythic-Tests');

});
