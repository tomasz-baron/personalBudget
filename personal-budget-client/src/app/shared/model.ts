export interface Account {
    id: string;
    name: string;
    number?: string;
    bankName?: string; 
    interestRate?: number;
    type: AccountTypes;
    included: boolean;
    balance: number;
    initialBalance: number;
    currency: Currency;
}

export interface ShortAccount {
    id: string;
    name: string;
    type: 'ACCOUNT' | 'LOAN' | 'DEPOSIT';
    balance: number;
    currency: Currency;
}

export type AccountTypes = 'CURRENT' | 'SAVINGS' | 'CASH' | 'RETIREMENT';

export enum AccountType {
    CURRENT = 'account.type.current',
    SAVINGS = 'account.type.savings',
    CASH = 'account.type.cash',
    RETIREMENT = 'account.type.retirement',
}

export type Currency = 'PLN' | 'EUR';

export interface Card {
    id: string;
    number: string;
    limit: number;
    cycle: string;
    repaymentAmount?: number;
    funds?: number;
    initialFunds: number;
}

export interface Deposit {
    id: string;
}

export interface Loan {
    id: string;
}

export interface Transaction {
    id: string;
    date: Date;
    description: string;
    type: TransactionTypes;
    fromAccountId?: string;
    toAccountId?: string;
    amount: number;
    currency: Currency;
    category: TransactionCategories;
}

export type TransactionTypes = 'INTERNAL' | 'OUTGOING' | 'INCOMING';
export type TransactionCategories = 'CLOTHES' | 'FOOD' | 'JUNK_FOOD' | 'RESTAURANTS' | 'ALCOHOL' 
| 'ENTERTAINMENT' | 'CULTURE' | 'EDUCATION' | 'SPORT' | 'DIY' | 'HEALTH' | 'BEAUTY' | 'IT' 
| 'ELECTRONICS' | 'APARTMENT_CHARGES' | 'APARTMENT_EQUIPMENT' | 'BUILDING_MATERIALS' | 'INTERNET_PHONE' 
| 'SALARY' | 'REFUND' | 'FAMILY' | 'TRAVELS' | 'GIFTS' 
| 'INTERESTS' | 'TRANSFER' | 'SERVICES' | 'TRANSPORT' | 'BANK_FEES' | 'OTHER';

export enum TransactionType {
    INTERNAL = 'transaction.type.internal',
    OUTGOING = 'transaction.type.outgoing',
    INCOMING = 'transaction.type.incoming',
}

export enum TransactionCategory {
    CLOTHES = 'transaction.category.clothes',
    FOOD = 'transaction.category.food',
    ENTERTAINMENT = 'transaction.category.entertainment',
    EDUCATION = 'transaction.category.education',
    SPORT = 'transaction.category.sport',
    DIY = 'transaction.category.diy',
    HEALTH = 'transaction.category.health',
    IT = 'transaction.category.it',
    ELECTRONICS = 'transaction.category.electronics',
    APARTMENT = 'transaction.category.apartment',
    CHARGES = 'transaction.category.charges',
    SALARY = 'transaction.category.salary',
    REFUND = 'transaction.category.refund',
    FAMILY = 'transaction.category.family',
}

