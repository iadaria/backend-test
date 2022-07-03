import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("WithdrawRequests_pkey", ["id"], { unique: true })
@Entity("WithdrawRequests", { schema: "public" })
export class WithdrawRequests {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "account_id", nullable: true })
  accountId: number | null;

  @Column("numeric", {
    name: "amount",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  amount: string | null;

  @Column("enum", {
    name: "fund",
    nullable: true,
    enum: ["btc", "eth", "usdt", "btc_wallet", "eth_wallet", "usdt_wallet"],
  })
  fund:
    | "btc"
    | "eth"
    | "usdt"
    | "btc_wallet"
    | "eth_wallet"
    | "usdt_wallet"
    | null;

  @Column("boolean", { name: "verified", default: () => "false" })
  verified: boolean;

  @Column("boolean", { name: "canceled", nullable: true })
  canceled: boolean | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("numeric", { name: "fee", nullable: true, precision: 100, scale: 40 })
  fee: string | null;

  @Column("integer", { name: "verifier_id", nullable: true })
  verifierId: number | null;

  @Column("timestamp with time zone", { name: "verifier_at", nullable: true })
  verifierAt: Date | null;

  @Column("integer", { name: "denier_id", nullable: true })
  denierId: number | null;

  @Column("integer", { name: "denied", nullable: true })
  denied: number | null;

  @Column("timestamp with time zone", { name: "denied_at", nullable: true })
  deniedAt: Date | null;

  @Column("text", { name: "deny_reason", nullable: true })
  denyReason: string | null;

  @Column("enum", {
    name: "type",
    nullable: true,
    enum: ["bitcoin", "ethereum"],
  })
  type: "bitcoin" | "ethereum" | null;

  @Column("character varying", { name: "address", nullable: true, length: 255 })
  address: string | null;

  @Column("character varying", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("timestamp with time zone", { name: "processed_at", nullable: true })
  processedAt: Date | null;

  @Column("character varying", { name: "hash", nullable: true, length: 255 })
  hash: string | null;

  @Column("numeric", {
    name: "real_amount",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  realAmount: string | null;

  @Column("numeric", {
    name: "real_fee",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  realFee: string | null;

  @Column("numeric", {
    name: "real_cost",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  realCost: string | null;
}
