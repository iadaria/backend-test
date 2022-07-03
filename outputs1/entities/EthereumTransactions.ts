import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("eth_transaction_hash", ["hash"], { unique: true })
@Index("EthereumTransactions_pkey", ["id"], { unique: true })
@Entity("EthereumTransactions", { schema: "public" })
export class EthereumTransactions {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "hash", length: 255 })
  hash: string;

  @Column("integer", { name: "block_number" })
  blockNumber: number;

  @Column("boolean", { name: "sent", default: () => "false" })
  sent: boolean;

  @Column("boolean", { name: "processed", default: () => "false" })
  processed: boolean;

  @Column("jsonb", { name: "info" })
  info: object;

  @Column("character varying", { name: "receiver_address", length: 255 })
  receiverAddress: string;

  @Column("character varying", { name: "sender_address", length: 255 })
  senderAddress: string;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
