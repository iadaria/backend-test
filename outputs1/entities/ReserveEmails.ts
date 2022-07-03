import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ReserveEmails_pkey", ["id"], { unique: true })
@Entity("ReserveEmails", { schema: "public" })
export class ReserveEmails {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "parent_id", nullable: true })
  parentId: number | null;

  @Column("character varying", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("character varying", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("boolean", { name: "is_register", nullable: true })
  isRegister: boolean | null;

  @Column("boolean", { name: "is_cancelled", nullable: true })
  isCancelled: boolean | null;

  @Column("character varying", { name: "code", nullable: true, length: 255 })
  code: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
