radio.onReceivedString(function (receivedString) {
    if (receivedString == "LeveGodet") {
        if (angle > 0 && angle <= 90) {
            angle += -1
        }
        maqueen.servoRun(maqueen.Servos.S1, angle)
    } else if (receivedString == "BaisseGodet") {
        if (angle >= 0 && angle < 90) {
            angle += 1
            maqueen.servoRun(maqueen.Servos.S1, angle)
        }
    } else if (receivedString == "LEDL") {
    	
    } else if (receivedString == "LEDR") {
    	
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "F") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Math.map(value, 550, 1023, 10, 255))
    } else if (name == "B") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, Math.map(value, 1, 450, 255, 10))
    } else if (name == "L") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Math.map(value, 1, 450, 255, 40))
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    } else if (name == "R") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Math.map(value, 550, 1023, 40, 255))
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
    }
})
let angle = 0
radio.setGroup(1)
angle = 90
maqueen.servoRun(maqueen.Servos.S1, angle)
