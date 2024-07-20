export abstract class Either<L, R> {
  abstract isLeft(): this is Left<L, R>;
  abstract isRight(): this is Right<L, R>;
  abstract value: L | R;

  static left<L, R>(value: L): Either<L, R> {
    return new Left(value);
  }

  static right<L, R>(value: R): Either<L, R> {
    return new Right(value);
  }
}

export class Left<L, R> extends Either<L, R> {
  readonly value: L;

  constructor(value: L) {
    super();
    this.value = value;
  }

  isLeft(): this is Left<L, R> {
    return true;
  }

  isRight(): this is Right<L, R> {
    return false;
  }
}

export class Right<L, R> extends Either<L, R> {
  readonly value: R;

  constructor(value: R) {
    super();
    this.value = value;
  }

  isLeft(): this is Left<L, R> {
    return false;
  }

  isRight(): this is Right<L, R> {
    return true;
  }
}