export class RequestGetUserByIdDTO {
  public id: string;

  public constructor(id: string) {
    this.id = id;
  }
}

export class RequestGetUserByEmailDTO {
  public email: string;

  public constructor(email: string) {
    this.email = email;
  }
}

export class ResponseGetUserDTO {
  public id: string;
  public email: string;
  public name: string;
  public surname: string;
  public createdAt: Date;
  public updatedAt: Date | null;

  public constructor(
    id: string,
    email: string,
    name: string,
    surname: string,
    createdAt: Date,
    updatedAt: Date | null,
  ) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
