import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("SSOPartners_pkey", ["id"], { unique: true })
@Entity("SSOPartners", { schema: "public" })
export class SsoPartners {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "url", nullable: true, length: 255 })
  url: string | null;

  @Column("character varying", { name: "hash", nullable: true, length: 255 })
  hash: string | null;

  @Column("boolean", { name: "allowed", nullable: true })
  allowed: boolean | null;

  @Column("jsonb", { name: "config", nullable: true })
  config: object | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
