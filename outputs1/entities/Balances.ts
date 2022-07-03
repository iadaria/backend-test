import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Balances_pkey", ["id"], { unique: true })
@Entity("Balances", { schema: "public" })
export class Balances {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "account_id", nullable: true })
  accountId: number | null;

  @Column("character varying", {
    name: "balance_type",
    nullable: true,
    length: 255,
  })
  balanceType: string | null;

  @Column("character varying", {
    name: "transaction_hash",
    nullable: true,
    length: 255,
  })
  transactionHash: string | null;

  @Column("character varying", {
    name: "operation_type",
    nullable: true,
    length: 255,
  })
  operationType: string | null;

  @Column("numeric", {
    name: "amount",
    nullable: true,
    precision: 80,
    scale: 40,
  })
  amount: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
