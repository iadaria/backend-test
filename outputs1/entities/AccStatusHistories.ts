import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./Accounts";

@Index("AccStatusHistories_pkey", ["id"], { unique: true })
@Entity("AccStatusHistories", { schema: "public" })
export class AccStatusHistories {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("integer", { name: "kyc_only", nullable: true })
  kycOnly: number | null;

  @Column("integer", { name: "spark", nullable: true })
  spark: number | null;

  @Column("integer", { name: "ray", nullable: true })
  ray: number | null;

  @Column("integer", { name: "light", nullable: true })
  light: number | null;

  @Column("integer", { name: "shine", nullable: true })
  shine: number | null;

  @Column("integer", { name: "sun", nullable: true })
  sun: number | null;

  @Column("jsonb", { name: "meta", nullable: true })
  meta: object | null;

  @ManyToOne(() => Accounts, (accounts) => accounts.accStatusHistories)
  @JoinColumn([{ name: "root_id", referencedColumnName: "id" }])
  root: Accounts;
}
