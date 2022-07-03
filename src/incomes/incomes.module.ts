import { Module } from '@nestjs/common';
import { IncomesService } from './incomes.service';
import { IncomesResolver } from './incomes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Income } from './entities/income.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Income])],
  providers: [IncomesService, IncomesResolver],
  exports: [IncomesService],
})
export class IncomesModule {}
