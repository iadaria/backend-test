import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PreDeviceTokens_pkey", ["id"], { unique: true })
@Entity("PreDeviceTokens", { schema: "public" })
export class PreDeviceTokens {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "code", length: 255 })
  code: string;

  @Column("character varying", { name: "token", length: 255 })
  token: string;

  @Column("integer", { name: "account_id" })
  accountId: number;

  @Column("boolean", { name: "used", nullable: true })
  used: boolean | null;

  @Column("timestamp with time zone", { name: "expired_at" })
  expiredAt: Date;

  @Column("jsonb", { name: "meta", nullable: true })
  meta: object | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("integer", { name: "try_count", default: () => "0" })
  tryCount: number;
}
