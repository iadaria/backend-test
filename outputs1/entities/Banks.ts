import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Banks_pkey", ["id"], { unique: true })
@Index("Banks_name_key", ["name"], { unique: true })
@Entity("Banks", { schema: "public" })
export class Banks {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "name",
    nullable: true,
    unique: true,
    length: 255,
  })
  name: string | null;

  @Column("boolean", {
    name: "available",
    nullable: true,
    default: () => "true",
  })
  available: boolean | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("timestamp with time zone", { name: "deletedAt", nullable: true })
  deletedAt: Date | null;
}
