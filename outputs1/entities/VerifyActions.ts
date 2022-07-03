import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./Accounts";
import { SumSubActions } from "./SumSubActions";

@Index("VerifyActions_pkey", ["id"], { unique: true })
@Entity("VerifyActions", { schema: "public" })
export class VerifyActions {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("enum", { name: "type", enum: ["withdraw", "p2p_exchange"] })
  type: "withdraw" | "p2p_exchange";

  @Column("enum", { name: "stage", enum: ["2fa", "kyc"] })
  stage: "2fa" | "kyc";

  @Column("jsonb", { name: "payload", nullable: true })
  payload: object | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @ManyToOne(() => Accounts, (accounts) => accounts.verifyActions)
  @JoinColumn([{ name: "account_id", referencedColumnName: "id" }])
  account: Accounts;

  @ManyToOne(
    () => SumSubActions,
    (sumSubActions) => sumSubActions.verifyActions
  )
  @JoinColumn([{ name: "sum_sub_action_id", referencedColumnName: "id" }])
  sumSubAction: SumSubActions;
}
