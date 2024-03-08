import { WalletEntity } from "../../core/entity";
import { WalletRepository } from "../../core/repository";

export class WalletRepositoryInMemory implements WalletRepository{
    wallets: Map<string, WalletEntity>;
    constructor() {
        this.wallets = new Map();
    }
    async createWallet(wallet: WalletEntity) {
        this.wallets.set(wallet.id, wallet);
    }
    async listWallets() {
        return Array.from(this.wallets.values());
    }
    async getWallet(id: string) {
        const wallet = this.wallets.get(id);
        if (!wallet) {
            throw new Error(`Wallet ${id} not found`);
        }
        return wallet;
    }
    async updateWallet(wallet: WalletEntity) {
        this.wallets.set(wallet.id, wallet);
    }
    async getWalletsByUserId(userId: string) {
        const wallets = Array.from(this.wallets.values()).filter(wallet => wallet.userId === userId);
        return wallets
    }
}