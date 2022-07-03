import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ApiKeys_pkey", ["id"], { unique: true })
@Entity("ApiKeys", { schema: "public" })
export class ApiKeys {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "type", nullable: true, length: 255 })
  type: string | null;

  @Column("character varying", { name: "fund", nullable: true, length: 255 })
  fund: string | null;

  @Column("character varying", {
    name: "public_key",
    nullable: true,
    length: 255,
  })
  publicKey: string | null;

  @Column("character varying", {
    name: "private_key",
    nullable: true,
    length: 255,
  })
  privateKey: string | null;

  @Column("jsonb", { name: "data", nullable: true })
  data: object | null;

  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
