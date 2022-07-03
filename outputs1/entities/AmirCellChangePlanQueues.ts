import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AmirCells } from "./AmirCells";
import { AmirCellPlan } from "./AmirCellPlan";

@Index("AmirCellChangePlanQueues_pkey", ["id"], { unique: true })
@Entity("AmirCellChangePlanQueues", { schema: "public" })
export class AmirCellChangePlanQueues {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("timestamp with time zone", { name: "deletedAt", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => AmirCells, (amirCells) => amirCells.amirCellChangePlanQueues)
  @JoinColumn([{ name: "amircell_id", referencedColumnName: "id" }])
  amircell: AmirCells;

  @ManyToOne(
    () => AmirCellPlan,
    (amirCellPlan) => amirCellPlan.amirCellChangePlanQueues
  )
  @JoinColumn([{ name: "new_plan_id", referencedColumnName: "id" }])
  newPlan: AmirCellPlan;
}
