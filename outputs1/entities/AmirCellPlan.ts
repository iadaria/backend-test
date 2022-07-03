import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AmirCellChangePlanQueues } from "./AmirCellChangePlanQueues";
import { AmirCells } from "./AmirCells";

@Index("AmirCellPlan_pkey", ["id"], { unique: true })
@Index("AmirCellPlan_name_key", ["name"], { unique: true })
@Entity("AmirCellPlan", { schema: "public" })
export class AmirCellPlan {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "name",
    nullable: true,
    unique: true,
    length: 255,
  })
  name: string | null;

  @Column("numeric", { name: "price" })
  price: string;

  @Column("timestamp with time zone", { name: "createdAt", nullable: true })
  createdAt: Date | null;

  @Column("timestamp with time zone", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @Column("boolean", { name: "active", nullable: true })
  active: boolean | null;

  @OneToMany(
    () => AmirCellChangePlanQueues,
    (amirCellChangePlanQueues) => amirCellChangePlanQueues.newPlan
  )
  amirCellChangePlanQueues: AmirCellChangePlanQueues[];

  @OneToMany(() => AmirCells, (amirCells) => amirCells.plan)
  amirCells: AmirCells[];
}
