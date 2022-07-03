import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./Accounts";

@Index("WithdrawTransferGroups_pkey", ["id"], { unique: true })
@Entity("WithdrawTransferGroups", { schema: "public" })
export class WithdrawTransferGroups {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("numeric", {
    name: "spent_amount",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  spentAmount: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("timestamp with time zone", { name: "withdraw_date", nullable: true })
  withdrawDate: Date | null;

  @Column("int4", {
    name: "withdraw_transfer_request_ids",
    nullable: true,
    array: true,
  })
  withdrawTransferRequestIds: number[] | null;

  @Column("jsonb", { name: "meta", nullable: true })
  meta: object | null;

  @ManyToOne(() => Accounts, (accounts) => accounts.withdrawTransferGroups)
  @JoinColumn([{ name: "account_id", referencedColumnName: "id" }])
  account: Accounts;
}
