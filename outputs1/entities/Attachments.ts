import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Attachments_pkey", ["id"], { unique: true })
@Entity("Attachments", { schema: "public" })
export class Attachments {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("integer", { name: "account_id", nullable: true })
  accountId: number | null;

  @Column("character varying", {
    name: "file_path",
    nullable: true,
    length: 255,
  })
  filePath: string | null;

  @Column("character varying", { name: "key", nullable: true, length: 255 })
  key: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("character varying", {
    name: "entity_type",
    nullable: true,
    length: 255,
  })
  entityType: string | null;

  @Column("integer", { name: "entity_id", nullable: true })
  entityId: number | null;

  @Column("character varying", {
    name: "storage_type",
    nullable: true,
    length: 255,
  })
  storageType: string | null;

  @Column("character varying", {
    name: "storage_path",
    nullable: true,
    length: 255,
  })
  storagePath: string | null;

  @Column("jsonb", { name: "meta", nullable: true })
  meta: object | null;

  @Column("text", { name: "encryption_key", nullable: true })
  encryptionKey: string | null;
}
