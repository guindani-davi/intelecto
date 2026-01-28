export abstract class User {
  private readonly id: number;
  private readonly email: string;
  private readonly hashedPassword: string;
  private readonly name: string;
  private readonly surname: string;
  private readonly createdAt: Date;
  private readonly updatedAt: Date;

  public constructor(
    id: number,
    email: string,
    hashedPassword: string,
    name: string,
    surname: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.email = email;
    this.hashedPassword = hashedPassword;
    this.name = name;
    this.surname = surname;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId(): number {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getHashedPassword(): string {
    return this.hashedPassword;
  }

  public getName(): string {
    return this.name;
  }

  public getSurname(): string {
    return this.surname;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }
}
