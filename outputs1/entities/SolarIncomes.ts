import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Orders } from "./Orders";

@Index("SolarIncomes_pkey", ["id"], { unique: true })
@Entity("SolarIncomes", { schema: "public" })
export class SolarIncomes {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("jsonb", { name: "meta", nullable: true })
  meta: object | null;

  @Column("numeric", { name: "amount" })
  amount: string;

  @Column("integer", { name: "account_id" })
  accountId: number;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("text", { name: "type", nullable: true })
  type: string | null;

  @ManyToOne(() => Orders, (orders) => orders.solarIncomes)
  @JoinColumn([{ name: "order_id", referencedColumnName: "id" }])
  order: Orders;
}
