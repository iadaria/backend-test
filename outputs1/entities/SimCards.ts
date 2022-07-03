import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AmirCells } from "./AmirCells";

@Index("SimCards_pkey", ["id"], { unique: true })
@Index("SimCards_phone_key", ["phone"], { unique: true })
@Index("SimCards_sim_key", ["sim"], { unique: true })
@Entity("SimCards", { schema: "public" })
export class SimCards {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "phone",
    nullable: true,
    unique: true,
    length: 255,
  })
  phone: string | null;

  @Column("character varying", {
    name: "sim",
    nullable: true,
    unique: true,
    length: 255,
  })
  sim: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("integer", { name: "distributor", nullable: true })
  distributor: number | null;

  @OneToMany(() => AmirCells, (amirCells) => amirCells.simcard)
  amirCells: AmirCells[];
}
