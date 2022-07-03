import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Sunnybooks } from "./Sunnybooks";

@Index("NewStableScores_pkey", ["id"], { unique: true })
@Entity("NewStableScores", { schema: "public" })
export class NewStableScores {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "account_id", nullable: true })
  accountId: number | null;

  @Column("integer", { name: "term", nullable: true })
  term: number | null;

  @Column("jsonb", { name: "meta", nullable: true })
  meta: object | null;

  @Column("numeric", {
    name: "amount",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  amount: string | null;

  @Column("numeric", {
    name: "base_amount",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  baseAmount: string | null;

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

  @Column("numeric", {
    name: "month_income",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  monthIncome: string | null;

  @Column("character varying", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("boolean", { name: "is_capitalization", nullable: true })
  isCapitalization: boolean | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("boolean", { name: "is_promo", default: () => "false" })
  isPromo: boolean;

  @Column("boolean", { name: "is_promo_bonus_claimed", nullable: true })
  isPromoBonusClaimed: boolean | null;

  @Column("character varying", {
    name: "partner_email",
    nullable: true,
    length: 255,
  })
  partnerEmail: string | null;

  @Column("enum", {
    name: "currency",
    nullable: true,
    enum: ["btc", "eth", "usdt"],
  })
  currency: "btc" | "eth" | "usdt" | null;

  @OneToMany(() => Sunnybooks, (sunnybooks) => sunnybooks.newStableScore)
  sunnybooks: Sunnybooks[];
}
