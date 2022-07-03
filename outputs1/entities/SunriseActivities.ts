import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./Accounts";

@Index("SunriseActivities_pkey", ["id"], { unique: true })
@Entity("SunriseActivities", { schema: "public" })
export class SunriseActivities {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "bronze" })
  bronze: number;

  @Column("integer", { name: "silver" })
  silver: number;

  @Column("integer", { name: "gold" })
  gold: number;

  @Column("integer", { name: "platinum" })
  platinum: number;

  @Column("integer", { name: "brilliant" })
  brilliant: number;

  @Column("numeric", { name: "structure_btc", precision: 100, scale: 40 })
  structureBtc: string;

  @Column("numeric", { name: "structure_eth", precision: 100, scale: 40 })
  structureEth: string;

  @Column("numeric", { name: "structure_usdt", precision: 100, scale: 40 })
  structureUsdt: string;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("integer", { name: "kyc", nullable: true })
  kyc: number | null;

  @ManyToOne(() => Accounts, (accounts) => accounts.sunriseActivities)
  @JoinColumn([{ name: "account_id", referencedColumnName: "id" }])
  account: Accounts;
}
