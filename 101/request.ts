
class TaskRunner {
    private queue;
    private maxOut: number;
    private currentOut: number;

    constructor(maxOut) {
        this.queue = []
        this.currentOut = 0;
        this.maxOut = maxOut;
    }

    // Task: function(cb) => void
    // cb: (...) => void
    exec(task, cb) {
        this.queue.push([task, cb]);
        this.ackshuallyExecuteTheThings();
    }

    private ackshuallyExecuteTheThings() {
        if (this.currentOut < this.maxOut && this.queue.length) {
            this.currentOut++;
            const [
                task,
                cb
            ] = this.queue.shift();

            try {
                task((err: Error | null, ...args: any[]) => {
                    let innerErr;
                    try {
                        cb(err, ...args);
                    } catch(e) {
                        innerErr = e;
                    }

                    this.currentOut--;
                    this.ackshuallyExecuteTheThings();

                    if (innerErr) {
                        throw innerErr;
                    }
                });
            } catch (e) {
                this.currentOut--;
                this.ackshuallyExecuteTheThings();
                throw e;
            }
        }
    }
}


const a = new TaskRunner(3);

function timeout(waitTime) {
    return function _timeout(cb) {
        setTimeout(() => {
            cb(Math.random());
        }, waitTime);
    }
}

a.exec(timeout(5000), () => {
    console.log("1 done");
});

a.exec(timeout(3000), () => {
    console.log("2 done");
});

a.exec(timeout(2000), () => {
    console.log("3 done");
});

a.exec(timeout(1000), () => {
    console.log("4 done");
});
