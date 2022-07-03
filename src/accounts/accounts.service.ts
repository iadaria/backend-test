import { Account } from 'src/accounts/entities/account.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AccountsService {
    constructor(
        @InjectRepository(Account)
        private readonly orders: Repository<Account>
    ){}
}
