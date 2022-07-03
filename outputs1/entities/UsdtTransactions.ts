import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UsdtTransactions_pkey", ["id"], { unique: true })
@Entity("UsdtTransactions", { schema: "public" })
export class UsdtTransactions {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "address", nullable: true, length: 255 })
  address: string | null;

  @Column("character varying", { name: "tx_hash", nullable: true, length: 255 })
  txHash: string | null;

  @Column("integer", { name: "account_id", nullable: true })
  accountId: number | null;

  @Column("numeric", {
    name: "amount",
    nullable: true,
    precision: 40,
    scale: 2,
  })
  amount: string | null;

  @Column("character varying", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
