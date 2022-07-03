import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Locks_pkey", ["id"], { unique: true })
@Entity("Locks", { schema: "public" })
export class Locks {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
