import { StudentService } from './student.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './student-type';
import { CreateStudentInput } from './create-student-input';
import { Student } from "./student.entity";
import { StudentFields } from "./student-fields.enum";
import { GetStudentsFilterDto } from "./get-students-filter.dto";

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation((returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }

  @Query((returns) => [StudentType])
  students(
    @Args('getStudentsFilterDto') getStudentsFilterDto: GetStudentsFilterDto,

    // @Args('numberOfStudents', { defaultValue: 10 }) numberOfStudents?: number,
    // @Args('offsetStudents', { defaultValue: 0 }) offsetStudents?: number,
    // @Args('orderByField') orderByField?: StudentFields,
    // @Args('orderType', { defaultValue: 'ASC' }) orderType?: 'ASC' | 'DESC',
  ) {
    return this.studentService.getStudents(getStudentsFilterDto);
  }

  @Query((returns) => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }
}
