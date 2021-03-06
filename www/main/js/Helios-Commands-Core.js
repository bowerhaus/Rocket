define("amber_core/Helios-Commands-Core", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('Helios-Commands-Core');
smalltalk.packages["Helios-Commands-Core"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('HLCommand', smalltalk.Object, ['input'], 'Helios-Commands-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "asActionBinding",
protocol: 'converting',
fn: function (){
var self=this;
function $HLBindingAction(){return smalltalk.HLBindingAction||(typeof HLBindingAction=="undefined"?nil:HLBindingAction)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($HLBindingAction())._on_labelled_(self._keyCode(),self._label());
_st($2)._command_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asActionBinding",{},smalltalk.HLCommand)})},
args: [],
source: "asActionBinding\x0a\x09^ (HLBindingAction on: self keyCode labelled: self label)\x0a    \x09command: self;\x0a\x09\x09yourself",
messageSends: ["command:", "on:labelled:", "keyCode", "label", "yourself"],
referencedClasses: ["HLBindingAction"]
}),
smalltalk.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "asBinding",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._isBindingGroup();
if(smalltalk.assert($2)){
$1=self._asGroupBinding();
} else {
$1=self._asActionBinding();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asBinding",{},smalltalk.HLCommand)})},
args: [],
source: "asBinding\x0a\x09^ self isBindingGroup\x0a\x09\x09ifTrue: [ self asGroupBinding ]\x0a\x09\x09ifFalse: [ self asActionBinding ]",
messageSends: ["ifTrue:ifFalse:", "isBindingGroup", "asGroupBinding", "asActionBinding"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "asGroupBinding",
protocol: 'converting',
fn: function (){
var self=this;
function $HLBindingGroup(){return smalltalk.HLBindingGroup||(typeof HLBindingGroup=="undefined"?nil:HLBindingGroup)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLBindingGroup())._on_labelled_(self._keyCode(),self._label());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asGroupBinding",{},smalltalk.HLCommand)})},
args: [],
source: "asGroupBinding\x0a\x09^ HLBindingGroup \x0a\x09\x09on: self keyCode\x0a\x09\x09labelled: self label",
messageSends: ["on:labelled:", "keyCode", "label"],
referencedClasses: ["HLBindingGroup"]
}),
smalltalk.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "commandError:",
protocol: 'error handling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"commandError:",{aString:aString},smalltalk.HLCommand)})},
args: ["aString"],
source: "commandError: aString\x0a\x09self error: aString",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultInput",
protocol: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"defaultInput",{},smalltalk.HLCommand)})},
args: [],
source: "defaultInput\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "documentation",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._documentation();
return $1;
}, function($ctx1) {$ctx1.fill(self,"documentation",{},smalltalk.HLCommand)})},
args: [],
source: "documentation\x0a\x09^ self class documentation",
messageSends: ["documentation", "class"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLCommand)})},
args: [],
source: "execute",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "input",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@input"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"input",{},smalltalk.HLCommand)})},
args: [],
source: "input\x0a\x09^ input",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "input:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@input"]=aString;
$1=self["@input"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"input:",{aString:aString},smalltalk.HLCommand)})},
args: ["aString"],
source: "input: aString\x0a\x09^ input := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLCommand)})},
args: [],
source: "inputCompletion\x0a\x09^ #()",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},smalltalk.HLCommand)})},
args: [],
source: "inputLabel\x0a\x09^ self label",
messageSends: ["label"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isAction",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isBindingGroup())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAction",{},smalltalk.HLCommand)})},
args: [],
source: "isAction\x0a\x09^ self isBindingGroup not",
messageSends: ["not", "isBindingGroup"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLCommand)})},
args: [],
source: "isActive\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isBindingGroup",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._class())._methodDictionary())._includesKey_("execute"))._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isBindingGroup",{},smalltalk.HLCommand)})},
args: [],
source: "isBindingGroup\x0a\x09^ (self class methodDictionary includesKey: 'execute') not",
messageSends: ["not", "includesKey:", "methodDictionary", "class"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLCommand)})},
args: [],
source: "isInputRequired\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._key();
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLCommand)})},
args: [],
source: "key\x0a\x09^ self class key",
messageSends: ["key", "class"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "keyCode",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._key())._asUppercase())._charCodeAt_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyCode",{},smalltalk.HLCommand)})},
args: [],
source: "keyCode\x0a\x09^ self key asUppercase charCodeAt: 1",
messageSends: ["charCodeAt:", "asUppercase", "key"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLCommand)})},
args: [],
source: "label\x0a\x09^ self class label",
messageSends: ["label", "class"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._menuLabel();
return $1;
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLCommand)})},
args: [],
source: "menuLabel\x0a\x09^ self class menuLabel",
messageSends: ["menuLabel", "class"],
referencedClasses: []
}),
smalltalk.HLCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "registerOn:",
protocol: 'registration',
fn: function (aBinding){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBinding)._add_(self._asBinding());
return $1;
}, function($ctx1) {$ctx1.fill(self,"registerOn:",{aBinding:aBinding},smalltalk.HLCommand)})},
args: ["aBinding"],
source: "registerOn: aBinding\x0a\x09^ aBinding add: self asBinding",
messageSends: ["add:", "asBinding"],
referencedClasses: []
}),
smalltalk.HLCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "concreteClasses",
protocol: 'registration',
fn: function (){
var self=this;
var classes;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
classes=_st($OrderedCollection())._new();
$1=self._isConcrete();
if(smalltalk.assert($1)){
_st(classes)._add_(self);
};
_st(self._subclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(classes)._addAll_(_st(each)._concreteClasses());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
$2=classes;
return $2;
}, function($ctx1) {$ctx1.fill(self,"concreteClasses",{classes:classes},smalltalk.HLCommand.klass)})},
args: [],
source: "concreteClasses\x0a\x09| classes |\x0a\x09\x0a\x09classes := OrderedCollection new.\x0a\x09\x0a\x09self isConcrete\x0a\x09\x09ifTrue: [ classes add: self ].\x0a\x09\x09\x0a\x09self subclasses do: [ :each | \x0a\x09\x09classes addAll: each concreteClasses ].\x0a\x09\x09\x0a\x09^ classes",
messageSends: ["new", "ifTrue:", "isConcrete", "add:", "do:", "subclasses", "addAll:", "concreteClasses"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "documentation",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"documentation",{},smalltalk.HLCommand.klass)})},
args: [],
source: "documentation\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isConcrete",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._key())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isConcrete",{},smalltalk.HLCommand.klass)})},
args: [],
source: "isConcrete\x0a\x09^ self key notNil",
messageSends: ["notNil", "key"],
referencedClasses: []
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isValidFor:",
protocol: 'testing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{aModel:aModel},smalltalk.HLCommand.klass)})},
args: ["aModel"],
source: "isValidFor: aModel\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return nil;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLCommand.klass)})},
args: [],
source: "key\x0a\x09\x22Answer a single character string or nil if no key\x22\x0a\x09\x0a\x09^ nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLCommand.klass)})},
args: [],
source: "label\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLCommand.klass)})},
args: [],
source: "menuLabel\x0a\x09^ self label",
messageSends: ["label"],
referencedClasses: []
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "registerConcreteClassesOn:",
protocol: 'accessing',
fn: function (aBinding){
var self=this;
var newBinding;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isConcrete();
if(smalltalk.assert($1)){
newBinding=self._registerOn_(aBinding);
newBinding;
} else {
newBinding=aBinding;
newBinding;
};
_st(self._subclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._registerConcreteClassesOn_(newBinding);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"registerConcreteClassesOn:",{aBinding:aBinding,newBinding:newBinding},smalltalk.HLCommand.klass)})},
args: ["aBinding"],
source: "registerConcreteClassesOn: aBinding\x0a\x09| newBinding |\x0a\x09\x0a\x09self isConcrete\x0a\x09\x09ifTrue: [ newBinding := self registerOn: aBinding ]\x0a\x09\x09ifFalse: [ newBinding := aBinding ].\x0a\x09\x09\x0a\x09self subclasses do: [ :each | each registerConcreteClassesOn: newBinding ]",
messageSends: ["ifTrue:ifFalse:", "isConcrete", "registerOn:", "do:", "subclasses", "registerConcreteClassesOn:"],
referencedClasses: []
}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "registerOn:",
protocol: 'registration',
fn: function (aBinding){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._registerOn_(aBinding);
return $1;
}, function($ctx1) {$ctx1.fill(self,"registerOn:",{aBinding:aBinding},smalltalk.HLCommand.klass)})},
args: ["aBinding"],
source: "registerOn: aBinding\x0a\x09^ self new registerOn: aBinding",
messageSends: ["registerOn:", "new"],
referencedClasses: []
}),
smalltalk.HLCommand.klass);


smalltalk.addClass('HLCloseTabCommand', smalltalk.HLCommand, [], 'Helios-Commands-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($HLManager())._current())._removeActiveTab();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLCloseTabCommand)})},
args: [],
source: "execute\x0a\x09HLManager current removeActiveTab",
messageSends: ["removeActiveTab", "current"],
referencedClasses: ["HLManager"]
}),
smalltalk.HLCloseTabCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "w";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLCloseTabCommand.klass)})},
args: [],
source: "key\x0a\x09^ 'w'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCloseTabCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Close tab";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLCloseTabCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Close tab'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCloseTabCommand.klass);


smalltalk.addClass('HLModelCommand', smalltalk.HLCommand, ['model'], 'Helios-Commands-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLModelCommand)})},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLModelCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
protocol: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLModelCommand)})},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLModelCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "for:",
protocol: 'instance creation',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{aModel:aModel},smalltalk.HLModelCommand.klass)})},
args: ["aModel"],
source: "for: aModel\x0a\x09^ self new",
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.HLModelCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "registerConcreteClassesOn:for:",
protocol: 'registration',
fn: function (aBinding,aModel){
var self=this;
var newBinding;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isConcrete())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return self._isValidFor_(aModel);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
if(smalltalk.assert($1)){
newBinding=self._registerOn_for_(aBinding,aModel);
newBinding;
} else {
newBinding=aBinding;
newBinding;
};
_st(self._subclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._registerConcreteClassesOn_for_(newBinding,aModel);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)})}));
return self}, function($ctx1) {$ctx1.fill(self,"registerConcreteClassesOn:for:",{aBinding:aBinding,aModel:aModel,newBinding:newBinding},smalltalk.HLModelCommand.klass)})},
args: ["aBinding", "aModel"],
source: "registerConcreteClassesOn: aBinding for: aModel\x0a\x09| newBinding |\x0a\x09\x0a\x09(self isConcrete and: [ self isValidFor: aModel ])\x0a\x09\x09ifTrue: [ newBinding := self registerOn: aBinding for: aModel ]\x0a\x09\x09ifFalse: [ newBinding := aBinding ].\x0a\x09\x09\x0a\x09self subclasses do: [ :each |\x0a\x09\x09each registerConcreteClassesOn: newBinding for: aModel ]",
messageSends: ["ifTrue:ifFalse:", "and:", "isConcrete", "isValidFor:", "registerOn:for:", "do:", "subclasses", "registerConcreteClassesOn:for:"],
referencedClasses: []
}),
smalltalk.HLModelCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "registerOn:for:",
protocol: 'registration',
fn: function (aBinding,aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._for_(aModel))._registerOn_(aBinding);
return $1;
}, function($ctx1) {$ctx1.fill(self,"registerOn:for:",{aBinding:aBinding,aModel:aModel},smalltalk.HLModelCommand.klass)})},
args: ["aBinding", "aModel"],
source: "registerOn: aBinding for: aModel\x0a\x09^ (self for: aModel) registerOn: aBinding",
messageSends: ["registerOn:", "for:"],
referencedClasses: []
}),
smalltalk.HLModelCommand.klass);


smalltalk.addClass('HLOpenCommand', smalltalk.HLCommand, [], 'Helios-Commands-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "o";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLOpenCommand.klass)})},
args: [],
source: "key\x0a\x09^ 'o'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Open";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLOpenCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Open'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenCommand.klass);


smalltalk.addClass('HLOpenBrowserCommand', smalltalk.HLOpenCommand, [], 'Helios-Commands-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
function $HLBrowser(){return smalltalk.HLBrowser||(typeof HLBrowser=="undefined"?nil:HLBrowser)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLBrowser())._openAsTab();
return $1;
}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLOpenBrowserCommand)})},
args: [],
source: "execute\x0a\x09^ HLBrowser openAsTab",
messageSends: ["openAsTab"],
referencedClasses: ["HLBrowser"]
}),
smalltalk.HLOpenBrowserCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "b";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLOpenBrowserCommand.klass)})},
args: [],
source: "key\x0a\x09^ 'b'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenBrowserCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Browser";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLOpenBrowserCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Browser'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenBrowserCommand.klass);


smalltalk.addClass('HLOpenWorkspaceCommand', smalltalk.HLOpenCommand, [], 'Helios-Commands-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
function $HLWorkspace(){return smalltalk.HLWorkspace||(typeof HLWorkspace=="undefined"?nil:HLWorkspace)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HLWorkspace())._openAsTab();
return $1;
}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLOpenWorkspaceCommand)})},
args: [],
source: "execute\x0a\x09^ HLWorkspace openAsTab",
messageSends: ["openAsTab"],
referencedClasses: ["HLWorkspace"]
}),
smalltalk.HLOpenWorkspaceCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "w";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLOpenWorkspaceCommand.klass)})},
args: [],
source: "key\x0a\x09^ 'w'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenWorkspaceCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Workspace";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLOpenWorkspaceCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Workspace'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLOpenWorkspaceCommand.klass);


smalltalk.addClass('HLSwitchTabCommand', smalltalk.HLCommand, [], 'Helios-Commands-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
var activeTab;
function $HLTabSelectionWidget(){return smalltalk.HLTabSelectionWidget||(typeof HLTabSelectionWidget=="undefined"?nil:HLTabSelectionWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
activeTab=self._selectedTab();
$ctx1.sendIdx["selectedTab"]=1;
$2=_st($HLTabSelectionWidget())._new();
_st($2)._tabs_(self._tabs());
_st($2)._selectedTab_(self._selectedTab());
_st($2)._selectCallback_((function(tab){
return smalltalk.withContext(function($ctx2) {
return _st(tab)._activate();
$ctx2.sendIdx["activate"]=1;
}, function($ctx2) {$ctx2.fillBlock({tab:tab},$ctx1,1)})}));
_st($2)._confirmCallback_((function(tab){
return smalltalk.withContext(function($ctx2) {
return _st(tab)._focus();
}, function($ctx2) {$ctx2.fillBlock({tab:tab},$ctx1,2)})}));
_st($2)._cancelCallback_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(activeTab)._activate();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$3=_st($2)._show();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"execute",{activeTab:activeTab},smalltalk.HLSwitchTabCommand)})},
args: [],
source: "execute\x0a\x09| activeTab |\x0a\x09\x0a\x09activeTab := self selectedTab.\x0a\x09\x0a\x09^ HLTabSelectionWidget new\x0a\x09\x09tabs: self tabs;\x0a\x09\x09selectedTab: self selectedTab;\x0a\x09\x09selectCallback: [ :tab | tab activate ];\x0a\x09\x09confirmCallback: [ :tab | tab focus ];\x0a\x09\x09cancelCallback: [ activeTab activate ];\x0a\x09\x09show",
messageSends: ["selectedTab", "tabs:", "new", "tabs", "selectedTab:", "selectCallback:", "activate", "confirmCallback:", "focus", "cancelCallback:", "show"],
referencedClasses: ["HLTabSelectionWidget"]
}),
smalltalk.HLSwitchTabCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedTab",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($HLManager())._current())._activeTab();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedTab",{},smalltalk.HLSwitchTabCommand)})},
args: [],
source: "selectedTab\x0a\x09^ HLManager current activeTab",
messageSends: ["activeTab", "current"],
referencedClasses: ["HLManager"]
}),
smalltalk.HLSwitchTabCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "tabs",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($HLManager())._current())._tabs();
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabs",{},smalltalk.HLSwitchTabCommand)})},
args: [],
source: "tabs\x0a\x09^ HLManager current tabs",
messageSends: ["tabs", "current"],
referencedClasses: ["HLManager"]
}),
smalltalk.HLSwitchTabCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "s";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLSwitchTabCommand.klass)})},
args: [],
source: "key\x0a\x09^ 's'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSwitchTabCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Switch";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLSwitchTabCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Switch'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSwitchTabCommand.klass);


smalltalk.addClass('HLViewCommand', smalltalk.HLCommand, [], 'Helios-Commands-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "View";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLViewCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'View'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLViewCommand.klass);

});
