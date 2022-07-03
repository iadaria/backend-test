import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MailerQueues } from "./MailerQueues";

@Index("Mailers_pkey", ["id"], { unique: true })
@Entity("Mailers", { schema: "public" })
export class Mailers {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("text", { name: "template" })
  template: string;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("jsonb", { name: "meta", nullable: true })
  meta: object | null;

  @OneToMany(() => MailerQueues, (mailerQueues) => mailerQueues.mailer)
  mailerQueues: MailerQueues[];
}
