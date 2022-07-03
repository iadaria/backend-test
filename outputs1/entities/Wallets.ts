import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TransactionQueues } from "./TransactionQueues";
import { Transactions } from "./Transactions";

@Index("wallet_unique_address_type", ["address", "type"], { unique: true })
@Index("Wallets_pkey", ["id"], { unique: true })
@Entity("Wallets", { schema: "public" })
export class Wallets {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("enum", { name: "type", enum: ["bitcoin", "ethereum", "usdt"] })
  type: "bitcoin" | "ethereum" | "usdt";

  @Column("integer", { name: "block_number_created" })
  blockNumberCreated: number;

  @Column("character varying", { name: "private_key", length: 255 })
  privateKey: string;

  @Column("character varying", { name: "address", length: 255 })
  address: string;

  @Column("integer", { name: "account_id", nullable: true })
  accountId: number | null;

  @Column("boolean", { name: "suspicious", default: () => "false" })
  suspicious: boolean;

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

  @Column("boolean", { name: "is_stable", nullable: true })
  isStable: boolean | null;

  @OneToMany(
    () => TransactionQueues,
    (transactionQueues) => transactionQueues.wallet
  )
  transactionQueues: TransactionQueues[];

  @OneToMany(() => Transactions, (transactions) => transactions.receiverWallet)
  transactions: Transactions[];

  @OneToMany(() => Transactions, (transactions) => transactions.senderWallet)
  transactions2: Transactions[];
}
