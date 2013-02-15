var dwwte = {
		version:'1.7',
		currentKey:'',
		currentData:'',
		templates:null,
		versionSelect: function(){
			if(this.version=='1.7'){
				return templates17;
			}
			else{
				return templates16;
			};
		},
		initialize: function(){
			this.initializeDialog();
			this.initializeVersionSelector();
			$('#generate').click(function(){
				dwwte.generate();
			});
			$('#indent').click(function(){
				var ta = $('#output')[0];
				ta.setRangeText('\t');
				ta.selectionStart += 1;
			})
			this.loadTemplate();
		},
		loadTemplate:function(){
			this.templates = this.versionSelect();
			$('#grid').empty();
			for(var i in this.templates){
				$('#grid').append(
					$('<tr>').append(
						$('<td class="key">').append($('<strong>').text(i)),
						$('<td>').text(this.templates[i])
						)
				);	
			}
			this.setHandlers(); //after the elements are created
		},
		generateCode:function(){

		},
		addEntry:function(){
		},
		removeEntry:function(){

		},
		editEntry: function(event){
			var cell = event.currentTarget;
			this.currentKey = $(cell).text();

			$('#version').text(this.version);
			$('#output').val(this.templates[this.currentKey]);
			$('#dialog').dialog("open");
		},
		setHandlers: function(){
			$('.key').click(function(e){dwwte.editEntry(e)});
		},
		initializeDialog: function(){
			$('#dialog').dialog({
				autoOpen: false,
				width: 450,
				buttons: [
					{
						text: "Ok",
						click: function() {
							dwwte.currentData = $('#output').val()+'';
							dwwte.updateData();
							$(this).dialog( "close" );
						}
					},
					{
						text: "Cancel",
						click: function() {
							$(this).dialog( "close" );
						}
					}
				]
			});

			$('#dialog2').dialog({
				autoOpen: false,
				width: 450,
				buttons: [
					{
						text: "Copy",
						click: function() {
							$(this).dialog( "close" );
						}
					},
					{
						text: "Close",
						click: function() {
							$(this).dialog( "close" );
						}
					}
				]
			});
		},
		updateData: function(){
			//update output and store
			this.templates[this.currentKey] = this.versionSelect()[this.currentKey] 
			 = this.currentData;
			 this.loadTemplate();
		},
		initializeVersionSelector: function(){
			$('input[name=versionOption]').change(function(){
				if($('#option2').is(':checked'))
					dwwte.version = "1.7";
				else
					dwwte.version = "1.6";

				dwwte.loadTemplate();
			});
		},
		generate: function(){
			$('#version2').text(dwwte.version=='1.7'?'js/templates17.js':
				'js/templates16.js');

			//generate json
			$('#output2').val(JSON.stringify(this.templates));
			$('#dialog2').dialog('open');
			var ta = $('#output2')[0];
			ta.setSelectionRange(0,ta.value.length);//preselect

		}

	};
l = console.log.bind(console);
w = console.warn.bind(console);
e = console.error.bind(console);


$(function(){
	dwwte.initialize();
});