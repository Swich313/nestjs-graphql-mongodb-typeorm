import { Field, InputType } from '@nestjs/graphql';
import { StudentFields } from './student-fields.enum';
import { IsEnum, IsOptional } from 'class-validator';
import { SortingType } from '../types/sorting-type.enum';

@InputType()
export class GetStudentsFilterDto {
  @Field()
  numberOfStudents?: number = 10;

  @Field()
  offsetStudents?: number = 0;

  @Field( (type) => StudentFields, { nullable: true })
  @IsOptional()
  @IsEnum(StudentFields)
  orderByField: StudentFields;

  @Field((type) => SortingType,{ nullable: true })
  @IsOptional()
  // @IsEnum(SortingType)
  sortingType: SortingType;
}

// @Args('numberOfStudents', { defaultValue: 10 }) numberOfStudents?: number,
// @Args('offsetStudents', { defaultValue: 0 }) offsetStudents?: number,
// @Args('orderByField') orderByField?: StudentFields,
// @Args('orderType', { defaultValue: 'ASC' }) orderType?: 'ASC'
