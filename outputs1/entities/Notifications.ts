import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./Accounts";
import { UserNotifications } from "./UserNotifications";

@Index("Notifications_pkey", ["id"], { unique: true })
@Entity("Notifications", { schema: "public" })
export class Notifications {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("character varying", { name: "type", nullable: true, length: 255 })
  type: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("date", { name: "date_end", nullable: true })
  dateEnd: string | null;

  @Column("character varying", {
    name: "en_title",
    nullable: true,
    length: 255,
  })
  enTitle: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("character varying", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("boolean", { name: "active", nullable: true })
  active: boolean | null;

  @Column("character varying", { name: "url", nullable: true, length: 255 })
  url: string | null;

  @Column("text", { name: "en_description", nullable: true })
  enDescription: string | null;

  @ManyToOne(() => Accounts, (accounts) => accounts.notifications)
  @JoinColumn([{ name: "creator_id", referencedColumnName: "id" }])
  creator: Accounts;

  @OneToMany(
    () => UserNotifications,
    (userNotifications) => userNotifications.notification
  )
  userNotifications: UserNotifications[];
}
