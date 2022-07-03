import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PlannedEthTransactions_pkey", ["id"], { unique: true })
@Entity("PlannedEthTransactions", { schema: "public" })
export class PlannedEthTransactions {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "account_id", nullable: true })
  accountId: number | null;

  @Column("character varying", { name: "from", nullable: true, length: 255 })
  from: string | null;

  @Column("character varying", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("integer", { name: "target_height", nullable: true })
  targetHeight: number | null;

  @Column("character varying", { name: "raw_tx", nullable: true, length: 255 })
  rawTx: string | null;

  @Column("character varying", { name: "tx_hash", nullable: true, length: 255 })
  txHash: string | null;

  @Column("character varying", {
    name: "internal_tx_hash",
    nullable: true,
    length: 255,
  })
  internalTxHash: string | null;

  @Column("character varying", {
    name: "previous_tx",
    nullable: true,
    length: 255,
  })
  previousTx: string | null;

  @Column("character varying", { name: "amount", nullable: true, length: 255 })
  amount: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
