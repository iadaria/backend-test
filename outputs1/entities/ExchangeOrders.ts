import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./Accounts";
import { ExchangeTransactions } from "./ExchangeTransactions";

@Index("ExchangeOrders_pkey", ["id"], { unique: true })
@Entity("ExchangeOrders", { schema: "public" })
export class ExchangeOrders {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "type", length: 255 })
  type: string;

  @Column("character varying", { name: "status", length: 255 })
  status: string;

  @Column("character varying", { name: "cryptocurrency", length: 255 })
  cryptocurrency: string;

  @Column("character varying", { name: "currency", length: 255 })
  currency: string;

  @Column("numeric", { name: "amount" })
  amount: string;

  @Column("numeric", { name: "price" })
  price: string;

  @Column("numeric", { name: "fee" })
  fee: string;

  @Column("character varying", { name: "targetBank", length: 255 })
  targetBank: string;

  @Column("boolean", { name: "draft", nullable: true, default: () => "false" })
  draft: boolean | null;

  @Column("jsonb", { name: "meta", nullable: true })
  meta: object | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("timestamp with time zone", { name: "deletedAt", nullable: true })
  deletedAt: Date | null;

  @Column("timestamp with time zone", { name: "approvedAt", nullable: true })
  approvedAt: Date | null;

  @Column("integer", { name: "target_order_id", nullable: true })
  targetOrderId: number | null;

  @Column("timestamp with time zone", { name: "expiresAt", nullable: true })
  expiresAt: Date | null;

  @Column("character varying", {
    name: "prev_status",
    nullable: true,
    length: 255,
  })
  prevStatus: string | null;

  @Column("timestamp with time zone", {
    name: "updatedStatusAt",
    nullable: true,
  })
  updatedStatusAt: Date | null;

  @ManyToOne(() => Accounts, (accounts) => accounts.exchangeOrders)
  @JoinColumn([{ name: "account_id", referencedColumnName: "id" }])
  account: Accounts;

  @OneToMany(
    () => ExchangeTransactions,
    (exchangeTransactions) => exchangeTransactions.order
  )
  exchangeTransactions: ExchangeTransactions[];
}
