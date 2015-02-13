define("amber-smythic/SMythic", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('SMythic');
$core.packages["SMythic"].innerEval = function (expr) { return eval(expr); };
$core.packages["SMythic"].transport = {"type":"amd","amdNamespace":"amber-smythic"};

$core.addClass('Mythic', $globals.Object, ['fateArray', 'focusArray', 'fActionArray', 'fSubjectArray', 'chaosFactor', 'gameDescrip', 'favourPoints', 'gameChart', 'fDown', 'fAcross', 'fNum', 'proxyObj'], 'SMythic');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
function $JsMythic(){return $globals.JsMythic||(typeof JsMythic=="undefined"?nil:JsMythic)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Mythic.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@fateArray"]=[[(50), (25), (10), (5), (5), (0), (0), (-20), (-20), (-40), (-40), (-55), (-65)], [(75), (50), (25), (15), (10), (5), (5), (0), (0), (-20), (-20), (-35), (-45)], [(90), (75), (50), (35), (25), (15), (10), (5), (5), (0), (0), (-15), (-25)], [(95), (85), (65), (50), (45), (25), (15), (10), (5), (5), (5), (-5), (-15)], [(100), (90), (75), (55), (50), (35), (20), (15), (10), (5), (5), (0), (-10)], [(105), (95), (85), (75), (65), (50), (35), (25), (15), (10), (10), (5), (-5)], [(110), (95), (90), (85), (80), (65), (50), (45), (25), (20), (15), (5), (0)], [(115), (100), (95), (90), (85), (75), (55), (50), (35), (25), (20), (10), (5)], [(120), (105), (95), (95), (90), (85), (75), (65), (50), (45), (35), (15), (5)], [(125), (115), (100), (95), (95), (90), (80), (75), (55), (50), (45), (20), (10)], [(130), (125), (110), (95), (95), (90), (85), (80), (65), (55), (50), (25), (10)], [(150), (145), (130), (100), (100), (95), (95), (90), (85), (80), (75), (50), (25)], [(170), (165), (150), (120), (120), (100), (100), (95), (95), (90), (90), (75), (50)]];
self["@proxyObj"]=$recv($JsMythic())._newValue_value_((0),(50));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Mythic)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09fateArray :=\x0a\x09\x09#(#( 50  25  10   5   5   0   0 -20 -20 -40 -40 -55 -65)\x0a\x09\x09  #( 75  50  25  15  10   5   5   0   0 -20 -20 -35 -45)\x0a\x09\x09  #( 90  75  50  35  25  15  10   5   5   0   0 -15 -25)\x0a\x09\x09  #( 95  85  65  50  45  25  15  10   5   5   5  -5 -15)\x0a\x09\x09  #(100  90  75  55  50  35  20  15  10   5   5   0 -10)\x0a\x09\x09  #(105  95  85  75  65  50  35  25  15  10  10   5  -5)\x0a\x09\x09  #(110  95  90  85  80  65  50  45  25  20  15   5   0)\x0a\x09\x09  #(115 100  95  90  85  75  55  50  35  25  20  10   5)\x0a\x09\x09  #(120 105  95  95  90  85  75  65  50  45  35  15   5)\x0a\x09\x09  #(125 115 100  95  95  90  80  75  55  50  45  20  10)\x0a\x09\x09  #(130 125 110  95  95  90  85  80  65  55  50  25  10)\x0a\x09\x09  #(150 145 130 100 100  95  95  90  85  80  75  50  25)\x0a\x09\x09  #(170 165 150 120 120 100 100  95  95  90  90  75  50)).\x0a\x0a\x09proxyObj := JsMythic newValue: 0 value: 50",
referencedClasses: ["JsMythic"],
//>>excludeEnd("ide");
messageSends: ["initialize", "newValue:value:"]
}),
$globals.Mythic);

$core.addMethod(
$core.method({
selector: "oddsDown:across:",
protocol: 'as yet unclassified',
fn: function (aDown,aAcross){
var self=this;
var out,baseProb;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
self["@fDown"]=aDown;
self["@fAcross"]=aAcross;
baseProb=$recv($recv(self["@fateArray"])._at_(aDown))._at_(aAcross);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
out=[(0), (0), (0)];
$recv(out)._at_put_((2),baseProb);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$1=$recv(baseProb).__gt_eq((5));
if($core.assert($1)){
$2=out;
$3=$recv($recv(baseProb).__slash((5)))._ceiling();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ceiling"]=1;
//>>excludeEnd("ctx");
$recv($2)._at_put_((1),$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
};
$4=$recv(baseProb).__lt_eq((95));
if($core.assert($4)){
var exNoProb;
$5=$recv(baseProb).__plus($recv($recv((100).__minus(baseProb)).__star((0.8))).__plus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
exNoProb=$recv($5)._ceiling();
exNoProb;
$recv(out)._at_put_((3),exNoProb);
};
$6=out;
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"oddsDown:across:",{aDown:aDown,aAcross:aAcross,out:out,baseProb:baseProb},$globals.Mythic)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDown", "aAcross"],
source: "oddsDown: aDown across: aAcross\x0a\x09\x22Look up the odds in the table, return a vector of probs of exceptional yes, yes, and no.\x0a\x09The remainder is exceptional no.\x22\x0a\x09| out baseProb |\x0a\x09fDown := aDown.\x0a\x09fAcross := aAcross.\x0a\x09baseProb := (fateArray at: aDown) at: aAcross.\x0a\x09out := #(0 0 0).\x0a\x09out at: 2 put: baseProb.\x0a\x09(baseProb >= 5) ifTrue: [\x0a\x09\x09out at: 1 put: (baseProb / 5) ceiling ].\x0a\x09( baseProb <= 95) ifTrue: [\x0a\x09\x09| exNoProb |\x0a\x09\x09exNoProb := (baseProb + ((100 - baseProb) * 0.8 + 1)) ceiling.\x0a\x09\x09out at: 3 put: exNoProb ].\x0a\x09^ out",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "at:put:", "ifTrue:", ">=", "ceiling", "/", "<=", "+", "*", "-"]
}),
$globals.Mythic);



$core.addClass('SMLog', $globals.Object, ['queryString', 'textBlocks'], 'SMythic');
$core.addMethod(
$core.method({
selector: "addText:",
protocol: 'as yet unclassified',
fn: function (plainText){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$receiver;
$recv(self["@textBlocks"])._add_(plainText);
$1=self["@queryString"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$2=$recv(self["@queryString"])._asJQuery();
$recv($2)._append_(plainText);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["append:"]=1;
//>>excludeEnd("ctx");
$3=$2;
$4=$recv($String())._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=1;
//>>excludeEnd("ctx");
$recv($3)._append_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["append:"]=2;
//>>excludeEnd("ctx");
$recv($2)._append_("<br/>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["append:"]=3;
//>>excludeEnd("ctx");
$5=$recv($2)._append_($recv($String())._cr());
$5;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addText:",{plainText:plainText},$globals.SMLog)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["plainText"],
source: "addText: plainText\x0a\x09textBlocks add: plainText.\x0a\x09queryString ifNotNil: [\x0a\x09\x09queryString asJQuery\x0a\x09\x09\x09\x22Should escape the text.\x22\x0a\x09\x09\x09append: plainText;\x0a\x09\x09\x09append: String cr;\x0a\x09\x09\x09append: '<br/>';\x0a\x09\x09\x09append: String cr ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["add:", "ifNotNil:", "append:", "asJQuery", "cr"]
}),
$globals.SMLog);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SMLog.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@textBlocks"]=$recv($Array())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SMLog)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09textBlocks := Array new",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.SMLog);

$core.addMethod(
$core.method({
selector: "initializeWithQuery:",
protocol: 'as yet unclassified',
fn: function (aQueryString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._initialize();
self["@queryString"]=aQueryString;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeWithQuery:",{aQueryString:aQueryString},$globals.SMLog)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aQueryString"],
source: "initializeWithQuery: aQueryString\x0a\x09\x22initialize with a given query string\x22\x0a\x09self initialize.\x0a\x09queryString := aQueryString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.SMLog);


$core.addMethod(
$core.method({
selector: "newWithQuery:",
protocol: 'as yet unclassified',
fn: function (aQueryString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._basicNew())._initializeWithQuery_(aQueryString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newWithQuery:",{aQueryString:aQueryString},$globals.SMLog.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aQueryString"],
source: "newWithQuery: aQueryString\x0a\x09^ self basicNew initializeWithQuery: aQueryString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeWithQuery:", "basicNew"]
}),
$globals.SMLog.klass);


$core.addClass('SMythic', $globals.Object, [], 'SMythic');
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1="#amber-with"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doAmberWith();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["click:"]=1;
//>>excludeEnd("ctx");
$recv("#jquery-append"._asJQuery())._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doJQueryAppend();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.SMythic)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09'#amber-with' asJQuery click: [ self doAmberWith ].\x0a\x09'#jquery-append' asJQuery click: [ self doJQueryAppend ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["click:", "asJQuery", "doAmberWith", "doJQueryAppend"]
}),
$globals.SMythic);

$core.addMethod(
$core.method({
selector: "doAmberWith",
protocol: 'action',
fn: function (){
var self=this;
var tag;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
tag=$recv($recv($HTMLCanvas())._onJQuery_("#output-list"._asJQuery()))._root();
$recv(tag)._with_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._li())._with_("Amber Web #with: added me!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doAmberWith",{tag:tag},$globals.SMythic)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doAmberWith\x0a\x09| tag |\x0a\x09tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.\x0a\x09tag with: [ :html | html li with: 'Amber Web #with: added me!' ]",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["root", "onJQuery:", "asJQuery", "with:", "li"]
}),
$globals.SMythic);

$core.addMethod(
$core.method({
selector: "doJQueryAppend",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asJQuery())._append_("<li>jQuery append added me!</li>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doJQueryAppend",{},$globals.SMythic)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doJQueryAppend\x0a\x09'#output-list' asJQuery append: '<li>jQuery append added me!</li>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:", "asJQuery"]
}),
$globals.SMythic);


$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.SMythic.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.SMythic.klass);

});
