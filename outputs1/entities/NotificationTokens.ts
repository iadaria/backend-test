import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./Accounts";

@Index("NotificationTokens_pkey", ["id"], { unique: true })
@Entity("NotificationTokens", { schema: "public" })
export class NotificationTokens {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "device_id",
    nullable: true,
    length: 255,
  })
  deviceId: string | null;

  @Column("character varying", {
    name: "device_token",
    nullable: true,
    length: 255,
  })
  deviceToken: string | null;

  @Column("boolean", { name: "is_enabled", nullable: true })
  isEnabled: boolean | null;

  @Column("uuid", { name: "unsubscribe_token", nullable: true })
  unsubscribeToken: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @ManyToOne(() => Accounts, (accounts) => accounts.notificationTokens)
  @JoinColumn([{ name: "account_id", referencedColumnName: "id" }])
  account: Accounts;
}
