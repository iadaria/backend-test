import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./Accounts";
import { NewStableScores } from "./NewStableScores";

@Index("Sunnybooks_pkey", ["id"], { unique: true })
@Entity("Sunnybooks", { schema: "public" })
export class Sunnybooks {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("boolean", {
    name: "checked",
    nullable: true,
    default: () => "false",
  })
  checked: boolean | null;

  @Column("timestamp with time zone", { name: "deletedAt", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => Accounts, (accounts) => accounts.sunnybooks)
  @JoinColumn([{ name: "account_id", referencedColumnName: "id" }])
  account: Accounts;

  @ManyToOne(
    () => NewStableScores,
    (newStableScores) => newStableScores.sunnybooks
  )
  @JoinColumn([{ name: "new_stable_score_id", referencedColumnName: "id" }])
  newStableScore: NewStableScores;
}
