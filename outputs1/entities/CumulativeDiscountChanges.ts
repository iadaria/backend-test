import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./Accounts";

@Index("CumulativeDiscountChanges_pkey", ["id"], { unique: true })
@Entity("CumulativeDiscountChanges", { schema: "public" })
export class CumulativeDiscountChanges {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("enum", {
    name: "product",
    enum: ["Amir Travel", "Amir Guard", "Amir Smart"],
  })
  product: "Amir Travel" | "Amir Guard" | "Amir Smart";

  @Column("integer", { name: "change_amount" })
  changeAmount: number;

  @Column("character varying", { name: "reason", nullable: true, length: 255 })
  reason: string | null;

  @Column("integer", { name: "balance" })
  balance: number;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @ManyToOne(() => Accounts, (accounts) => accounts.cumulativeDiscountChanges)
  @JoinColumn([{ name: "account_id", referencedColumnName: "id" }])
  account: Accounts;

  @ManyToOne(() => Accounts, (accounts) => accounts.cumulativeDiscountChanges2)
  @JoinColumn([{ name: "changer_id", referencedColumnName: "id" }])
  changer: Accounts;
}
