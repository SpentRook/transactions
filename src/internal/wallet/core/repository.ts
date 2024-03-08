import { WalletEntity } from "./entity";

export interface WalletRepository {
    createWallet(wallet: WalletEntity): Promise<void>;
    listWallets(): Promise<WalletEntity[]>;
    getWallet(id: string): Promise<WalletEntity>;
    updateWallet(wallet: WalletEntity): Promise<void>;
    getWalletsByUserId(userId: string): Promise<WalletEntity[]>;
}