import { GetIncomeOutput, GetIncomeInput } from './dtos/get-income.dto';
import { Income } from './entities/income.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class IncomesService {
    constructor(
        @InjectRepository(Income)
        private readonly incomes: Repository<Income>,
      ) {}

    async findOneById({ id }: GetIncomeInput): Promise<GetIncomeOutput> {
        try {
            const income = await this.incomes.findOne(id);/*  { relations: ['account'] } */
            if (!income) {
              return { ok: false, error: 'Income not found' };
            }
            return { ok: true, income };
          } catch {
            return { ok: false, error: 'Could not load income ' };
          }
    }
}
