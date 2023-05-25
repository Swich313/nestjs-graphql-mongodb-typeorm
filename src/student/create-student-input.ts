import { Field, InputType } from '@nestjs/graphql';
import { MinLength, IsString } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @MinLength(2)
  @IsString()
  @Field()
  firstName: string;

  @MinLength(2)
  @IsString()
  @Field()
  lastName: string;
}
