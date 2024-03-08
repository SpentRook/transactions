import crypto from "node:crypto";
export class WalletEntity {
  id: string;
  name: string;
  userId: number;
  amount: number;
  createdAt: Date;

  constructor(name: string, userId: number, amount: number = 0) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.userId = userId;
    this.amount = amount;
    this.createdAt = new Date();
  }
}
