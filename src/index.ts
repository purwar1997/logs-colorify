export class Log {
  public static error(message: string) {
    console.log(`%c ${message}`, 'color: red; font-size: 14px');
  }

  public static warn(message: string) {
    console.log(`%c ${message}`, 'color: yellow; font-size: 14px');
  }

  public static info(message: string) {
    console.log(`%c ${message}`, 'color: black; background-color: yellow; font-size: 14px');
  }

  public static debug(message: string) {
    console.log(`%c ${message}`, 'color: green; font-size: 14px');
  }
}
