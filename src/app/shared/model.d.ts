export interface Account {
    id: string;
    name: string;
    number: string;
    bankName: string;
    currency: string;
    type: 'R' | 'S';
    balance: number;
    startedBalance: number;
}

export interface Card {
    id: string;
    number: string;
    funds: number;
    limit: number;
    cycle: string;
    repayment: number;
}

export interface History {
    date: Date;
    description: string;
    type: 'I' | 'O';
    fromAccountId?: string;
    toAccountId?: string;
    amount: number;
    currency: string;
    category: string;
}
