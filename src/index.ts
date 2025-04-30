export class Log {
  public static error(message: string) {
    console.log(`%c ${message}`, 'color: red');
  }

  public static warn(message: string) {
    console.log(`%c ${message}`, 'color: yellow');
  }

  public static info(message: string) {
    console.log(`%c ${message}`, 'color: black; background-color: yellow');
  }

  public static debug(message: string) {
    console.log(`%c ${message}`, 'color: blue');
  }
}
