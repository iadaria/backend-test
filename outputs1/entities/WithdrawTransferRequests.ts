import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("WithdrawTransferRequests_pkey", ["id"], { unique: true })
@Entity("WithdrawTransferRequests", { schema: "public" })
export class WithdrawTransferRequests {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("integer", { name: "account_id" })
  accountId: number;

  @Column("numeric", {
    name: "course",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  course: string | null;

  @Column("numeric", {
    name: "spent_amount",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  spentAmount: string | null;

  @Column("numeric", {
    name: "spent_fee",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  spentFee: string | null;

  @Column("numeric", {
    name: "spent_cost",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  spentCost: string | null;

  @Column("character varying", {
    name: "spent_fund",
    nullable: true,
    length: 255,
  })
  spentFund: string | null;

  @Column("numeric", {
    name: "usd_equiualent",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  usdEquiualent: string | null;

  @Column("character varying", {
    name: "target_type",
    nullable: true,
    length: 255,
  })
  targetType: string | null;

  @Column("character varying", {
    name: "target_blockchain",
    nullable: true,
    length: 255,
  })
  targetBlockchain: string | null;

  @Column("character varying", {
    name: "target_address",
    nullable: true,
    length: 255,
  })
  targetAddress: string | null;

  @Column("numeric", {
    name: "target_amount",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  targetAmount: string | null;

  @Column("numeric", {
    name: "target_fee",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  targetFee: string | null;

  @Column("jsonb", { name: "payload", nullable: true })
  payload: object | null;

  @Column("character varying", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("jsonb", { name: "meta", nullable: true })
  meta: object | null;

  @Column("integer", { name: "verifier_id", nullable: true })
  verifierId: number | null;

  @Column("integer", { name: "denier_id", nullable: true })
  denierId: number | null;

  @Column("timestamp with time zone", { name: "denied_at", nullable: true })
  deniedAt: Date | null;

  @Column("text", { name: "deny_reason", nullable: true })
  denyReason: string | null;

  @Column("timestamp with time zone", { name: "processed_at", nullable: true })
  processedAt: Date | null;

  @Column("boolean", { name: "verified", default: () => "false" })
  verified: boolean;

  @Column("timestamp with time zone", { name: "verified_at", nullable: true })
  verifiedAt: Date | null;

  @Column("character varying", { name: "hash", nullable: true, length: 255 })
  hash: string | null;

  @Column("character varying", {
    name: "transaction_type",
    nullable: true,
    length: 255,
  })
  transactionType: string | null;

  @Column("integer", { name: "job_id", nullable: true })
  jobId: number | null;

  @Column("numeric", {
    name: "blockchain_amount",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  blockchainAmount: string | null;

  @Column("character varying", {
    name: "leading_field",
    nullable: true,
    length: 255,
  })
  leadingField: string | null;

  @Column("boolean", { name: "is_suspicious", nullable: true })
  isSuspicious: boolean | null;

  @Column("timestamp with time zone", { name: "delayed_to", nullable: true })
  delayedTo: Date | null;
}
