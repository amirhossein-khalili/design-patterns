abstract class MessageHandler {
  minMessageLength: number = 0;
  maxMessageLength: number;

  handler: MessageHandler;

  constructor(messageLength: number) {
    this.messageLength = messageLength;
  }

  manageHandler(message: string) {
    if (message.length < this.messageLength) {
      this._handle(message);
    } else {
      if (this.handler) this.handler.manageHandler(message);
      else throw new Error("i cant handle and i dont have next ");
    }
  }

  setNext(handler: MessageHandler) {
    this.handler = handler;
  }

  abstract _handle(message: string);
}

class ShortMessageHandler extends MessageHandler {
  constructor(messageLength: number) {
    super(messageLength);
  }
  _handle(message: string) {
    console.log(message);
  }
}

class MediumMessageHandler extends MessageHandler {
  constructor(messageLength: number) {
    super(messageLength);
  }
  _handle(message: string) {
    console.log(message);
  }
}

class LongMessageHandler extends MessageHandler {
  constructor(messageLength: number) {
    super(messageLength);
  }
  _handle(message: string) {
    console.log(message);
  }
}

const shortMessageHandler = new ShortMessageHandler(10);
const mediumMessageHandler = new MediumMessageHandler(20);
const longMessageHandler = new LongMessageHandler(30);

shortMessageHandler.setNext(mediumMessageHandler);
mediumMessageHandler.setNext(longMessageHandler);
