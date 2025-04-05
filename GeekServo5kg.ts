//% color=#1e90ff  icon="\uf3fd"" block="GeekServo 5kg" blockId="GeekServo5kg"
namespace GeekServo5kg {
    /**
    * PortList
    */
    export enum PortList {
        //% block="P0" enumval=0
        P0,
        //% block="P1" enumval=1
        P1,
        //% block="P2" enumval=2
        P2,
        //% block="P3" enumval=3
        P3,
        //% block="P4" enumval=4
        P4,
        //% block="P5" enumval=5
        P5,
        //% block="P6" enumval=6
        P6,
        //% block="P7" enumval=7
        P7,
        //% block="P8" enumval=8
        P8,
        //% block="P9" enumval=9
        P9,
        //% block="P10" enumval=10
        P10,
        //% block="P11" enumval=11
        P11,
        //% block="P12" enumval=12
        P12,
        //% block="P13" enumval=13
        P13,
        //% block="P14" enumval=14
        P14,
        //% block="P15" enumval=15
        P15,
        //% block="P16" enumval=16
        P16
    }
    /**
    * ServoList 
    */
    export enum ServoList {
        //% block="S0" enumval=0
        S0,
        //% block="S1" enumval=1
        S1,
        //% block="S2" enumval=2
        S2,
        //% block="S3" enumval=3
        S3,
        //% block="S4" enumval=4
        S4,
        //% block="S5" enumval=5
        S5,
        //% block="S6" enumval=6
        S6,
        //% block="S7" enumval=7
        S7
    } // ELECFREAKS WUKONG
    const board_address = 0x10 // ELECFREAKS WUKONG


    //% weight=99 color="#1e60ff"
    //% blockId=setGeekServo5k block="Set GeekServo 5kg %servo angle to %angle"
    //% angle.min=0 angle.max=360
    export function setGeekServo5kAngle(servo: PortList, angle: number): void {
        let pulse = Math.round(Math.map(angle, 0, 360, 500, 2500))
        if (servo == 0) {
            pins.servoSetPulse(AnalogPin.P0, pulse);
        } else if (servo == 1) {
            pins.servoSetPulse(AnalogPin.P1, pulse);
        } else if (servo == 2) {
            pins.servoSetPulse(AnalogPin.P2, pulse);
        } else if (servo == 3) {
            pins.servoSetPulse(AnalogPin.P3, pulse);
        } else if (servo == 4) {
            pins.servoSetPulse(AnalogPin.P4, pulse);
        } else if (servo == 5) {
            pins.servoSetPulse(AnalogPin.P5, pulse);
        } else if (servo == 6) {
            pins.servoSetPulse(AnalogPin.P6, pulse);
        } else if (servo == 7) {
            pins.servoSetPulse(AnalogPin.P7, pulse);
        } else if (servo == 8) {
            pins.servoSetPulse(AnalogPin.P8, pulse);
        } else if (servo == 9) {
            pins.servoSetPulse(AnalogPin.P9, pulse);
        } else if (servo == 10) {
            pins.servoSetPulse(AnalogPin.P10, pulse);
        } else if (servo == 11) {
            pins.servoSetPulse(AnalogPin.P11, pulse);
        } else if (servo == 12) {
            pins.servoSetPulse(AnalogPin.P12, pulse);
        } else if (servo == 13) {
            pins.servoSetPulse(AnalogPin.P13, pulse);
        } else if (servo == 14) {
            pins.servoSetPulse(AnalogPin.P14, pulse);
        } else if (servo == 15) {
            pins.servoSetPulse(AnalogPin.P15, pulse);
        } else if (servo == 16) {
            pins.servoSetPulse(AnalogPin.P16, pulse);
        }
    }

    //% weight=98 color="#1ec7ff"
    //% blockId=setGeekServo5kSpeed block="Set GeekServo 5kg %servo speed to %speed\\%"
    //% speed.min=-100 speed.max=100
    export function setGeekServo5kSpeed(servo: PortList, speed: number): void {
        let pulse = Math.round(Math.map(speed, -100, 100, 3000, 5000))
        if (servo == 0) {
            pins.servoSetPulse(AnalogPin.P0, pulse);
        } else if (servo == 1) {
            pins.servoSetPulse(AnalogPin.P1, pulse);
        } else if (servo == 2) {
            pins.servoSetPulse(AnalogPin.P2, pulse);
        } else if (servo == 3) {
            pins.servoSetPulse(AnalogPin.P3, pulse);
        } else if (servo == 4) {
            pins.servoSetPulse(AnalogPin.P4, pulse);
        } else if (servo == 5) {
            pins.servoSetPulse(AnalogPin.P5, pulse);
        } else if (servo == 6) {
            pins.servoSetPulse(AnalogPin.P6, pulse);
        } else if (servo == 7) {
            pins.servoSetPulse(AnalogPin.P7, pulse);
        } else if (servo == 8) {
            pins.servoSetPulse(AnalogPin.P8, pulse);
        } else if (servo == 9) {
            pins.servoSetPulse(AnalogPin.P9, pulse);
        } else if (servo == 10) {
            pins.servoSetPulse(AnalogPin.P10, pulse);
        } else if (servo == 11) {
            pins.servoSetPulse(AnalogPin.P11, pulse);
        } else if (servo == 12) {
            pins.servoSetPulse(AnalogPin.P12, pulse);
        } else if (servo == 13) {
            pins.servoSetPulse(AnalogPin.P13, pulse);
        } else if (servo == 14) {
            pins.servoSetPulse(AnalogPin.P14, pulse);
        } else if (servo == 15) {
            pins.servoSetPulse(AnalogPin.P15, pulse);
        } else if (servo == 16) {
            pins.servoSetPulse(AnalogPin.P16, pulse);
        }
    }

    //% weight=49 color="#1e60ff"
    //% group="ELECFREAKS WUKONG"
    //% blockId=setWuKongGeekServo5k block="Set GeekServo 5kg %servo angle to %angle"
    //% angle.min=0 angle.max=360
    export function setWuKongGeekServo5kAngle(servo: ServoList, angle: number): void {
        let buf = pins.createBuffer(4);
        if (servo == 0) {
            buf[0] = 0x03;
        }
        if (servo == 1) {
            buf[0] = 0x04;
        }
        if (servo == 2) {
            buf[0] = 0x05;
        }
        if (servo == 3) {
            buf[0] = 0x06;
        }
        if (servo == 4) {
            buf[0] = 0x07;
        }
        if (servo == 5) {
            buf[0] = 0x08;
        }
        if (servo == 6) {
            buf[0] = 0x09;
        }
        if (servo == 7) {
            buf[0] = 0x10;
        }

        angle = Math.map(angle, 0, 360, 0, 180)

        buf[1] = angle;
        buf[2] = 0;
        buf[3] = 0;
        pins.i2cWriteBuffer(board_address, buf);
    }

    //% weight=47 color="#1ec7ff"
    //% group="ELECFREAKS WUKONG"
    //% blockId=setWuKongGeekServo5kSpeed block="Set GeekServo 5kg %servo speed to %speed\\%"
    //% speed.min=-100 speed.max=100
    export function setWuKongGeekServo5kSpeed(servo: ServoList, speed: number): void {
        let buf = pins.createBuffer(4);
        if (servo == 0) {
            buf[0] = 0x03;
        }
        if (servo == 1) {
            buf[0] = 0x04;
        }
        if (servo == 2) {
            buf[0] = 0x05;
        }
        if (servo == 3) {
            buf[0] = 0x06;
        }
        if (servo == 4) {
            buf[0] = 0x07;
        }
        if (servo == 5) {
            buf[0] = 0x08;
        }
        if (servo == 6) {
            buf[0] = 0x09;
        }
        if (servo == 7) {
            buf[0] = 0x10;
        }

        let servospeed = Math.map(speed, -100, 100, 225, 405)

        buf[1] = servospeed;
        buf[2] = 0;
        buf[3] = 0;
        pins.i2cWriteBuffer(board_address, buf);
    }

    //% weight=47 color="#111111"
    //% group="ELECFREAKS WUKONG"
    //% blockId=testWuKong block="Set GeekServo 5kg %servo I2C buf[1] to %speed"
    export function testWuKong(servo: ServoList, speed: number): void {
        let buf = pins.createBuffer(4);
        if (servo == 0) {
            buf[0] = 0x03;
        }
        if (servo == 1) {
            buf[0] = 0x04;
        }
        if (servo == 2) {
            buf[0] = 0x05;
        }
        if (servo == 3) {
            buf[0] = 0x06;
        }
        if (servo == 4) {
            buf[0] = 0x07;
        }
        if (servo == 5) {
            buf[0] = 0x08;
        }
        if (servo == 6) {
            buf[0] = 0x09;
        }
        if (servo == 7) {
            buf[0] = 0x10;
        }

        buf[1] = speed;
        buf[2] = 0;
        buf[3] = 0;
        pins.i2cWriteBuffer(board_address, buf);
    }
}
