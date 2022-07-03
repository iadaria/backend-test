import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Settings_pkey", ["id"], { unique: true })
@Entity("Settings", { schema: "public" })
export class Settings {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("jsonb", { name: "data", nullable: true })
  data: object | null;
}
