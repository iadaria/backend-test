import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ReceiverTransactions_pkey", ["id"], { unique: true })
@Entity("ReceiverTransactions", { schema: "public" })
export class ReceiverTransactions {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "address", nullable: true, length: 255 })
  address: string | null;

  @Column("character varying", { name: "hash", nullable: true, length: 255 })
  hash: string | null;

  @Column("integer", { name: "account_id", nullable: true })
  accountId: number | null;

  @Column("jsonb", { name: "values", nullable: true })
  values: object | null;

  @Column("jsonb", { name: "transaction", nullable: true })
  transaction: object | null;

  @Column("character varying", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("character varying", { name: "type", nullable: true, length: 255 })
  type: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
