import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("TelegramBotConfigurations_pkey", ["id"], { unique: true })
@Entity("TelegramBotConfigurations", { schema: "public" })
export class TelegramBotConfigurations {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "intis_alerts_channel_id",
    nullable: true,
    length: 255,
  })
  intisAlertsChannelId: string | null;

  @Column("int4", {
    name: "intis_alerts_receivers",
    nullable: true,
    array: true,
    default: () => "ARRAY[]::integer[]",
  })
  intisAlertsReceivers: number[] | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
