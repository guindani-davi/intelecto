export class GetUserDTO {
  id: string;
  email: string;
  name: string;
  surname: string;
  createdAt: Date;
  updatedAt: Date | null;

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
