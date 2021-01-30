import { Controller, Get, Req, Post, Param, Body, Query, Delete } from '@nestjs/common';
import { Request } from 'express';
import { Transaction } from 'src/model';

@Controller('transactions')
export class TransactionsController {

    @Post()
    create(@Body() createTransactionDto: Transaction): string {
        return '';
    }

    @Get()
    findAll(@Req() request: Request, @Query() query: string): Transaction[] {
        return [];
    }

    @Get(':id')
    findOne(@Param('id') id): Transaction | string {
        console.log(id);
        return `This action returns a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return '';
    }
}
