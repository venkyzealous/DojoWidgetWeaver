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
	templates17 : null,
	templates16 : null,
	selectedForm : '',
	is17:true,
	showForm : function (id){
					dww.selectedForm = id;
					var ids = ['event','publish','subscribe','xhrCall'];
					for(var i = 0; i < ids.length; i++)
						if(id != ids[i])
							document.forms[ids[i]].style.display='none';
						else
							document.forms[ids[i]].style.display='inline';

					$('#generated').empty(); //clear previous code
					//TODO:reset form contents
	},
	initialize : function(){
			this.loadTemplates();

			$(document).ready(
				function(){
					//hook operation radio buttons
					$('#operations input').each(function(index,value){
						$(value).click(function(){
							dww.showForm(value.title);
						});	
					});
					
					//hook dojo version radio buttons change
					$('input[name=group2]').change(function(){
						dww.is17 = $('#optionB').is(':checked')
					});

					//hook generate button
					$('#generate').click(function(){
						dww.generate();
					});

				}
			);

	},
	loadTemplates : function(){
		if(window.templates17 != null)
			this.templates17 = window.templates17;
		if(window.templates16 != null)
			this.templates16 = window.templates16;
		
	},
	applyTemplate: function(values){
		var key = this.selectedForm;
		var script = this.is17?this.templates17[key]:this.templates16[key];
		$(values).each(function(index,value){
			script = script.replace('%'+(index+1),value); //1 based indexing
		});
		$('#generated')[0].innerText = script;
	},
	generate : function(){

		switch(this.selectedForm){
			case 'event':
							this.generateEventCode();
							break;
			case 'publish':
							this.generatePublishCode();				
							break;
			case 'subscribe':
							this.generateSubscribeCode();	
							break;
			case 'xhrCall':
							this.generateXhrCallCode();
							break;
			default:break;

		}

	},
	generateEventCode:function(){
		var eventName = $('#eventsValue')[0].value;
		var contextValue = $('#contextValue')[0].value;
		var argumentValue = $('#argumentValue')[0].value;
		var customCodeValue = $('#customCodeValue')[0].value;
		
		var args = [eventName,contextValue,argumentValue,customCodeValue];

		this.applyTemplate(args);

	},
	generatePublishCode:function(){
		var topic = $('#topicValue').val();
		var arguments = $('#topicArgs').val();
		var values = [topic,arguments];
		this.applyTemplate(values);
	},
	generateSubscribeCode:function(){
		var topic = $('#subscribeValue').val();
		var params = $('#subscribeParam').val();
		var sbody = $('#subscribeBody').val();
		var values = [topic,params,sbody];
		this.applyTemplate(values);
	},
	generateXhrCallCode : function(){
		var url = $("#urlValue").val();
		var data = $("#bodyValue").val();
		var query = $("#queryValue").val();
		var method = $("#methodValue").val();
		var timeout = $("#timeoutValue").val();
		var handleAs = $("#handleAsValue").val();
		var loadCode = $("#loadValue").val();
		var errorCode = $("#errorValue").val();

		var values = [ url, data, query, method, 
		timeout, handleAs, loadCode, errorCode];
		this.applyTemplate(values);
	}
};

dww.initialize();











