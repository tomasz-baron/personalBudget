import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsController } from './accounts/accounts.controller';
import { CreditCardsController } from './credit-cards/credit-cards.controller';
import { TransactionsController } from './transactions/transactions.controller';
import { CreditCardsService } from './credit-cards/credit-cards.service';
import { AccountsService } from './accounts/accounts.service';
import { TransactionsService } from './transactions/transactions.service';

@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost/nest') ],
  controllers: [AppController, AccountsController, CreditCardsController, TransactionsController],
  providers: [AppService, CreditCardsService, AccountsService, TransactionsService],
})
export class AppModule {}
