// Dojo Widget Weaver - Widget code generation tool
// Copyright © 2012 Venkatesh Jagannathan (venkyzealous@gmail.com)

// This program is distributed under the terms of the GNU General Public License

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.


var dww = {
	showForm : function (id){
					dww.selectedForm = id;
					var ids = ['event','publish','subscribe','xhrCall'];
					for(var i = 0; i < ids.length; i++)
						if(id != ids[i])
							document.forms[ids[i]].style.display='none';
						else
							document.forms[ids[i]].style.display='inline';
	},
	generate : function(){

		if(dww.selectedForm == 'event'){
			dww.generateEventCode();
		}
	},
	initialize : function(){
		document.addEventListener('DOMContentLoaded', function () {
			document.getElementById('option1').addEventListener('click',dww.showForm.bind(undefined,'event'));
			document.getElementById('option2').addEventListener('click',dww.showForm.bind(undefined,'publish'));
			document.getElementById('option3').addEventListener('click',dww.showForm.bind(undefined,'subscribe'));
			document.getElementById('option4').addEventListener('click',dww.showForm.bind(undefined,'xhrCall')); 
			document.getElementById('generate').addEventListener('click',dww.generate); 
		});
	},
	generateEventCode:function(){
		var eventName = $('#eventsValue')[0].value;
		var contextValue = $('#contextValue')[0].value;
		var argumentValue = $('#argumentValue')[0].value;
		var customCodeValue = $('#customCodeValue')[0].value;
		
		$('#generated')[0].innerText = "require([\"dojo/on\"], function(on){\n\ton("
										+contextValue
										+", \""
										+eventName
										+"\", function("
										+argumentValue
										+"){\n\t\t"
										+customCodeValue
										+"\n\n\t});\n});";
	},
	selectedForm : ''
};

dww.initialize();







