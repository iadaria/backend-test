import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./Accounts";

@Index("AccMaxStructs_pkey", ["id"], { unique: true })
@Entity("AccMaxStructs", { schema: "public" })
export class AccMaxStructs {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("double precision", { name: "btc", nullable: true, precision: 53 })
  btc: number | null;

  @Column("double precision", { name: "eth", nullable: true, precision: 53 })
  eth: number | null;

  @Column("double precision", { name: "usdt", nullable: true, precision: 53 })
  usdt: number | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @ManyToOne(() => Accounts, (accounts) => accounts.accMaxStructs)
  @JoinColumn([{ name: "root_id", referencedColumnName: "id" }])
  root: Accounts;
}
