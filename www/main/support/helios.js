define([
	'amber_vm/smalltalk', // pre-fetch, dep of ./deploy
	'./deploy', // pre-fetch, dep of ./lang
	'./lang',
	'jquery-ui',
	'amber_lib/jquery-tabby/jquery.textarea',
	'amber_lib/bootstrap/js/bootstrap',
	'amber_lib/showdown/compressed/showdown',
	'amber_lib/codemirror/lib/codemirror',
	'amber_inc/CodeMirror/smalltalk',
	'amber_lib/codemirror/addon/hint/show-hint',
	'css!amber_lib/codemirror/theme/ambiance',
	'css!amber_lib/codemirror/lib/codemirror',
	'css!amber_lib/codemirror/addon/hint/show-hint',
	'css!amber_inc/CodeMirror/amber',
	'css!amber_css/helios',
	'amber_core/IDE',
	'amber_core/Examples',
	'amber_core/Benchfib',
	'amber_core/Spaces',
	'amber_core/Helios-Core',
	'amber_core/Helios-Exceptions',
	'amber_core/Helios-Helpers',
	'amber_core/Helios-Commands-Core',
	'amber_core/Helios-Commands-Tools',
	'amber_core/Helios-Commands-Browser',
	'amber_core/Helios-Layout',
	'amber_core/Helios-KeyBindings',
	'amber_core/Helios-Browser',
	'amber_core/Helios-Workspace',
	'amber_core/Helios-Transcript',
	'amber_core/Helios-Debugger',
	'amber_core/Helios-Inspector',
	'amber_core/Helios-References',
	'amber_core/Helios-Announcements',
	'amber_core/Helios-Workspace-Tests'
], function (smalltalk) { return smalltalk; });
