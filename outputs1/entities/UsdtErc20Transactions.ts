import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UsdtERC20Transactions_pkey", ["id"], { unique: true })
@Index("UsdtERC20Transactions_tx_hash_key", ["txHash"], { unique: true })
@Entity("UsdtERC20Transactions", { schema: "public" })
export class UsdtErc20Transactions {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "address", nullable: true, length: 255 })
  address: string | null;

  @Column("character varying", {
    name: "tx_hash",
    nullable: true,
    unique: true,
    length: 255,
  })
  txHash: string | null;

  @Column("integer", { name: "account_id", nullable: true })
  accountId: number | null;

  @Column("numeric", {
    name: "amount",
    nullable: true,
    precision: 40,
    scale: 6,
  })
  amount: string | null;

  @Column("boolean", { name: "processed" })
  processed: boolean;

  @Column("character varying", {
    name: "ether_fee_tx",
    nullable: true,
    length: 255,
  })
  etherFeeTx: string | null;

  @Column("timestamp with time zone", {
    name: "ether_fee_tx_timestamp",
    nullable: true,
  })
  etherFeeTxTimestamp: Date | null;

  @Column("character varying", {
    name: "token_out_tx",
    nullable: true,
    length: 255,
  })
  tokenOutTx: string | null;

  @Column("timestamp with time zone", {
    name: "token_out_tx_timestamp",
    nullable: true,
  })
  tokenOutTxTimestamp: Date | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
