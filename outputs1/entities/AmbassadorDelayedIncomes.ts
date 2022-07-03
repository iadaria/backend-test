import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./Accounts";

@Index("AmbassadorDelayedIncomes_pkey", ["id"], { unique: true })
@Entity("AmbassadorDelayedIncomes", { schema: "public" })
export class AmbassadorDelayedIncomes {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("numeric", {
    name: "amount",
    nullable: true,
    precision: 80,
    scale: 40,
  })
  amount: string | null;

  @Column("integer", { name: "line", nullable: true })
  line: number | null;

  @Column("integer", { name: "refferal_id", nullable: true })
  refferalId: number | null;

  @Column("integer", { name: "income_id", nullable: true })
  incomeId: number | null;

  @Column("boolean", { name: "payed", nullable: true })
  payed: boolean | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @ManyToOne(() => Accounts, (accounts) => accounts.ambassadorDelayedIncomes)
  @JoinColumn([{ name: "ambassador_id", referencedColumnName: "id" }])
  ambassador: Accounts;
}
