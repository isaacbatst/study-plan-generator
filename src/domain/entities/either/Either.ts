export class Either<L, R> {
  private constructor(
    private readonly left?: L,
    private readonly right?: R,
  ) {}

  static left<L, R>(value: L): Either<L, R> {
    return new Either<L, R>(value, undefined);
  }

  static right<L, R>(value: R): Either<L, R> {
    return new Either<L, R>(undefined, value);
  }

  isLeft(): boolean {
    return this.left !== undefined;
  }

  isRight(): boolean {
    return this.right !== undefined;
  }

  getLeft(): L {
    if (this.left === undefined) {
      throw new Error("Cannot get left value of a Right");
    }
    return this.left;
  }

  getRight(): R {
    if (this.right === undefined) {
      throw new Error("Cannot get right value of a Left");
    }
    return this.right;
  }
}
