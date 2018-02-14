(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = { 
		typeName: "kpivalue",
		iconUrl: '/Scripts/app/editor/symbols/ext/Icons/kpi_icon.png',
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
		getDefaultConfig: function(){ 
			return { 
				Height: 150,
				Width: 150,
				LowValue: 0,
				HiValue: 100,
				BgC: '#ff5733',
				BR: 10,
				DD: 2
			} 
		},
		configOptions: function(){
			return[
				{
					title: 'Format Symbol',
					mode: 'format'
				}
			];				
		}
	}

	symbolVis.prototype.init = function(scope, elem) { 
//		scope.Time = DataItem.Time,
//		scope.Value = DataItem.Value
		
		this.onDataUpdate = dataUpdate;
		
		function dataUpdate(data){
			if (data !== null){
				//console.log(data);
				if (data.Label){
					scope.Label = data.Label;
					scope.Units = data.Units;
					scope.Path = data.Path;
				}
				scope.Time = data.Time;
				scope.Value = data.Value;
			}
		}
	};

	PV.symbolCatalog.register(definition); 
})(window.PIVisualization); 
