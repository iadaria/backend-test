import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./Accounts";
import { Wallets } from "./Wallets";

@Index("transactions_hash_type", ["hash", "type"], { unique: true })
@Index("Transactions_pkey", ["id"], { unique: true })
@Entity("Transactions", { schema: "public" })
export class Transactions {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("enum", {
    name: "type",
    nullable: true,
    enum: ["ethereum", "bitcoin", "usdt_erc20", "usdt_trc20"],
  })
  type: "ethereum" | "bitcoin" | "usdt_erc20" | "usdt_trc20" | null;

  @Column("character varying", { name: "hash", nullable: true, length: 255 })
  hash: string | null;

  @Column("integer", { name: "block_number", nullable: true })
  blockNumber: number | null;

  @Column("jsonb", { name: "info", nullable: true })
  info: object | null;

  @Column("character varying", {
    name: "sender_address",
    nullable: true,
    length: 255,
  })
  senderAddress: string | null;

  @Column("character varying", {
    name: "receiver_address",
    nullable: true,
    length: 255,
  })
  receiverAddress: string | null;

  @Column("numeric", {
    name: "amount",
    nullable: true,
    precision: 80,
    scale: 40,
  })
  amount: string | null;

  @Column("enum", {
    name: "transaction_type",
    nullable: true,
    enum: ["input", "output", "virtual_income", "income"],
  })
  transactionType: "input" | "output" | "virtual_income" | "income" | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("enum", {
    name: "fund",
    nullable: true,
    enum: ["btc", "eth", "usdt", "btc_wallet", "eth_wallet", "usdt_wallet"],
  })
  fund:
    | "btc"
    | "eth"
    | "usdt"
    | "btc_wallet"
    | "eth_wallet"
    | "usdt_wallet"
    | null;

  @Column("numeric", {
    name: "real_amount",
    nullable: true,
    precision: 80,
    scale: 40,
  })
  realAmount: string | null;

  @ManyToOne(() => Accounts, (accounts) => accounts.transactions)
  @JoinColumn([{ name: "receiver_account_id", referencedColumnName: "id" }])
  receiverAccount: Accounts;

  @ManyToOne(() => Wallets, (wallets) => wallets.transactions)
  @JoinColumn([{ name: "receiver_wallet_id", referencedColumnName: "id" }])
  receiverWallet: Wallets;

  @ManyToOne(() => Accounts, (accounts) => accounts.transactions2)
  @JoinColumn([{ name: "sender_account_id", referencedColumnName: "id" }])
  senderAccount: Accounts;

  @ManyToOne(() => Wallets, (wallets) => wallets.transactions2)
  @JoinColumn([{ name: "sender_wallet_id", referencedColumnName: "id" }])
  senderWallet: Wallets;
}
