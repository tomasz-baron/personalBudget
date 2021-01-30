import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { Account } from 'src/model';

@Controller('accounts')
export class AccountsController {

    @Get()
    findAll(@Req() request: Request): Account[] {
        return [];
    }
}
