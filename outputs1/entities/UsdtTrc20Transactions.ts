import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UsdtTRC20Transactions_pkey", ["id"], { unique: true })
@Index("usdt_trc20_transaction_hash", ["txHash"], { unique: true })
@Entity("UsdtTRC20Transactions", { schema: "public" })
export class UsdtTrc20Transactions {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "address", length: 255 })
  address: string;

  @Column("character varying", { name: "tx_hash", length: 255 })
  txHash: string;

  @Column("integer", { name: "account_id" })
  accountId: number;

  @Column("numeric", { name: "amount", precision: 40, scale: 6 })
  amount: string;

  @Column("boolean", { name: "processed" })
  processed: boolean;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("character varying", {
    name: "out_tx_hash",
    nullable: true,
    length: 255,
  })
  outTxHash: string | null;
}
