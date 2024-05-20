IR.IR_callbackUser(function (message) {
    if (message == 22) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
    if (message == 25) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
    }
    if (message == 12) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    }
    if (message == 8) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
