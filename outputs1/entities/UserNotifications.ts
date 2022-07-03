import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./Accounts";
import { Notifications } from "./Notifications";

@Index("UserNotifications_pkey", ["id"], { unique: true })
@Entity("UserNotifications", { schema: "public" })
export class UserNotifications {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp with time zone", { name: "readAt", nullable: true })
  readAt: Date | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @ManyToOne(() => Accounts, (accounts) => accounts.userNotifications)
  @JoinColumn([{ name: "account_id", referencedColumnName: "id" }])
  account: Accounts;

  @ManyToOne(
    () => Notifications,
    (notifications) => notifications.userNotifications
  )
  @JoinColumn([{ name: "notification_id", referencedColumnName: "id" }])
  notification: Notifications;
}
