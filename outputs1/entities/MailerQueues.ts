import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./Accounts";
import { Mailers } from "./Mailers";

@Index("MailerQueues_pkey", ["id"], { unique: true })
@Entity("MailerQueues", { schema: "public" })
export class MailerQueues {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("jsonb", { name: "meta", nullable: true })
  meta: object | null;

  @ManyToOne(() => Accounts, (accounts) => accounts.mailerQueues)
  @JoinColumn([{ name: "account_id", referencedColumnName: "id" }])
  account: Accounts;

  @ManyToOne(() => Mailers, (mailers) => mailers.mailerQueues)
  @JoinColumn([{ name: "mailer_id", referencedColumnName: "id" }])
  mailer: Mailers;
}
