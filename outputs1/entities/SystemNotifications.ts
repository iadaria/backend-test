import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("SystemNotifications_pkey", ["id"], { unique: true })
@Entity("SystemNotifications", { schema: "public" })
export class SystemNotifications {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("character varying", {
    name: "next_status",
    nullable: true,
    length: 255,
  })
  nextStatus: string | null;

  @Column("character varying", {
    name: "last_status",
    nullable: true,
    length: 255,
  })
  lastStatus: string | null;

  @Column("character varying", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("character varying", { name: "message", nullable: true, length: 255 })
  message: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("character varying", { name: "type", nullable: true, length: 255 })
  type: string | null;

  @Column("character varying", {
    name: "user_email",
    nullable: true,
    length: 255,
  })
  userEmail: string | null;

  @Column("character varying", {
    name: "time_in_status",
    nullable: true,
    length: 255,
  })
  timeInStatus: string | null;
}
