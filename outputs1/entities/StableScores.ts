import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("StableScores_pkey", ["id"], { unique: true })
@Entity("StableScores", { schema: "public" })
export class StableScores {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("numeric", {
    name: "amount",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  amount: string | null;

  @Column("integer", { name: "account_id", nullable: true })
  accountId: number | null;

  @Column("character varying", { name: "type", nullable: true, length: 255 })
  type: string | null;

  @Column("integer", { name: "term", nullable: true })
  term: number | null;

  @Column("boolean", { name: "is_ended", nullable: true })
  isEnded: boolean | null;

  @Column("boolean", { name: "is_self_ended", nullable: true })
  isSelfEnded: boolean | null;

  @Column("timestamp with time zone", { name: "date_end", nullable: true })
  dateEnd: Date | null;

  @Column("numeric", {
    name: "deposit_amount",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  depositAmount: string | null;

  @Column("jsonb", { name: "meta", nullable: true })
  meta: object | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("numeric", { name: "month_income", precision: 100, scale: 40 })
  monthIncome: string;

  @Column("numeric", {
    name: "base_amount",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  baseAmount: string | null;

  @Column("character varying", { name: "title", nullable: true, length: 255 })
  title: string | null;
}
