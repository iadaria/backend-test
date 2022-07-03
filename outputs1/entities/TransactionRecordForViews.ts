import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("TransactionRecordForViews_pkey", ["id"], { unique: true })
@Entity("TransactionRecordForViews", { schema: "public" })
export class TransactionRecordForViews {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "account_id", nullable: true })
  accountId: number | null;

  @Column("integer", { name: "height", nullable: true })
  height: number | null;

  @Column("character varying", { name: "tx_id", nullable: true, length: 255 })
  txId: string | null;

  @Column("character varying", { name: "from", nullable: true, length: 255 })
  from: string | null;

  @Column("character varying", { name: "to", nullable: true, length: 255 })
  to: string | null;

  @Column("character varying", { name: "value", nullable: true, length: 255 })
  value: string | null;

  @Column("integer", { name: "confirmations", nullable: true })
  confirmations: number | null;

  @Column("boolean", { name: "confirmed", nullable: true })
  confirmed: boolean | null;

  @Column("enum", {
    name: "currency",
    nullable: true,
    enum: ["btc", "eth", "usdt"],
  })
  currency: "btc" | "eth" | "usdt" | null;

  @Column("timestamp with time zone", { name: "date_sent", nullable: true })
  dateSent: Date | null;

  @Column("enum", {
    name: "status",
    nullable: true,
    enum: ["Pending", "Confirmed", "Confirming", "Failed"],
  })
  status: "Pending" | "Confirmed" | "Confirming" | "Failed" | null;

  @Column("integer", { name: "confirmations_required", nullable: true })
  confirmationsRequired: number | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
