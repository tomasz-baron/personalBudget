import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('credit-cards')
export class CreditCardsController {

    @Get()
    findAll(@Req() request: Request) {
        return '';
    }
}
