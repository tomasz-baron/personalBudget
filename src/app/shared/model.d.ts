export interface Account {
    id: string;
    name: string;
    number?: string;
    bankName?: string;
    currency: string;
    interestRate?: number;
    type: 'CURRENT' | 'SAVINGS' | 'CASH' | 'RETIREMENT';
    balance?: number;
    initialBalance: number;
}

export interface Card {
    id: string;
    number: string;
    funds: number;
    limit: number;
    cycle: string;
    repayment: number;
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
    category: 'CLOTHES' | 'FOOD' | 'ENTERTAINMENT' | 'EDUCATION' | 'SPORT' | 'DIY' | 'HEALTH' | 'IT' | 'ELECTRONICS' | 'APARTMENT' | 'CHARGES';
}
