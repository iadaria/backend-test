import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("DeviceTokens_pkey", ["id"], { unique: true })
@Entity("DeviceTokens", { schema: "public" })
export class DeviceTokens {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "token", nullable: true, length: 255 })
  token: string | null;

  @Column("character varying", { name: "hash", nullable: true, length: 255 })
  hash: string | null;

  @Column("jsonb", { name: "headers", nullable: true })
  headers: object | null;

  @Column("jsonb", { name: "meta", nullable: true })
  meta: object | null;

  @Column("character varying", { name: "ip", nullable: true, length: 255 })
  ip: string | null;

  @Column("integer", { name: "account_id", nullable: true })
  accountId: number | null;

  @Column("boolean", { name: "enabled", nullable: true })
  enabled: boolean | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
