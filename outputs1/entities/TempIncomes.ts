import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("TempIncomes_pkey", ["id"], { unique: true })
@Entity("TempIncomes", { schema: "public" })
export class TempIncomes {
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

  @Column("boolean", { name: "is_old", nullable: true })
  isOld: boolean | null;

  @Column("integer", { name: "stable_score_id", nullable: true })
  stableScoreId: number | null;

  @Column("integer", { name: "group_id", nullable: true })
  groupId: number | null;

  @Column("integer", { name: "new_stable_score_id", nullable: true })
  newStableScoreId: number | null;

  @Column("character varying", { name: "pay_id", nullable: true, length: 255 })
  payId: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
