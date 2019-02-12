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
    category: 'CLOTHES' | 'FOOD' | 'ENTERTAINMENT' | 'EDUCATION' | 'SPORT' | 'DIY' | 'HEALTH' | 'IT' | 'ELECTRONICS' | 'APARTMENT' | 'CHARGES';
}
