import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./Accounts";
import { ExchangeOrders } from "./ExchangeOrders";

@Index("ExchangeTransactions_pkey", ["id"], { unique: true })
@Entity("ExchangeTransactions", { schema: "public" })
export class ExchangeTransactions {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("numeric", { name: "amount" })
  amount: string;

  @Column("numeric", { name: "fee" })
  fee: string;

  @Column("character varying", { name: "status", length: 255 })
  status: string;

  @Column("character varying", { name: "bank_requirements", length: 255 })
  bankRequirements: string;

  @Column("jsonb", { name: "meta", nullable: true })
  meta: object | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("integer", { name: "target_account_id", nullable: true })
  targetAccountId: number | null;

  @Column("text", { name: "receipt", nullable: true })
  receipt: string | null;

  @Column("character varying", {
    name: "bankName",
    nullable: true,
    length: 255,
  })
  bankName: string | null;

  @ManyToOne(() => Accounts, (accounts) => accounts.exchangeTransactions)
  @JoinColumn([{ name: "account_id", referencedColumnName: "id" }])
  account: Accounts;

  @ManyToOne(
    () => ExchangeOrders,
    (exchangeOrders) => exchangeOrders.exchangeTransactions
  )
  @JoinColumn([{ name: "order_id", referencedColumnName: "id" }])
  order: ExchangeOrders;
}
