import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserRepositoryDTO {
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public hashedPassword: string;

  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public surname: string;
}
