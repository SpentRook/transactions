import { Request, Response } from "express";
import { WalletRepository } from "../../../internal/wallet/core/repository";
import { WalletEntity } from "../../../internal/wallet/core/entity";

export class WalletController {
    private walletRepository: WalletRepository;

    constructor(walletRepository: WalletRepository) {
        this.walletRepository = walletRepository;
    }
    
    createWallet = async (req: Request, res: Response) => {
        try {
            const { name, userId, amount } = req.body;
            if (!name || !userId) {
                return res.status(400).json({ error: 'Missing fields' });
            }
            if (typeof name !== 'string' || typeof userId !== 'string') {
                return res.status(400).json({ error: 'Invalid fields' });
            }
            const wallet = new WalletEntity(name, userId, amount);
            await this.walletRepository.createWallet(wallet);
            res.status(201).json(wallet);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    listWallets = async (_req: Request, res: Response) => {
        const wallets = await this.walletRepository.listWallets();
        res.status(200).json(wallets);
    }

    getWallet = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const wallet = await this.walletRepository.getWallet(id);
            res.json(wallet);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    updateWallet = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { name, userId, amount } = req.body;
        const wallet = new WalletEntity(name, userId, amount);
        wallet.id = id;
        await this.walletRepository.updateWallet(wallet);
        res.status(200).json(wallet);
    }

    getWalletsByUserId = async (req: Request, res: Response) => {
        const { userId } = req.params;
        const wallet = await this.walletRepository.getWalletsByUserId(userId);
        res.json(wallet);
    }
}