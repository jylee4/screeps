/**
 * 
 */

var lodash = require('lodash');
var CreepTypes = require('/modules/Creeps/CreepBuilder').CreepTypes;

function loop() {
	for (let room of Game.rooms) {
		var spawns = room.find(FIND_MY_SPAWNS);
		for(let spawn of spawns) {
			spawn.createCreep(CreepTypes.body_parts[CreepTypes.HARVESTER]);
		}
	}
}