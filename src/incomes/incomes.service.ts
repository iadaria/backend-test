import { FUNDS, TYPES } from './../common/common.constants';
import { GetBalanceOutput, GetBalanceInput } from './dtos/get-balance.dto';
import { GetIncomeOutput, GetIncomeInput } from './dtos/get-income.dto';
import { Income } from './entities/income.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Not, Repository, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class IncomesService {
  constructor(
    @InjectRepository(Income)
    private readonly incomes: Repository<Income>,
  ) { }

  async findOneById({ id }: GetIncomeInput): Promise<GetIncomeOutput> {
    try {
      const income = await this.incomes.findOneBy({ id })
      if (!income) {
        return { ok: false, error: 'Income not found' };
      }
      return { ok: true, income };
    } catch {
      return { ok: false, error: 'Could not load income ' };
    }
  }

  async getBalanceByUser({ id }: GetBalanceInput): Promise<GetBalanceOutput> {
    try {
      const funds = FUNDS;
      const types = TYPES;
      const balance = await this.incomes
      .createQueryBuilder()
      .select(['fund','SUM(amount)'])
      .where("account_id = :id", { id })
      .andWhere("fund IN (:...funds)", { funds })
      .andWhere("type not in (:...types)", { types})
      .groupBy('fund')
      .getRawMany();
      
      if (!balance) {
        return { ok: false, error: 'User not found' };
      }
      return { ok: true, balance };
    } catch {
      return { ok: false, error: 'Could not load income ' };
    }
  }
}

//const incomes = await this.incomes.find({ where: { account: { id }, fund: In(FUNDS), type: Not(In(TYPES)) } });
//const balance: number = incomes.reduce((sum, { amount }) => sum + amount, 0);