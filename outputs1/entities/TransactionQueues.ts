import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Wallets } from "./Wallets";

@Index("TransactionQueues_pkey", ["id"], { unique: true })
@Index(
  "transaction_queues_tx_hash_out_n_out_value",
  ["outN", "outValue", "txHash"],
  { unique: true }
)
@Entity("TransactionQueues", { schema: "public" })
export class TransactionQueues {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "tx_hash", length: 255 })
  txHash: string;

  @Column("integer", { name: "out_n" })
  outN: number;

  @Column("numeric", { name: "out_value", precision: 80, scale: 40 })
  outValue: string;

  @Column("enum", {
    name: "status",
    nullable: true,
    enum: ["sent", "waiting", "failed", "sending"],
  })
  status: "sent" | "waiting" | "failed" | "sending" | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("timestamp with time zone", { name: "deletedAt", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => Wallets, (wallets) => wallets.transactionQueues)
  @JoinColumn([{ name: "wallet_id", referencedColumnName: "id" }])
  wallet: Wallets;
}
