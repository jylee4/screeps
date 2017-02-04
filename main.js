/**
 * 
 */

var lodash = require('lodash');

function loop() {
	var harvesters = lodash.filter(Game.creeps, {memory: {role: 'harvester'}});
}