import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("TwoFaActivationRequests_pkey", ["id"], { unique: true })
@Entity("TwoFaActivationRequests", { schema: "public" })
export class TwoFaActivationRequests {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("character varying", { name: "phone", nullable: true, length: 255 })
  phone: string | null;

  @Column("character varying", { name: "type", nullable: true, length: 255 })
  type: string | null;

  @Column("character varying", {
    name: "action_id",
    nullable: true,
    length: 255,
  })
  actionId: string | null;

  @Column("character varying", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
