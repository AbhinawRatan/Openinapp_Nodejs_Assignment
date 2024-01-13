const EmailHandler = require('./emailHandler');

class Scheduler {
    constructor(emailHandler) {
        this.emailHandler = emailHandler;
        this.isRunning = false;
    }

    /**
     * Starts the scheduler which will process emails at random intervals.
     */
    start() {
        if (this.isRunning) {
            console.log('Scheduler is already running.');
            return;
        }

        console.log('Starting the scheduler...');
        this.isRunning = true;
        this.scheduleNextRun();
    }

    /**
     * Stops the scheduler.
     */
    stop() {
        this.isRunning = false;
        console.log('Scheduler has been stopped.');
    }

    /**
     * Schedules the next email check at a random interval.
     */
    scheduleNextRun() {
        const randomInterval = this.getRandomInterval(45, 120);
        console.log(`Scheduling next email check in ${randomInterval} seconds.`);

        setTimeout(async () => {
            if (!this.isRunning) return;

            try {
                await this.emailHandler.checkAndReplyEmails();
            } catch (error) {
                console.error('Error during email processing:', error);
            }

            this.scheduleNextRun();
        }, randomInterval * 1000);
    }

    /**
     * Generates a random interval within a given range.
     * @param {number} min Minimum number of seconds.
     * @param {number} max Maximum number of seconds.
     * @returns {number} A random interval in seconds.
     */
    getRandomInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

// Export an instance of the scheduler
const emailHandler = new EmailHandler();
const schedulerInstance = new Scheduler(emailHandler);

module.exports = schedulerInstance;
