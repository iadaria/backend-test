import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("BitcoinTransactions_pkey", ["id"], { unique: true })
@Entity("BitcoinTransactions", { schema: "public" })
export class BitcoinTransactions {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("jsonb", { name: "data", nullable: true })
  data: object | null;

  @Column("integer", { name: "block_number", nullable: true })
  blockNumber: number | null;

  @Column("character varying", {
    name: "block_hash",
    nullable: true,
    length: 255,
  })
  blockHash: string | null;

  @Column("character varying", { name: "hash", nullable: true, length: 255 })
  hash: string | null;

  @Column("boolean", { name: "processed", nullable: true })
  processed: boolean | null;

  @Column("numeric", {
    name: "amount",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  amount: string | null;

  @Column("character varying", {
    name: "receiver_address",
    nullable: true,
    length: 255,
  })
  receiverAddress: string | null;

  @Column("character varying", {
    name: "sender_address",
    nullable: true,
    length: 255,
  })
  senderAddress: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
