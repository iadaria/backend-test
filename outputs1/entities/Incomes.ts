import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Incomes_createdAt_idx", ["createdAt"], {})
@Index("Incomes_pkey", ["id"], { unique: true })
@Entity("Incomes", { schema: "public" })
export class Incomes {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "account_id", nullable: true })
  accountId: number | null;

  @Column("character varying", { name: "type", nullable: true, length: 255 })
  type: string | null;

  @Column("character varying", { name: "fund", nullable: true, length: 255 })
  fund: string | null;

  @Column("jsonb", { name: "meta", nullable: true })
  meta: object | null;

  @Column("numeric", {
    name: "amount",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  amount: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("boolean", { name: "is_old", nullable: true, default: () => "false" })
  isOld: boolean | null;

  @Column("integer", { name: "stable_score_id", nullable: true })
  stableScoreId: number | null;

  @Column("integer", { name: "group_id", nullable: true })
  groupId: number | null;

  @Column("boolean", { name: "is_new_stable_score", default: () => "false" })
  isNewStableScore: boolean;

  @Column("integer", { name: "new_stable_score_id", nullable: true })
  newStableScoreId: number | null;

  @Column("character varying", { name: "pay_id", nullable: true, length: 255 })
  payId: string | null;
}
