export interface Account {
    id: string;
    name: string;
    number?: string;
    bankName?: string;
    currency: string;
    interestRate?: number;
    type: 'CURRENT' | 'SAVINGS' | 'CASH' | 'RETIREMENT';
    included: boolean;
    balance: number;
    initialBalance: number;
}

export enum AccountType {
    CURRENT = 'account.type.current',
    SAVINGS = 'account.type.savings',
    CASH = 'account.type.cash',
    RETIREMENT = 'account.type.retirement',
}

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
    type: 'INTERNAL' | 'OUTGOING' | 'INCOMING';
    fromAccountId?: string;
    toAccountId?: string;
    amount: number;
    currency: string;
    category: 'CLOTHES' | 'FOOD' | 'ENTERTAINMENT' | 'EDUCATION' | 'SPORT' | 'DIY' | 'HEALTH' | 'IT' | 'ELECTRONICS' | 'APARTMENT' | 'CHARGES' | 'SALARY' | 'REFUND' | 'FAMILY';
}

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
