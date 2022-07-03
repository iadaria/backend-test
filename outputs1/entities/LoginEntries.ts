import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("LoginEntries_pkey", ["id"], { unique: true })
@Entity("LoginEntries", { schema: "public" })
export class LoginEntries {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "token", nullable: true })
  token: number | null;

  @Column("jsonb", { name: "headers", nullable: true })
  headers: object | null;

  @Column("jsonb", { name: "meta", nullable: true })
  meta: object | null;

  @Column("character varying", { name: "ip", nullable: true, length: 255 })
  ip: string | null;

  @Column("integer", { name: "account_id", nullable: true })
  accountId: number | null;

  @Column("boolean", { name: "suspicious", nullable: true })
  suspicious: boolean | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
