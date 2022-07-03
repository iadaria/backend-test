import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AmirCellChangePlanQueues } from "./AmirCellChangePlanQueues";
import { Accounts } from "./Accounts";
import { AmirCellPlan } from "./AmirCellPlan";
import { SimCards } from "./SimCards";

@Index(
  "amir_cells_account_id_created_at_status",
  ["accountId", "createdAt", "status"],
  {}
)
@Index("AmirCells_pkey", ["id"], { unique: true })
@Entity("AmirCells", { schema: "public" })
export class AmirCells {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "account_id" })
  accountId: number;

  @Column("character varying", { name: "status", length: 255 })
  status: string;

  @Column("text", { name: "comment", nullable: true })
  comment: string | null;

  @Column("boolean", { name: "is_issued", default: () => "false" })
  isIssued: boolean;

  @Column("boolean", { name: "is_ended", default: () => "false" })
  isEnded: boolean;

  @Column("boolean", { name: "is_self_ended", default: () => "false" })
  isSelfEnded: boolean;

  @Column("timestamp with time zone", { name: "date_end", nullable: true })
  dateEnd: Date | null;

  @Column("jsonb", { name: "meta", nullable: true })
  meta: object | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("character varying", {
    name: "delivery_address",
    nullable: true,
    length: 255,
  })
  deliveryAddress: string | null;

  @Column("character varying", {
    name: "fullname",
    nullable: true,
    length: 255,
  })
  fullname: string | null;

  @Column("character varying", { name: "phone", nullable: true, length: 255 })
  phone: string | null;

  @Column("timestamp with time zone", { name: "activated_at", nullable: true })
  activatedAt: Date | null;

  @Column("timestamp with time zone", { name: "canceled_at", nullable: true })
  canceledAt: Date | null;

  @Column("boolean", { name: "in_change", nullable: true })
  inChange: boolean | null;

  @OneToMany(
    () => AmirCellChangePlanQueues,
    (amirCellChangePlanQueues) => amirCellChangePlanQueues.amircell
  )
  amirCellChangePlanQueues: AmirCellChangePlanQueues[];

  @ManyToOne(() => Accounts, (accounts) => accounts.amirCells)
  @JoinColumn([{ name: "account_id", referencedColumnName: "id" }])
  account: Accounts;

  @ManyToOne(() => AmirCellPlan, (amirCellPlan) => amirCellPlan.amirCells)
  @JoinColumn([{ name: "plan_id", referencedColumnName: "id" }])
  plan: AmirCellPlan;

  @ManyToOne(() => SimCards, (simCards) => simCards.amirCells)
  @JoinColumn([{ name: "simcard_id", referencedColumnName: "id" }])
  simcard: SimCards;
}
