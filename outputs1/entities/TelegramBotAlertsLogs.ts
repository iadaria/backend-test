import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("TelegramBotAlertsLogs_pkey", ["id"], { unique: true })
@Entity("TelegramBotAlertsLogs", { schema: "public" })
export class TelegramBotAlertsLogs {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "alert_type",
    nullable: true,
    length: 255,
  })
  alertType: string | null;

  @Column("character varying", { name: "text", nullable: true, length: 255 })
  text: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
