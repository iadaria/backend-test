import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./Accounts";

@Entity("StructureHistory", { schema: "public" })
export class StructureHistory {
  @Column("integer", { name: "level", nullable: true })
  level: number | null;

  @Column("numeric", { name: "btc", nullable: true, precision: 100, scale: 40 })
  btc: string | null;

  @Column("numeric", { name: "eth", nullable: true, precision: 100, scale: 40 })
  eth: string | null;

  @Column("numeric", {
    name: "usdt",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  usdt: string | null;

  @Column("numeric", {
    name: "sum_equivalent_to_usdt",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  sumEquivalentToUsdt: string | null;

  @Column("timestamp with time zone", {
    name: "createdAt",
    nullable: true,
    default: () => "now()",
  })
  createdAt: Date | null;

  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp with time zone", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Accounts, (accounts) => accounts.structureHistories)
  @JoinColumn([{ name: "root_id", referencedColumnName: "id" }])
  root: Accounts;
}
