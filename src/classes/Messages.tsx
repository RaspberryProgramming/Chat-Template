// Object classes that store messages
class PublicMessage {
    /**
     * PublicMessage - public message that is sent to all users
     */

    message: string;
    user: string;
    timestamp: Date;

    constructor(message: string, user: string, timestamp: string) {
        this.message = message;
        this.user = user;
        this.timestamp = new Date(timestamp);
    }
}

class UserMessage extends PublicMessage {
    /**
     * UserMessage - extension of PublicMessage that is used to send to all users.
     */

    sendTo: string; // Destined user

    constructor(message: string, user: string, timestamp: string, sendTo: string) {
        super(message, user, timestamp);

        this.sendTo = sendTo;
    }

}

export {PublicMessage, UserMessage};