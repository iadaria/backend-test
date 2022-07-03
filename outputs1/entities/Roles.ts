import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Roles_pkey", ["id"], { unique: true })
@Entity("Roles", { schema: "public" })
export class Roles {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("character varying", { name: "type", nullable: true, length: 255 })
  type: string | null;

  @Column("boolean", { name: "isActive", nullable: true })
  isActive: boolean | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("jsonb", { name: "permissions", nullable: true })
  permissions: object | null;

  @Column("boolean", { name: "status", nullable: true })
  status: boolean | null;
}
