
/**
 *
 */
 //% weight=100 color=#0fbc11 icon="\uf11b" block="KN timer"
namespace kntimer {

    /**
     * Create a new timer
     */
    //% block="create timer"
    export function createTimer(): Timer {
        return new Timer();
    }

    export class Timer {
        private start: number;

        constructor() {
            this.start = control.millis();
        }

        /**
         *
         */
        //% block="is %timer after %ms"
        public is_after(ms: number): boolean {
            let now = control.millis();
            return now >= this.start + ms;
        }

        /**
         *
         */
        //% block="reset timer %s"
        public reset(): void {
            this.start = control.millis();
        }

        /**
         *
         */
        //% block="check timer %timer avove %ms then reset"
        public check_reset(ms: number): boolean {
            let now = control.millis();
            if (now >= this.start + ms) {
                this.start = now;
                return true;
            }
            return false;
        }
    }
}
