import { Column, Entity, Index } from "typeorm";

@Index("AdminActionsLogs_pkey", ["id"], { unique: true })
@Entity("AdminActionsLogs", { schema: "public" })
export class AdminActionsLogs {
  @Column("uuid", { primary: true, name: "id" })
  id: string;

  @Column("integer", { name: "account_id" })
  accountId: number;

  @Column("character varying", { name: "method", length: 255 })
  method: string;

  @Column("character varying", { name: "path", length: 255 })
  path: string;

  @Column("character varying", { name: "ip", length: 255 })
  ip: string;

  @Column("jsonb", { name: "body", nullable: true })
  body: object | null;

  @Column("jsonb", { name: "headers", nullable: true })
  headers: object | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
