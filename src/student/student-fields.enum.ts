import { registerEnumType } from '@nestjs/graphql';

export enum StudentFields {
  FIRSTNAME = 'firstName',
  LASTNAME = 'lastName',
}

registerEnumType(StudentFields, {
  name: 'StudentFields',
});
