import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("child_id_unique", ["childId"], { unique: true })
@Index("Refferals_pkey", ["id"], { unique: true })
@Entity("Refferals", { schema: "public" })
export class Refferals {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "parent_id", nullable: true })
  parentId: number | null;

  @Column("integer", { name: "child_id", nullable: true })
  childId: number | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
