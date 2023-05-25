import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Repository } from 'typeorm';

import { Student } from './student.entity';
import { CreateStudentInput } from './create-student-input';
import { GetStudentsFilterDto } from './get-students-filter.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;
    const student = this.studentRepository.create({
      id: uuidv4(),
      firstName,
      lastName,
    });
    return this.studentRepository.save(student);
  }

  async getStudents(
    getStudentsFilterDto: GetStudentsFilterDto,
  ): Promise<Student[]> {
    const { numberOfStudents, offsetStudents, orderByField, sortingType } =
      getStudentsFilterDto;
    return this.studentRepository.find({
      take: numberOfStudents,
      skip: offsetStudents,
      order: {
        [orderByField]: sortingType,
      },
    });
  }

  async getStudent(id: string): Promise<Student> {
    return this.studentRepository.findOneBy({ id });
  }

  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    return this.studentRepository.find({
      where: {
        id: {
          $in: studentIds,
        } as any,
      },
    });
  }
}
