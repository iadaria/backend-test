import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./Accounts";

@Index("NotificationQueues_pkey", ["id"], { unique: true })
@Entity("NotificationQueues", { schema: "public" })
export class NotificationQueues {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("character varying", {
    name: "notification_title",
    nullable: true,
    length: 255,
  })
  notificationTitle: string | null;

  @Column("character varying", {
    name: "notification_body",
    nullable: true,
    length: 255,
  })
  notificationBody: string | null;

  @Column("character varying", {
    name: "template_name",
    nullable: true,
    length: 255,
  })
  templateName: string | null;

  @Column("jsonb", { name: "template_params", nullable: true })
  templateParams: object | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("text", { name: "subject", nullable: true })
  subject: string | null;

  @Column("jsonb", { name: "meta", nullable: true })
  meta: object | null;

  @ManyToOne(() => Accounts, (accounts) => accounts.notificationQueues)
  @JoinColumn([{ name: "account_id", referencedColumnName: "id" }])
  account: Accounts;
}
