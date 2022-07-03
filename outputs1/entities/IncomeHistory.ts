import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IncomeHistory_pkey", ["id"], { unique: true })
@Entity("IncomeHistory", { schema: "public" })
export class IncomeHistory {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("numeric", { name: "usdt", precision: 80, scale: 40 })
  usdt: string;

  @Column("numeric", { name: "eth", precision: 80, scale: 40 })
  eth: string;

  @Column("numeric", { name: "btc", precision: 80, scale: 40 })
  btc: string;

  @Column("numeric", { name: "usdt_equivalent", precision: 80, scale: 40 })
  usdtEquivalent: string;

  @Column("integer", { name: "account_id" })
  accountId: number;

  @Column("character varying", { name: "date", length: 255 })
  date: string;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
