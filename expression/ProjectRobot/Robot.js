let VillageState = require('./VillageState')
VillageState.random = function ( parcelCount = 5) {
    
}
function runRobot(state, robot, memory){
    for (let turn = 0;; turn++){
        if (state.parcels.length === 0 ){
            console.log(`the work has been done by the robot at ${state.place}`);
            break
        }
        let action = robot(state, memory);
        state = state.move(action.direction);

    }
}