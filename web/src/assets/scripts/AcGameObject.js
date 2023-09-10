const AC_GAME_OBJECTS = [];

export class AcGameObject {
    constructor() {
        AC_GAME_OBJECTS.push(this);
        this.timedelta = 0;
        this.has_called_start = false;
    }

    //@只执行一次
    start() {

    }

    //@除了第一帧以外 每一帧执行一次
    update () {

    }

    //@删除之前执行
    on_destroy() {

    }
    
    destroy () {
        this.on_destroy();

        for (let i in AC_GAME_OBJECTS) {
            const obj = AC_GAME_OBJECTS[i];
            if (obj === this) {
                AC_GAME_OBJECTS.splice(i);
                break;
            }
        }    
    }
}

let last_timestamp; //上次执行时间戳
const step = timestamp => { //传入执行时间戳
    for (let obj of AC_GAME_OBJECTS) {
        if (!obj.has_called_start) {
            obj.start();
            obj.has_called_start = true;
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;//更新last_timestamp
    requestAnimationFrame(step);
}

requestAnimationFrame(step)