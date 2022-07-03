import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("SimCardsNumber_amir_cell_id_key", ["amirCellId"], { unique: true })
@Index("SimCardsNumber_pkey", ["id"], { unique: true })
@Index("SimCardsNumber_number_key", ["number"], { unique: true })
@Entity("SimCardsNumber", { schema: "public" })
export class SimCardsNumber {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "number", unique: true, length: 255 })
  number: string;

  @Column("integer", { name: "amir_cell_id", nullable: true, unique: true })
  amirCellId: number | null;

  @Column("timestamp with time zone", {
    name: "createdAt",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("timestamp with time zone", {
    name: "updatedAt",
    default: () => "now()",
  })
  updatedAt: Date;
}
