import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PinCodes_device_id_key", ["deviceId"], { unique: true })
@Index("PinCodes_pkey", ["id"], { unique: true })
@Entity("PinCodes", { schema: "public" })
export class PinCodes {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "account_id", nullable: true })
  accountId: number | null;

  @Column("character varying", {
    name: "device_id",
    nullable: true,
    unique: true,
    length: 255,
  })
  deviceId: string | null;

  @Column("character varying", {
    name: "pin_code",
    nullable: true,
    length: 255,
  })
  pinCode: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
