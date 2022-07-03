import { Account } from 'src/accounts/entities/account.entity';
import { Query, Resolver } from '@nestjs/graphql';
import { AccountsService } from './accounts.service';

@Resolver((of) => Account)
export class AccountsResolver {
    constructor(private readonly userService: AccountsService) {}
}
